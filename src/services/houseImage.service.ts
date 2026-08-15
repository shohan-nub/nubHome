import {
    getAllHouseImagesRepo,
    getHouseImageByIdRepo,
    createHouseImageRepo as createRepo,
    updateHouseImageRepo as updateRepo,
    deleteHouseImageRepo,
} from "../repositories/houseImage.repository";


// Get all images
export async function getAllHouseImagesService() {
    const images = await getAllHouseImagesRepo();

    if (!images) {
        throw new Error("House images not found");
    }

    return images;
}



export async function getHouseImageByIdService(id: number) {
    const image = await getHouseImageByIdRepo(id);

    if (!image || image.length === 0) {
        throw new Error("House image not found");
    }

    return image;
}



export async function createHouseImageService(
    data: Parameters<typeof createRepo>[0]
) {
    const image = await createRepo(data);

    if (!image) {
        throw new Error("House image creation failed");
    }

    return image;
}


// Update image
export async function updateHouseImageService(
    id: number,
    data: Parameters<typeof updateRepo>[1]
) {
    const image = await updateRepo(id, data);

    if (!image) {
        throw new Error("House image not found or update failed");
    }

    return image;
}


// Delete image
export async function deleteHouseImageService(id: number) {
    const image = await deleteHouseImageRepo(id);

    if (!image) {
        throw new Error("House image not found or delete failed");
    }

    return image;
}