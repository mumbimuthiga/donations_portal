from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from app.routers.donations import router as donation_router

app = FastAPI(
    title="Donation API",
    version="1.0.0",
    description="API for managing donations and related operations. for MSF-Donation-POrtal",
)
origins = [
    "http://localhost:5173",
    "https://donations-portal-git-develop-mumbimuthigas-projects.vercel.app/"
]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)
app.include_router(donation_router)