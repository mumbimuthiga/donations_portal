from fastapi import APIRouter, status

from app.schemas.donation import (
    DonationRequest,
    DonationSuccessResponse,
    DonationFailureResponse,
)
from app.services.payment_service import PaymentService

router = APIRouter(
    prefix="/api/v1/donations",
    tags=["Donations"],
)

payment_service = PaymentService()


@router.post(
    "",
    status_code=status.HTTP_200_OK,
    response_model=DonationSuccessResponse | DonationFailureResponse,
    summary="Process a donation",
    description="Accepts a donation request and simulates payment processing.",
)
async def create_donation(request: DonationRequest):
    """
    Process a donor's contribution.

    Returns either:

    - DonationSuccessResponse
    - DonationFailureResponse
    """
    return payment_service.process_donation(request)