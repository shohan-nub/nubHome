import { integer, numeric, pgEnum, pgTable, serial } from "drizzle-orm/pg-core";
import { users } from "./users";
import { houses } from "./house";
import { relations } from "drizzle-orm";
import { payments } from "./payment";

export const bookStatus=pgEnum("bookStatus",[
    "pending","approved","rejected","cancelled"
])

export const booking=pgTable("booking",{
    id:serial("id").primaryKey(),
    userId:integer("userId").notNull().references(()=>users.id),
    houseId:integer("houseId").notNull().references(()=>houses.id),

    advanceAmount:numeric("advanceMoney",{
        precision:10, scale:2
    }),
    status:bookStatus("status").notNull().default("approved")


});

export const bookingRelation=relations(booking,({one})=>({
    users:one(users,{
        fields:[booking.id],
        references:[users.id]
    }),
    
    payment:one(payments,{
        fields:[booking.id],
        references:[payments.id]
    }),

    houses:one(houses,{
        fields:[booking.id],
        references:[houses.id]
    })

}))