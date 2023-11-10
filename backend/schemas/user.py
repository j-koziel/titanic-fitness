from pydantic import BaseModel
from schemas.gym import Gym


class User(BaseModel):
  firstName: str
  lastName: str
  email: str
  username: str
  password: str
  dob: str
  age: int = 18
  userType: str = "free"
  eatingPlan: list = [],
  meals: list = []
  workouts: list[dict] = []
  goals: list = [[0, 0], [0, 0], [0, 0]]
  dailyStreakGoal: list = [0, 0]
  calorieGoal: list = [0, 0]
  weightGoal: list = [0, 0]
  history: list[dict] = []
  weight: float = 0
  height: float = 0
  preferredGym: Gym = Gym()

class CandUser(BaseModel):
  username: str
  password: str
  
class NewUser(BaseModel):
  firstName: str
  lastName: str
  dob: str 
  username: str
  password: str
  email: str