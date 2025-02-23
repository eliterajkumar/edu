from fastapi import APIRouter, HTTPException

router = APIRouter()

@router.get("/")
async def get_users():
    return [{"id": 1, "name": "John Doe"}]
