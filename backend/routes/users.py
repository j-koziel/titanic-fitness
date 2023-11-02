from fastapi import APIRouter, HTTPException, status

from schemas.user import NewUser, CandUser
from schemas.db_utils import load_db

router = APIRouter(prefix="/api/v1/users", tags=["users"])

db = load_db(r"C:/Users/40184214/titanic-fitness/backend/db.json")

@router.get("/")
async def get_all_users():
  return db

@router.post("/")
async def register_new_user(new_user: NewUser):
  for user in db:
    if new_user.email in user["email"]:
      raise HTTPException(400, detail="This user already exists")
    
  db.append(NewUser)
  return new_user
  
@router.post("/auth")
async def login_user(cand_user: CandUser):
  response_data = {"message": "Successfully logged in"}
  for user in db:
    if cand_user.username == user.username and cand_user.password == user.password:
      response_data["data"] = user
  
  if not response_data["data"]:
    raise HTTPException(500, "Something went wrong")
  else:
    return response_data
  # raise HTTPException(401, detail="Your username or password is incorrect")
      
    
