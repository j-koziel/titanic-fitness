from fastapi import APIRouter, Depends
from fastapi.security import OAuth2PasswordBearer, OAuth2PasswordRequestForm
from schemas.db_utils import load_db
from typing import Annotated

router = APIRouter(prefix="/api/v1/users", tags=["users"])

db = load_db("/home/jonathan/coding-stuff/titanic-fitness/backend/db.json")
oauth2_scheme = OAuth2PasswordBearer(tokenUrl="token")


@router.get("/")
async def get_all_users():
  return db

@router.post("/")
async def create_new_user():
  return "new user created"

@router.post("/auth")
async def auth_user(token: Annotated[str, Depends(oauth2_scheme)]):
  return "user has been authenticated"