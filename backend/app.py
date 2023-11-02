from routes import users
from fastapi import FastAPI
from starlette.middleware import Middleware
from starlette.middleware.cors import CORSMiddleware

app = FastAPI()

app.include_router(users.router)

@app.get("/")
def home():
  return "Welcome to the Titanic Fitness API"


origins = ["*"]    
app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    expose_headers=["*"],
    allow_methods=["*"],
    allow_headers=["*"])
