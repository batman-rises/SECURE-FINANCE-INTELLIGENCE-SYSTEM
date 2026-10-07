import os
from dotenv import load_dotenv

load_dotenv()

APP_NAME = os.getenv("APP_NAME", "SFIS API")
APP_VERSION = os.getenv("APP_VERSION", "1.0.0")
JWT_SECRET = os.getenv("JWT_SECRET")

MONGODB_URL = os.getenv("MONGODB_URL")
MONGODB_DATABASE = os.getenv("MONGODB_DATABASE", "sfis")

