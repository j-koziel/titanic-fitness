from fastapi import APIRouter, HTTPException, status
from datetime import datetime

from schemas.user import User, NewUser, CandUser
from schemas.db_utils import load_db, save_db

router = APIRouter(prefix="/api/v1/users", tags=["users"])

db = load_db(r"C:/Users/40184214/titanic-fitness/backend/db.json")

@router.get("/")
async def get_all_users():
  return db

@router.post("/")
async def register_new_user(new_user: NewUser):
  for user in db:
    if new_user.email == user.email:
      raise HTTPException(400, detail="This user already exists")
    
  user_to_append = dict(new_user)
    
  db.append(User(**user_to_append))
  save_db(db, r"C:/Users/40184214/titanic-fitness/backend/db.json")
  return db[-1]
  
@router.post("/auth")
async def login_user(cand_user: CandUser):
  for user in db:
    if cand_user.username == user.username and cand_user.password == user.password:
      return user
    else:
      continue  
      
  raise HTTPException(500, "Something went wrong")


  # raise HTTPException(401, detail="Your username or password is incorrect")
      
    
