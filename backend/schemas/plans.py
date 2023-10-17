from pydantic import BaseModel

class Plan():
  planLength: int

class EatingPlan(BaseModel, Plan):
  goalWeight: int
  meals: list

class WorkoutPlan(BaseModel, Plan):
  difficulty: str
  workouts: list