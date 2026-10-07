from pymongo import MongoClient
from app.config import MONGODB_URL, MONGODB_DATABASE

client = MongoClient(MONGODB_URL)
db = client[MONGODB_DATABASE]

print("DATABASE:", db.name)
print("COLLECTIONS:", db.list_collection_names())