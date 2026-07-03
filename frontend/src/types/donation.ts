export enum PaymentMethod {
  MPESA = "mpesa",
  CARD = "card",
}

export enum PaymentStatus {
  PAID = "paid",
  FAILED = "failed",
}

export enum Currency {
  KES = "KES",
}


export interface DonationRequest {
    name: string;
    email: string;
    amount: number;
    payment_method: PaymentMethod;
    currency: Currency;
    message?: string;
}
export interface DonationSuccessResponse {
    success:true,
    message:string,
    transaction_reference: string,
    status: PaymentStatus;
    amount: number,
    currency: Currency;
}
export interface DonationFailureResponse {
    success:false,
    message:string,
    error_code: string,
    status: PaymentStatus;
}

    