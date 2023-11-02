from fastapi import APIRouter
from schemas.db_utils import load_db

router = APIRouter(prefix="/api/v1/gyms")

db = load_db("/home/jonathan/coding-stuff/titanic-fitness/backend/gyms_db.json")

@router.get("/")
async def get_all_gyms():
  return db