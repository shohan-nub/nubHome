import { houses } from "@/db/schemas";
import {
    getAllBookingsRepo,
    getBookingByIdRepo,
    createBookingRepo as createRepo,
    updateBookingRepo as updateRepo,
    deleteBookingRepo,
} from "@/repositories/booking.repository";

import { findHouseById } from "@/repositories/house.repository";



export async function getAllBookingsService() {

    const bookings = await getAllBookingsRepo();

    if (!bookings) {
        throw new Error("Bookings not found");
    }

    return bookings;
}



export async function getBookingByIdService(id: number) {

    const booking = await getBookingByIdRepo(id);

    if (!booking || booking.length === 0) {
        throw new Error("Booking not found");
    }

    return booking;
};

export async function createbookingService(data:
    Parameters< typeof createRepo>[0]
) { const house=await findHouseById(data.houseId);

    if(!house){
        throw new Error(" house cannot find for booking");

    }

    if(house.status!=="available"){
        throw new Error("This house is not available for booking")
    };

    if(house.advanceAmount!==data.advanceAmount){
        throw new Error(" Booking amount is not matching ")
    };
 
    const newBooking=await createRepo(data);
    if(!newBooking){
        throw new Error(" new booking error ")
    };
    return newBooking;

    
}



// Update booking
export async function updateBookingService(
    id: number,
    data: Parameters<typeof updateRepo>[1]
) {

    const booking = await updateRepo(id, data);

    if (!booking) {
        throw new Error("Booking not found or update failed");
    }

    return booking;
}



export async function deleteBookingService(id: number) {

    const booking = await deleteBookingRepo(id);

    if (!booking) {
        throw new Error("Booking not found or delete failed");
    }

    return booking;
}