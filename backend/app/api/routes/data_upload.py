from fastapi import APIRouter, UploadFile, File, HTTPException
import shutil
import os

router = APIRouter()

UPLOAD_DIR = "uploaded_data"
os.makedirs(UPLOAD_DIR, exist_ok=True)

# ✅ Allowed File Extensions
ALLOWED_EXTENSIONS = {".csv", ".pdf", ".json"}
MAX_FILE_SIZE_MB = 20  # ✅ Max File Size

def is_allowed_file(filename: str):
    ext = os.path.splitext(filename)[1].lower()
    return ext in ALLOWED_EXTENSIONS

@router.post("/upload/")
async def upload_file(file: UploadFile = File(...)):
    if not is_allowed_file(file.filename):
        raise HTTPException(status_code=400, detail="❌ Invalid file type. Allowed: CSV, PDF, JSON")

    file_size = file.file.seek(0, 2)  # Get file size
    file.file.seek(0)  # Reset file pointer
    if file_size > MAX_FILE_SIZE_MB * 1024 * 1024:
        raise HTTPException(status_code=400, detail="❌ File size exceeds 20MB limit")

    file_path = os.path.join(UPLOAD_DIR, file.filename)
    with open(file_path, "wb") as buffer:
        shutil.copyfileobj(file.file, buffer)

    return {"filename": file.filename, "status": "✅ Uploaded Successfully"}
