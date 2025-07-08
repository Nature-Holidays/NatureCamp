from fastapi import APIRouter, HTTPException
from typing import List
from app.models.package import Package
from app.db.mongo import db
from bson import ObjectId
from bson.errors import InvalidId
from pymongo.errors import ServerSelectionTimeoutError, ConnectionFailure
import logging

logger = logging.getLogger(__name__)

router = APIRouter(prefix="/packages", tags=["Packages"])

def get_collection():
    """Get collection with error handling"""
    if db is None:
        raise HTTPException(status_code=503, detail="Database connection not available")
    return db["packages"]

def serialize_package(p):
    p["_id"] = str(p["_id"])
    return p

@router.post("/", response_model=dict)
def create_package(package: Package):
    try:
        collection = get_collection()
        data = package.model_dump()
        result = collection.insert_one(data)
        return {"inserted_id": str(result.inserted_id)}
    except (ServerSelectionTimeoutError, ConnectionFailure) as e:
        logger.error(f"Database connection error: {e}")
        raise HTTPException(status_code=503, detail="Database connection failed")
    except Exception as e:
        logger.error(f"Error creating package: {e}")
        raise HTTPException(status_code=500, detail="Internal server error")

@router.get("/", response_model=List[dict])
def get_all_packages():
    try:
        collection = get_collection()
        return [serialize_package(p) for p in collection.find()]
    except (ServerSelectionTimeoutError, ConnectionFailure) as e:
        logger.error(f"Database connection error: {e}")
        raise HTTPException(status_code=503, detail="Database connection failed")
    except Exception as e:
        logger.error(f"Error fetching packages: {e}")
        raise HTTPException(status_code=500, detail="Internal server error")

@router.get("/{package_id}", response_model=dict)
def get_package(package_id: str):
    try:
        obj_id = ObjectId(package_id)
    except InvalidId:
        raise HTTPException(status_code=400, detail="Invalid ID format")
    
    try:
        collection = get_collection()
        package = collection.find_one({"_id": obj_id})
        if not package:
            raise HTTPException(status_code=404, detail="Package not found")
        return serialize_package(package)
    except (ServerSelectionTimeoutError, ConnectionFailure) as e:
        logger.error(f"Database connection error: {e}")
        raise HTTPException(status_code=503, detail="Database connection failed")
    except Exception as e:
        logger.error(f"Error fetching package: {e}")
        raise HTTPException(status_code=500, detail="Internal server error")

@router.put("/{package_id}", response_model=dict)
def update_package(package_id: str, package: Package):
    try:
        obj_id = ObjectId(package_id)
    except InvalidId:
        raise HTTPException(status_code=400, detail="Invalid ID format")
    
    try:
        collection = get_collection()
        result = collection.update_one(
            {"_id": obj_id}, {"$set": package.model_dump()}
        )
        if result.matched_count == 0:
            raise HTTPException(status_code=404, detail="Package not found")
        return {"message": "Package updated successfully"}
    except (ServerSelectionTimeoutError, ConnectionFailure) as e:
        logger.error(f"Database connection error: {e}")
        raise HTTPException(status_code=503, detail="Database connection failed")
    except Exception as e:
        logger.error(f"Error updating package: {e}")
        raise HTTPException(status_code=500, detail="Internal server error")

@router.delete("/{package_id}", response_model=dict)
def delete_package(package_id: str):
    try:
        obj_id = ObjectId(package_id)
    except InvalidId:
        raise HTTPException(status_code=400, detail="Invalid ID format")
    
    try:
        collection = get_collection()
        result = collection.delete_one({"_id": obj_id})
        if result.deleted_count == 0:
            raise HTTPException(status_code=404, detail="Package not found")
        return {"message": "Package deleted successfully"}
    except (ServerSelectionTimeoutError, ConnectionFailure) as e:
        logger.error(f"Database connection error: {e}")
        raise HTTPException(status_code=503, detail="Database connection failed")
    except Exception as e:
        logger.error(f"Error deleting package: {e}")
        raise HTTPException(status_code=500, detail="Internal server error")