import { findAllHouses, findHouseById ,
    createHouse as createHouseRep,
updateHouses as updateHousesRep,
deleteHouses as deleteHousesRep} from "@/repositories/house.repository";


export async function getAllHouses() {
    const houses=await findAllHouses();
    return houses;
    
};

export async function getbyIdService(id:number) {
    const housebyId=await findHouseById(id);
   if(!housebyId){
        throw new Error("House not found");
    };

    return housebyId;
    
};

export async function createHouseService(data:Parameters<typeof createHouseRep>[0]) {
    const createHouse=await createHouseRep(data);

    
    return createHouse;
    
};

export async function updateHouseService(id:number,data:Parameters<typeof updateHousesRep>[1]) {
    const updateHouses=await updateHousesRep(id,data);

    if(!updateHouses){
        throw new Error("house update found");
    }
    return updateHouses;
    
};

export async function deleteHousesService(id:number) {
    const deleteHouses=await deleteHousesRep(id);

    if(!deleteHouses){
        throw new Error("delete House error");
    }
    return deleteHouses;
    
}