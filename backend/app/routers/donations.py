from fastapi import APIRouter

from app.schemas.donation import(
    DonationRequest,
    DonationSuccessResponse,
    DonationFailureResponse,
    PaymentStatus,
)
from app.services.payment_service import PaymentService
router=APIRouter(
    prefix="/api/v1",
    tags=["donations"],
)
payment_service = PaymentService()

@router.get("/health")
async def health_check():
    return {
        "status": "ok",
        "message": "MSF Donation API is running smoothly."
    }
@router.post("/donate", response_model=DonationSuccessResponse | DonationFailureResponse)
async def create_donation(donation_request: DonationRequest):
    """
    Endpoint to process a donation request.

    Args:
        donation_request (DonationRequest): The donation request payload.

    Returns:
        DonationSuccessResponse | DonationFailureResponse: The response indicating success or failure of the donation.
    """
    return payment_service.process_donation(donation_request)