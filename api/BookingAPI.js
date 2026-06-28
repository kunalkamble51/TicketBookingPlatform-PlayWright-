import { BaseAPI } from "./BaseAPI";

export class BookingAPI extends BaseAPI {

    async getBookingDetailsbyref(bookingReference, token) {
        return await this.get(
            `/bookings/${bookingReference}`,
            {
                Authorization: `Bearer ${token}`
            }
        );
    }
  
        async getBookingDetailsbylimit(token) {
            return await this.get(
                `/bookings?page=1&limit=10`,
                {
                    Authorization: `Bearer ${token}`
                }
            );
        }

}