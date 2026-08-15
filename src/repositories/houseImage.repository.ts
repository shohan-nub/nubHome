import { db } from "@/db";
import { houseImage } from "@/db/schemas";

import { eq } from "drizzle-orm";

export async function getAllHouseImagesRepo() {
    return await db
        .select()
        .from(houseImage);
}

export async function getHouseImageByIdRepo(id: number) {
    return await db
        .select()
        .from(houseImage)
        .where(eq(houseImage.id, id));
}

export async function createHouseImageRepo(
    data: typeof houseImage.$inferInsert
) {
    const [result] = await db
        .insert(houseImage)
        .values(data)
        .returning();

    return result;
}

export async function updateHouseImageRepo(
    id: number,
    data: Partial<typeof houseImage.$inferInsert>
) {
    const [result] = await db
        .update(houseImage)
        .set(data)
        .where(eq(houseImage.id, id))
        .returning();

    return result;
}

export async function deleteHouseImageRepo(id: number) {
    const [result] = await db
        .delete(houseImage)
        .where(eq(houseImage.id, id))
        .returning();

    return result;
}