from celery import Celery

celery_app = Celery("tasks", broker="redis://localhost:6379/0")

@celery_app.task
def train_model_task(model_name: str):
    # Heavy ML processing logic (Fine-tuning, Optimization, etc.)
    return f"Model {model_name} training completed!"
