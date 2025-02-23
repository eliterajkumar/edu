from fastapi import APIRouter

router = APIRouter()

@router.post("/deploy/")
async def deploy_model(model_name: str):
    return {"model": model_name, "status": "Deployment Started!"}
