from pydantic import BaseModel

class Gym(BaseModel):
  staff: list[str] = []
  location: str = ""
  users: list[str] = []