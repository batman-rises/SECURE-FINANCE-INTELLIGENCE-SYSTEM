from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

from app.config import APP_NAME, APP_VERSION
from app.database import client, db
from app.auth.routes import router as auth_router


app = FastAPI(
    title=APP_NAME,
    description="Secure Finance Intelligence System",
    version=APP_VERSION
)


app.add_middleware(
    CORSMiddleware,
    allow_origins=[
        "http://localhost:5173",
        "https://secure-finance-intelligence-system.vercel.app",
    ],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)


app.include_router(auth_router)


@app.get("/")
def root():
    return {"message": "SFIS API is running"}


@app.get("/health")
def health_check():
    return {"status": "healthy"}


@app.get("/db-test")
def database_test():
    try:
        client.admin.command("ping")

        return {
            "status": "connected",
            "database": db.name
        }

    except Exception as e:
        return {
            "status": "error",
            "message": str(e)
        }