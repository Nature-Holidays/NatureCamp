from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from app.routes.packages import router as packages_router

app = FastAPI(title="NatureCamp API")

# Allow your frontend origin
app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:5173"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

app.include_router(packages_router)

@app.get("/")
def root():
    return {"message": "NatureCamp FastAPI + MongoDB is running"}
