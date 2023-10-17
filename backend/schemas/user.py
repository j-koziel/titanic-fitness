from pydantic import BaseModel
from datetime import datetime
from schemas.gym import Gym


class User(BaseModel):
  first_name: str
  last_name: str
  full_name: str
  username: str
  password: str
  dob: datetime
  age: int
  userType: str
  eatingPlan: list
  workoutPlans: list
  goals: list
  history: list
  weight: float
  height: float
  preferredGym: Gym