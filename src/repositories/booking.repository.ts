import { db } from "@/db";
import { booking } from "@/db/schemas";

import { eq } from "drizzle-orm";


export async function getAllBookingsRepo() {
    return await db
        .select()
        .from(booking);
}



export async function getBookingByIdRepo(id: number) {
    return await db
        .select()
        .from(booking)
        .where(eq(booking.id, id));
}



export async function createBookingRepo(
    data: typeof booking.$inferInsert
) {
    const [result] = await db
        .insert(booking)
        .values(data)
        .returning();

    return result;
}



export async function updateBookingRepo(
    id: number,
    data: Partial<typeof booking.$inferInsert>
) {
    const [result] = await db
        .update(booking)
        .set(data)
        .where(eq(booking.id, id))
        .returning();

    return result;
}



export async function deleteBookingRepo(id: number) {
    const [result] = await db
        .delete(booking)
        .where(eq(booking.id, id))
        .returning();

    return result;
}