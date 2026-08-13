

import { pgTable,serial,integer,text,timestamp } from "drizzle-orm/pg-core";
import { houses } from "./house";


export const houseImage=pgTable("houseImage",{
    id:serial("id").primaryKey(),
    houseId:integer("houseId").notNull().references(()=>houses.id),
    imageUrl:text("imageUrl").notNull(),
    createdAt:timestamp("createdAt").defaultNow(),
})