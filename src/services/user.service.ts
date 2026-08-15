import {
    getAllUsersRepo,
    getUserByIdRepo,
    createUserRepo as createRepo,
    updateUserRepo as updateRepo,
    deleteUserRepo,
} from "@/repositories/user.repository";


export async function getAllUsersService() {
    const users = await getAllUsersRepo();

    if (!users) {
        throw new Error("Users not found");
    }

    return users;
}



export async function getUserByIdService(id: number) {
    const user = await getUserByIdRepo(id);

    if (!user || user.length === 0) {
        throw new Error("User not found");
    }

    return user;
}



export async function createUserService(
    data: Parameters<typeof createRepo>[0]
) {
    const user = await createRepo(data);

    if (!user) {
        throw new Error("User creation failed");
    }

    return user;
}


export async function updateUserService(
    id: number,
    data: Parameters<typeof updateRepo>[1]
) {
    const user = await updateRepo(id, data);

    if (!user) {
        throw new Error("User not found or update failed");
    }

    return user;
}



export async function deleteUserService(id: number) {
    const user = await deleteUserRepo(id);

    if (!user) {
        throw new Error("User not found or delete failed");
    }

    return user;
}