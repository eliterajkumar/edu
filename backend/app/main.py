from fastapi import FastAPI
from app.routes import auth, training, deployment, extract

# ✅ FastAPI App Initialization
app = FastAPI(title="Fynorra AI Backend", version="1.0")

# ✅ Register Routes
app.include_router(extract.router, prefix="/api", tags=["Data Extraction"])
app.include_router(auth.router, prefix="/auth", tags=["Authentication"])
app.include_router(training.router, prefix="/train", tags=["Training"])
app.include_router(deployment.router, prefix="/deploy", tags=["Deployment"])

# ✅ Root Endpoint
@app.get("/")
async def root():
    return {"message": "Welcome to Fynorra AI Backend! 🚀"}