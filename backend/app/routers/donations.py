from fastapi import APIRouter

router=APIRouter(
    prefix="/api/v1",
    tags=["donations"],
)

@router.get("/health")
async def health_check():
    return {
        "status": "ok",
        "message": "MSF Donation API is running smoothly."
    }