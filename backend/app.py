from routes import users
from fastapi import FastAPI
from starlette.middleware import Middleware
from starlette.middleware.cors import CORSMiddleware

origins = [
    "http://localhost:5000",
]

middleware = [
    Middleware(CORSMiddleware, allow_origins=origins)
]

app = FastAPI(middleware=middleware)

app.include_router(users.router)

@app.get("/")
def home():
  return "Welcome to the Titanic Fitness API"
