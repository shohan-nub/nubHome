import { db } from "@/db";
import { favorites } from "@/db/schemas";
import { eq } from "drizzle-orm";

export async function getAllFavoritesRepo() {
    return await db
        .select()
        .from(favorites);
}


export async function getFavoriteByIdRepo(id: number) {
    return await db
        .select()
        .from(favorites)
        .where(eq(favorites.id, id));
}


export async function createFavoriteRepo(
    data: typeof favorites.$inferInsert
) {
    const [result] = await db
        .insert(favorites)
        .values(data)
        .returning();

    return result;
}


export async function deleteFavoriteRepo(id: number) {
    const [result] = await db
        .delete(favorites)
        .where(eq(favorites.id, id))
        .returning();

    return result;
}