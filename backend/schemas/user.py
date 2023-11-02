from pydantic import BaseModel
from datetime import datetime
from schemas.gym import Gym


class User(BaseModel):
  first_name: str
  last_name: str
  email: str
  username: str
  password: str
  dob: str
  age: int = 18
  userType: str = "free"
  eatingPlan: list = []
  workoutPlans: list = []
  goals: list = []
  history: list = []
  weight: float = 0
  height: float = 0
  preferredGym: Gym = []

class CandUser(BaseModel):
  username: str
  password: str
  
class NewUser(BaseModel):
  first_name: str
  last_name: str
  dob: str 
  username: str
  password: str
  email: str