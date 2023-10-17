from fastapi import FastAPI
from schemas.db_utils import load_db

app = FastAPI()

db = load_db("./db.json")

@app.get("/api/v1/users")
def get_all_users():
  return db
