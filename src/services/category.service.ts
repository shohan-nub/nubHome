import {
    getAllCategoriesRepo,
    getCategoryByIdRepo,
    createCategoryRepo as createRepo,
    updateCategoryRepo as updateRepo,
    deleteCategoryRepo ,
} from "@/repositories/category.repository";


// Get all categories
export async function getAllCategoriesService() {
    const categories = await getAllCategoriesRepo();

    if (!categories) {
        throw new Error("Categories not found");
    }

    return categories;
}


// Get category by id
export async function getCategoryByIdService(id: number) {
    const category = await getCategoryByIdRepo(id);

    if (!category || category.length === 0) {
        throw new Error("Category not found");
    }

    return category;
}


// Create category
export async function createCategoryService(data: Parameters<typeof createRepo>[0]) {
    const category = await createRepo(data);

    if (!category) {
        throw new Error("Category creation failed");
    }

    return category;
}


// Update category
export async function updateCategoryService(
    id: number,
    data: Parameters< typeof updateRepo>[1]
) {
    const category = await updateRepo(id, data);

    if (!category) {
        throw new Error("Category not found or update failed");
    }

    return category;
}


// Delete category
export async function deleteCategoryService(id: number) {
    const category = await deleteCategoryRepo(id);

    if (!category) {
        throw new Error("Category not found or delete failed");
    }

    return category;
}