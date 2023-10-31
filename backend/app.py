from fastapi import FastAPI
from schemas.db_utils import load_db

app = FastAPI()

db = load_db("./db.json")

@app.get("/")
def home():
  return "Welcome to the Titanic Fitness API"

@app.get("/api/v1/users")
def get_all_users():
  return db

@app.post("/api/v1/users")
def create_new_user():
  return "new user created"
