import b2sdk.v2 as b2
import os

# ✅ Backblaze B2 Credentials
B2_APP_KEY_ID = "f14548e97056343393570f16"
B2_APP_KEY = "1589064337f6"
BUCKET_NAME = "tjpurrj"

# ✅ B2 Client Setup
def get_b2_client():
    info = b2.InMemoryAccountInfo()
    b2_api = b2.B2Api(info)
    b2_api.authorize_account("production", B2_APP_KEY_ID, B2_APP_KEY)
    return b2_api

# ✅ Upload File to B2
def upload_to_b2(file_path, file_name):
    b2_api = get_b2_client()
    bucket = b2_api.get_bucket_by_name(BUCKET_NAME)
    
    with open(file_path, "rb") as file:
        file_info = bucket.upload_bytes(file.read(), file_name)

    # ✅ Generate Public URL
    file_url = f"https://f002.backblazeb2.com/file/{BUCKET_NAME}/{file_name}"
    return {"file_url": file_url, "status": "✅ Uploaded to Backblaze B2"}
