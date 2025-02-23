from fastapi import APIRouter, UploadFile, File
import pandas as pd
import PyPDF2
import io

router = APIRouter()

# ✅ Extract Metadata from CSV
def extract_csv_metadata(file):
    df = pd.read_csv(file, nrows=5)
    return {
        "file_type": "CSV",
        "columns": list(df.columns),
        "sample_data": df.to_dict(orient="records"),
        "num_rows": len(df),
        "num_columns": len(df.columns),
    }

# ✅ Extract Metadata from PDF
def extract_pdf_metadata(file):
    reader = PyPDF2.PdfReader(file)
    metadata = reader.metadata
    text = "\n".join([page.extract_text() for page in reader.pages[:2]])  

    return {
        "file_type": "PDF",
        "title": metadata.title if metadata.title else "Unknown",
        "author": metadata.author if metadata.author else "Unknown",
        "num_pages": len(reader.pages),
        "sample_text": text[:500]  
    }

# ✅ API Route for File Metadata Extraction
@router.post("/extract-metadata/")
async def extract_metadata(file: UploadFile = File(...)):
    try:
        file_content = await file.read()
        file_extension = file.filename.split(".")[-1].lower()

        if file_extension == "csv":
            metadata = extract_csv_metadata(io.BytesIO(file_content))
        elif file_extension == "pdf":
            metadata = extract_pdf_metadata(io.BytesIO(file_content))
        else:
            return {"error": "Unsupported file type. Upload CSV or PDF only."}

        return {"filename": file.filename, "metadata": metadata}

    except Exception as e:
        return {"error": str(e)}
