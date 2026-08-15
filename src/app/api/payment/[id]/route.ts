import { db } from "@/db";
import { payments } from "@/db/schemas";
import { eq } from "drizzle-orm";


export async function getAllPayment() {
   return await db.select().from(payments);

};

export async function getAllPaymentId(id:number) {
    return await db.select().from(payments).where(eq(payments.id,id));
    
};

export async function createPayment(data:
    typeof payments.$inferInsert
) {
    
    const [newPayment]=await db.insert(payments).values(data).returning();
    return newPayment;
    
};

export async function updatePayment(id:number,data:Partial<typeof payments>) {
    const [updatePayment]=await db.update(payments).
    set(data).where(eq(payments.id,id)).returning();

    return updatePayment;
};

export async function  deletePayment(id:number) {
    const [deletePayment] = await db.delete(payments).where(eq(payments.id,id)).returning()
    return deletePayment
}