import { db } from "@/db";
import { categories } from "@/db/schemas";
import { eq } from "drizzle-orm";

export async function getAllCategoriesRepo() {
    return await db
        .select()
        .from(categories);
}

export async function getCategoryByIdRepo(id: number) {
    return await db
        .select()
        .from(categories)
        .where(eq(categories.id, id));
}

export async function createCategoryRepo(data: typeof categories.$inferInsert) {
    const [result ]= await db
        .insert(categories)
        .values(data)
        .returning();

    return result ;
}

export async function updateCategoryRepo(
    id: number,
    data: Partial<typeof categories.$inferInsert>
) {
    const [result ]= await db
        .update(categories)
        .set(data)
        .where(eq(categories.id, id))
        .returning();

    return result ;
}

export async function deleteCategoryRepo(id: number) {
    const [result] = await db
        .delete(categories)
        .where(eq(categories.id, id))
        .returning();

    return result;
}