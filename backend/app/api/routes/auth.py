from fastapi import APIRouter, HTTPException, Depends
from backend.app.security import create_access_token, get_password_hash, verify_password
from datetime import timedelta

router = APIRouter()

fake_users_db = {
    "user@example.com": {
        "username": "user",
        "password": get_password_hash("password123"),
    }
}

@router.post("/login")
async def login(email: str, password: str):
    user = fake_users_db.get(email)
    if not user or not verify_password(password, user["password"]):
        raise HTTPException(status_code=401, detail="Invalid credentials")

    access_token = create_access_token({"sub": email}, expires_delta=timedelta(minutes=60))
    return {"access_token": access_token, "token_type": "bearer"}
