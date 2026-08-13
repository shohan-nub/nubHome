import { relations } from "drizzle-orm";
import { pgTable,serial,text,timestamp } from "drizzle-orm/pg-core";
import { houses } from "./house";


export const categories=pgTable("categories",{
    id:serial("id").primaryKey(),
    name:text("name").notNull(),
    slug:text("slug").notNull().unique(),
    desc:text("desc"),
    createdAt:timestamp("createdAt").defaultNow(),
    updatedAt:timestamp("updatedAt").defaultNow()

});

export const categoryRelation=relations(categories,({many})=>({
    houses:many(houses),
}));