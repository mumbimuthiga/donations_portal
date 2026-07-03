import logging
import random

# from fastapi import logger

from app.core.constants import(
    PAYMENT_SUCCESS_RATE,
    PAYMENT_DECLINED

)
from app.schemas.donation import (
    DonationRequest,
    DonationSuccessResponse,
    DonationFailureResponse,
    PaymentStatus,
)
from app.utils.transaction import generate_transaction_reference
logger = logging.getLogger(__name__)

class PaymentService:
    """
    Service class for handling payment processing and donation operations.
    """
    def process_donation(self, donation_request: DonationRequest)->DonationSuccessResponse | DonationFailureResponse:
        """process_donation processes a donation request and returns a response indicating success or failure."""
        logger.info("Processing donation",
                extra={
                    "email": donation_request.email,
                    "amount": donation_request.amount,
                    "payment_method": donation_request.payment_method,
                    "currency": donation_request.currency,

                },)
        if self.simulate_payment():
            transaction_reference=generate_transaction_reference()
            logger.info("Donation processed successfully",extra={
            "transaction_reference": transaction_reference

        },)
        return DonationSuccessResponse(
            success=True,
            message="Donation processed successfully.",
            transaction_reference=transaction_reference,
            status=PaymentStatus.PAID,
            amount=donation_request.amount,
            currency=donation_request.currency,
        )
        logger.warning("Donation processing failed",extra={ 
             "email": donation_request.email,
        },)
        return DonationFailureResponse(
        success=False,
        message="Donation processing failed.",
        error_code=PAYMENT_DECLINED,
        status=PaymentStatus.FAILED,
        # amount=donation_request.amount,
        # currency=donation_request.currency,
    )

    def simulate_payment(self):
        """
        Simulate payment processing with a predefined success rate.

        Returns:
            bool: True if the payment is successful, False otherwise.
        """
        return random.random() < PAYMENT_SUCCESS_RATE