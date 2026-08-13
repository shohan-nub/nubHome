
import { relations } from "drizzle-orm";
import { pgEnum, pgTable, serial, text,timestamp } from "drizzle-orm/pg-core";
import { favorites } from "./favorite";
import { booking } from "./booking";

export const userRole=pgEnum("userRole",[
    "admin",
    "user"
])

export const users=pgTable("users",{
   id:serial("id").primaryKey(),
   name:text("name").notNull(),
   email:text("email").notNull().unique(),
   hassPass:text("hassPass").notNull(),
   phone:text("phone"),
   role:userRole("role").notNull().default("user"),
   createdAt:timestamp("createdAt").defaultNow().notNull(),
   updatedAt:timestamp("updatedAt").defaultNow().notNull(),


});

export const userRelation=relations(users,({many})=>({
    favorites:many(favorites),
    booking:many(booking),
}))