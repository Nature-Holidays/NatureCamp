from pymongo import MongoClient
import certifi
import os
from dotenv import load_dotenv

load_dotenv()

MONGO_URI = os.getenv("MONGO_URI")

db = None
packages_coll = None

try:
    client = MongoClient(MONGO_URI)
    db = client["nature_camp"]
    packages_coll = db["packages"]
    print("✅ MongoDB client initialized successfully")

except Exception as e:
    print("❌ MongoDB connection error:", e)
