from decimal import Decimal

MIN_DONATION_AMOUNT = Decimal("1.00")  # Minimum donation amount in Kenyan Shillings (KES)
PAYMENT_SUCCESS_RATE = 0.90  # Simulated success rate for payment processing (90% success)
TRANSACTION_PREFIX = "MSFXN"  # Prefix for transaction reference numbers
TRANSACTION_UUID_LENGTH = 6  # Length of the transaction reference number
PAYMENT_DECLINED="PAYMENT_DECLINED" #Error Code for payment declined

