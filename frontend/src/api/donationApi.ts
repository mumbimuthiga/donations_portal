import client from './client';
import {DonationRequest} from '../types/donation';

export const submitDonation = async (donationData: DonationRequest) => {
    try {
        const response = await client.post('/api/v1/donations', donationData);
        return response.data;
    } catch (error) {
        console.error('Error creating donation:', error);
        throw error;
    }
}