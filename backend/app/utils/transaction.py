from datetime import datetime
import uuid

from app.core.constants import TRANSACTION_PREFIX, TRANSACTION_UUID_LENGTH

def generate_transaction_reference() -> str:
    """
    Generate a unique transaction reference number for a donation.
    The reference number is prefixed with TRANSACTION_PREFIX and includes a UUID.

    Returns:
        str: A unique transaction reference number.
    """
    date_str=datetime.now().strftime("%Y%m%d%H%M%S")
    unique_id = uuid.uuid4().hex[:TRANSACTION_UUID_LENGTH].upper()  # Generate a unique 8-character ID

    return f"{TRANSACTION_PREFIX}--{date_str}--{unique_id}"  # Combine prefix, date, and unique ID
  