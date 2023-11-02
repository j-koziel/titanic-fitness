from schemas.user import User
import json

def load_db(path: str):
  with open(path) as json_f:
    return [User.model_validate(user) for user in json.load(json_f)]
  
def save_db(db: list[User], path: str):
  with open(path, "w") as json_f:
    json.dump([user.model_dump() for user in db], json_f, indent=4)