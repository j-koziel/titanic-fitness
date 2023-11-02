from pydantic import BaseModel
from datetime import datetime
from schemas.gym import Gym


class User(BaseModel):
  first_name: str
  last_name: str
  full_name: str
  email: str
  username: str
  password: str
  dob: datetime
  age: int
  userType: str = "free"
  eatingPlan: list = []
  workoutPlans: list = []
  goals: list = []
  history: list = []
  weight: float = 0
  height: float = 0
  preferredGym: Gym

class CandUser(BaseModel):
  username: str
  password: str
  
class NewUser(BaseModel):
  first_name: str
  last_name: str
  dob: datetime
  username: str
  password: str
  email: str