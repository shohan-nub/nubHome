CREATE TYPE "public"."bookStatus" AS ENUM('pending', 'approved', 'rejected', 'cancelled');--> statement-breakpoint
CREATE TYPE "public"."houseStatus" AS ENUM('available', 'hold', 'booked');--> statement-breakpoint
CREATE TYPE "public"."payment_method" AS ENUM('BKASH');--> statement-breakpoint
CREATE TYPE "public"."payment_status" AS ENUM('PENDING', 'VERIFIED', 'REJECTED');--> statement-breakpoint
CREATE TABLE "booking" (
	"id" serial PRIMARY KEY NOT NULL,
	"userId" integer NOT NULL,
	"houseId" integer NOT NULL,
	"advanceMoney" numeric(10, 2),
	"status" "bookStatus" DEFAULT 'approved' NOT NULL
);
--> statement-breakpoint
CREATE TABLE "categories" (
	"id" serial PRIMARY KEY NOT NULL,
	"name" text NOT NULL,
	"slug" text NOT NULL,
	"desc" text,
	"createdAt" timestamp DEFAULT now(),
	"updatedAt" timestamp DEFAULT now(),
	CONSTRAINT "categories_slug_unique" UNIQUE("slug")
);
--> statement-breakpoint
CREATE TABLE "favorite" (
	"id" serial NOT NULL,
	"userId" integer NOT NULL,
	"houseId" integer NOT NULL,
	"createdAt" timestamp DEFAULT now() NOT NULL
);
--> statement-breakpoint
CREATE TABLE "houses" (
	"id" serial PRIMARY KEY NOT NULL,
	"title" text NOT NULL,
	"slug" text NOT NULL,
	"desc" text NOT NULL,
	"categoryId" integer NOT NULL,
	"price" numeric(10, 2) NOT NULL,
	"advanceAmount" numeric(10, 2) NOT NULL,
	"location" text NOT NULL,
	"address" text NOT NULL,
	"bedroom" integer NOT NULL,
	"bathroom" integer NOT NULL,
	"area" integer,
	"status" "houseStatus" DEFAULT 'available' NOT NULL,
	"createdAt" timestamp DEFAULT now() NOT NULL,
	"updatedAt" timestamp DEFAULT now() NOT NULL,
	CONSTRAINT "houses_slug_unique" UNIQUE("slug")
);
--> statement-breakpoint
CREATE TABLE "houseImage" (
	"id" serial PRIMARY KEY NOT NULL,
	"houseId" integer NOT NULL,
	"imageUrl" text NOT NULL,
	"createdAt" timestamp DEFAULT now()
);
--> statement-breakpoint
CREATE TABLE "payments" (
	"id" serial PRIMARY KEY NOT NULL,
	"booking_id" integer NOT NULL,
	"method" "payment_method" DEFAULT 'BKASH' NOT NULL,
	"amount" numeric(10, 2) NOT NULL,
	"transaction_id" text NOT NULL,
	"status" "payment_status" DEFAULT 'PENDING' NOT NULL,
	"created_at" timestamp DEFAULT now() NOT NULL,
	"updated_at" timestamp DEFAULT now() NOT NULL
);
--> statement-breakpoint
ALTER TABLE "booking" ADD CONSTRAINT "booking_userId_users_id_fk" FOREIGN KEY ("userId") REFERENCES "public"."users"("id") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "booking" ADD CONSTRAINT "booking_houseId_houses_id_fk" FOREIGN KEY ("houseId") REFERENCES "public"."houses"("id") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "favorite" ADD CONSTRAINT "favorite_userId_users_id_fk" FOREIGN KEY ("userId") REFERENCES "public"."users"("id") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "favorite" ADD CONSTRAINT "favorite_houseId_houses_id_fk" FOREIGN KEY ("houseId") REFERENCES "public"."houses"("id") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "houses" ADD CONSTRAINT "houses_categoryId_categories_id_fk" FOREIGN KEY ("categoryId") REFERENCES "public"."categories"("id") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "houseImage" ADD CONSTRAINT "houseImage_houseId_houses_id_fk" FOREIGN KEY ("houseId") REFERENCES "public"."houses"("id") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "payments" ADD CONSTRAINT "payments_booking_id_booking_id_fk" FOREIGN KEY ("booking_id") REFERENCES "public"."booking"("id") ON DELETE no action ON UPDATE no action;