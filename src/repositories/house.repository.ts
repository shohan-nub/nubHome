import { db } from "@/db"
import {  houses } from "@/db/schemas"
import { eq } from "drizzle-orm"


export async function findAllHouses() {
    return await db.query.houses.findMany({
        with:{
            categories:true,
            houseImage:true
        }
    })
    
};

export async function findHouseById(id:number) {
    return await db.query.houses.findFirst({
        where:(eq(houses.id,id)),
        with:{
            categories:true,
            houseImage:true
        }
    })
};

export async function createHouse(data: typeof houses.$inferInsert) {
    const [newhouses]=await db.insert(houses).
        values(data).returning();
        
        return newhouses;
    
};

export async function updateHouses(id:number,
    data:Partial<typeof houses.$inferInsert>
) {
    const [updateHouse]=await db.update(houses).
        set({...data, updatedAt:new Date(),})
            .where(eq(houses.id,id)).returning();

    return updateHouse;
};

export async function deleteHouses(id:number) {
    const [deleteHouse]= await db.delete(houses).
        where(eq(houses.id,id)).returning();
    return deleteHouse;
    
}