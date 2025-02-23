import pandas as pd
import fitz  # PyMuPDF for PDF processing
import json
from fastapi import HTTPException

# ✅ CSV Metadata Extraction
def extract_csv_metadata(file_path):
    try:
        df = pd.read_csv(file_path, nrows=5)  # Read first 5 rows
        metadata = {
            "columns": df.columns.tolist(),
            "num_rows": len(df),
            "num_cols": len(df.columns),
        }
        return metadata
    except Exception as e:
        raise HTTPException(status_code=400, detail=f"Error processing CSV: {str(e)}")

# ✅ PDF Text Extraction
def extract_pdf_text(file_path):
    try:
        doc = fitz.open(file_path)
        text = ""
        for page in doc:
            text += page.get_text()
        return {"text": text[:1000]}  # First 1000 chars preview
    except Exception as e:
        raise HTTPException(status_code=400, detail=f"Error processing PDF: {str(e)}")

# ✅ JSON Metadata Extraction
def extract_json_metadata(file_path):
    try:
        with open(file_path, "r") as f:
            data = json.load(f)
        return {"keys": list(data.keys()) if isinstance(data, dict) else "Invalid JSON Structure"}
    except Exception as e:
        raise HTTPException(status_code=400, detail=f"Error processing JSON: {str(e)}")
