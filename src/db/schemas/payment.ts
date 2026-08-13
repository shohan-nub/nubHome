import {
  pgEnum,
  pgTable,
  serial,
  text,
  integer,
  numeric,
  timestamp,
} from "drizzle-orm/pg-core";
import { booking } from "./booking";


export const paymentMethod = pgEnum("payment_method", [
  "BKASH",
]);

export const paymentStatus = pgEnum("payment_status", [
  "PENDING",
  "VERIFIED",
  "REJECTED",
]);


export const payments = pgTable("payments", {
  id: serial("id").primaryKey(),

  bookingId: integer("booking_id").notNull().references(()=>booking.id),

  method: paymentMethod("method").notNull().default("BKASH"),

  amount: numeric("amount", {
    precision: 10,
    scale: 2,
  }).notNull(),

  transactionId: text("transaction_id").notNull(),

  status: paymentStatus("status").notNull().default("PENDING"),

  createdAt: timestamp("created_at").defaultNow().notNull(),

  updatedAt: timestamp("updated_at").defaultNow().notNull(),
});