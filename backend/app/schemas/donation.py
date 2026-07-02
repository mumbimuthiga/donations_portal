from pydantic import BaseModel, Field,EmailStr
from enum import Enum
from typing import Optional
from decimal import Decimal


class PaymentMethod(str, Enum):
    MPESA = "mpesa"
    CARD = "card"

class PaymentStatus(str,Enum):
    PROCESSING  = "processing"
    PAID = "paid"
    FAILED = "failed"
class PaymentCurrency(str,Enum):
    KES = "KES"
    

class DonationBase(BaseModel):
    """
    Base schema for donation data
    """
    name: str = Field(...,min_length=2,max_length=100, description="Name of the donor")
    email: EmailStr = Field(..., description="Email address of the donor")
    amount: Decimal = Field(..., gt=0.00,decimal_places=2, description="Donation amount in Kenyan Shillings (KES)")
    payment_method:PaymentMethod = Field(..., description="Payment method used for the donation")
    currency: PaymentCurrency = Field(..., description="Currency of the donation")
    # message: Optional[str] = Field(default=None,max_length=200, description="Optional message from the donor")

class DonationRequest(DonationBase):
    """
    Schema for donation request payload data
    """
    message: Optional[str] = Field(default=None,max_length=200, description="Optional message from the donor")

    model_config={
        "json_schema_extra": {
            "example": {
                "name": "Veronicah Mumbi",
                "email": "veronicmuthiga@gmail.com",
                "amount": 1000.00,
                "payment_method": "mpesa",
                "currency": "KES",
                "message": "Keep up the good work!"
            }
        }

    }

# class DonationResponse(BaseModel):
#     """
#     Schema for donation response payload data
#     """
#     success: bool=Field(..., description="Indicates whether the donation was successful or not")
#     message: str=Field(..., description="Response Message")
#     transaction_reference: Optional[str]= Field(default=None, description="Unique Transaction reference for the donation")
#     status: PaymentStatus=Field(..., description="Payment Status of the donation")
#     amount:Decimal=Field(..., gt=0.00,decimal_places=2, description="Donation amount in Kenyan Shillings (KES)")
#     currency: PaymentCurrency=Field(..., description="Currency of the donation")

class DonationReceiptBase(BaseModel):
    """
    Schema for donation receipt model
    """
    success: bool=Field(..., description="Indicates whether the donation was successful or not")
    message: str=Field(..., description="Response Message")

class DonationSuccessResponse(DonationReceiptBase):
    """
    Schema for successful donation response model
    """
    transaction_reference: str= Field(..., description="Unique Transaction reference for the donation")
    status: PaymentStatus=Field(...,default=PaymentStatus.PAID, description="Payment Status of the donation")
    amount: Decimal=Field(..., gt=Decimal("0.00"),decimal_places=2, description="Donation amount in Kenyan Shillings (KES)")
    currency: PaymentCurrency=Field(..., description="Currency of the donation")

class DonationFailureResponse(DonationReceiptBase):
    """
    Schema for failed donation response model
    """
    error_code: str = Field(
    ...,
    description="Application-specific error code."
    )
    status: PaymentStatus=Field(..., default=PaymentStatus.FAILED, description="Payment Status of the donation")