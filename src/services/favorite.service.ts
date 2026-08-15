import {
    getAllFavoritesRepo,
    getFavoriteByIdRepo,
    createFavoriteRepo as createRepo,
    deleteFavoriteRepo,
} from "@/repositories/favorite.repository";


export async function getAllFavoritesService() {
    const favorites = await getAllFavoritesRepo();

    if (!favorites) {
        throw new Error("Favorites not found");
    }

    return favorites;
}


export async function getFavoriteByIdService(id: number) {
    const favorite = await getFavoriteByIdRepo(id);

    if (!favorite || favorite.length === 0) {
        throw new Error("Favorite not found");
    }

    return favorite;
}


export async function createFavoriteService(
    data: Parameters<typeof createRepo>[0]
) {
    const favorite = await createRepo(data);

    if (!favorite) {
        throw new Error("Favorite creation failed");
    }

    return favorite;
}


export async function deleteFavoriteService(id: number) {
    const favorite = await deleteFavoriteRepo(id);

    if (!favorite) {
        throw new Error("Favorite not found or delete failed");
    }

    return favorite;
}