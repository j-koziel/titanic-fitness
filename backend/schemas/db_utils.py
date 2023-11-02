from schemas.user import User
import json

def load_db(path: str):
  with open(path) as json_f:
    return [User.model_validate(user) for user in json.load(json_f)]