from fastapi import FastAPI
from app.routers.donations import router as donation_router

app = FastAPI(
    title="Donation API",
    version="1.0.0",
    description="API for managing donations and related operations. for MSF-Donation-POrtal",
)
app.include_router(donation_router)