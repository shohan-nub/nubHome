

import { timestamp } from "drizzle-orm/pg-core";
import { numeric, pgTable ,serial,integer, text, pgEnum} from "drizzle-orm/pg-core";
import { categories } from "./category";
import { relations } from "drizzle-orm";
import { houseImage } from "./houseImage";
import { favorites } from "./favorite";
import { booking } from "./booking";

export const houseStatus=pgEnum("houseStatus",[
    "available",
    "hold",
    "booked"
])

export const houses=pgTable("houses",{
    id:serial("id").primaryKey(),
    title:text("title").notNull(),
    slug:text("slug").notNull().unique(),
    desc:text("desc").notNull(),

    categoryId:integer("categoryId").notNull().references(()=>categories.id),

        price:numeric("price",{
             precision:10, scale:2 }).notNull(),
    
        advanceAmount:numeric("advanceAmount",{
             precision:10 ,scale:2 }).notNull(),

    location:text("location").notNull(),
    address:text("address").notNull(),
    bedroom:integer("bedroom").notNull(),
    bathroom:integer("bathroom").notNull(),
    area:integer("area"),
    status:houseStatus("status").notNull().default("available"),
    createdAt:timestamp("createdAt").defaultNow().notNull(),
    updatedAt:timestamp("updatedAt").defaultNow().notNull()

});

export const houseRelation=relations(houses,({one,many})=>({
   
    categories:one(categories,{
        fields:[houses.id],
        references:[categories.id]
    }),
    houseImage:many(houseImage),

    favorites:many(favorites),

    booking:many(booking)
}));