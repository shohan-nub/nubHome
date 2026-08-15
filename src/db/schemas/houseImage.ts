

import { pgTable,serial,integer,text,timestamp } from "drizzle-orm/pg-core";
import { houses } from "./house";
import { relations } from "drizzle-orm";


export const houseImage=pgTable("houseImage",{
    id:serial("id").primaryKey(),
    houseId:integer("houseId").notNull().references(()=>houses.id),
    imageUrl:text("imageUrl").notNull(),
    createdAt:timestamp("createdAt").defaultNow(),
});

export const houseImageRelation=relations(houseImage,({one,many})=>({
    houses:one(houses,{
        fields:[houseImage.id],
        references:[houses.id]
    })
}))