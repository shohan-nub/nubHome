import { db } from "@/db";
import { users } from "@/db/schemas";
import { eq } from "drizzle-orm";


export async function getAllUsersRepo() {
    return await db
        .select()
        .from(users);
}


export async function getUserByIdRepo(id: number) {
    return await db
        .select()
        .from(users)
        .where(eq(users.id, id));
}


export async function createUserRepo(
    data: typeof users.$inferInsert
) {
    const [result] = await db
        .insert(users)
        .values(data)
        .returning();

    return result;
}


export async function updateUserRepo(
    id: number,
    data: Partial<typeof users.$inferInsert>
) {
    const [result] = await db
        .update(users)
        .set(data)
        .where(eq(users.id, id))
        .returning();

    return result;
}


export async function deleteUserRepo(id: number) {
    const [result] = await db
        .delete(users)
        .where(eq(users.id, id))
        .returning();

    return result;
}