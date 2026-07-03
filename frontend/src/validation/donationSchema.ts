import {z} from "zod";
import { Currency, PaymentMethod } from "../types/donation";
export  const donationSchema = z.object({
    name:z.string().min(2,{message:"Name must be at least 2 characters"}).max(100,{message:"Name must be less than 100 characters"}),
    email:z.email("Please enter a valid email address"),
    amount:z.number({error:"Donation amount is required"}).positive({message:"Donation amount must be greater than 0"}),
    payment_method:z.nativeEnum(PaymentMethod,{error:"Please select a payment method"}),
    currency:z.nativeEnum(Currency,{error:"Please select a currency"}),
    message:z.string().max(200,"Message must be less than 200 characters").optional()
    
});
export type DonationFormData = z.infer<typeof donationSchema>;