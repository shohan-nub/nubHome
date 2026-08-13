

import { serial,integer } from "drizzle-orm/pg-core";
import { pgTable ,timestamp} from "drizzle-orm/pg-core";
import { users } from "./users";
import { houses } from "./house";
import { relations } from "drizzle-orm";

export const favorites=pgTable("favorite",{
    id:serial("id").notNull(),
    userId:integer("userId").notNull().references(()=>users.id),
    houseId:integer("houseId").notNull().references(()=>houses.id),
    createdAt:timestamp("createdAt").defaultNow().notNull()
});

export const favoriteRelation=relations(favorites,({one})=>({
    users:one(users,{
        fields:[favorites.id],
        references:[users.id]
    }),
    houses:one(houses,{
        fields:[favorites.id],
        references:[houses.id]
    })
}))