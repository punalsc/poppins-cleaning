import { relations } from "drizzle-orm";
import { pgTable, text, integer, pgEnum } from "drizzle-orm/pg-core";
import { id, createdAt, updatedAt } from "@/drizzle/schemaHelper";

export const productStatuses = ["available", "coming", "unavailable"] as const;
export type ProducttStatus = (typeof productStatuses)[number];
export const productStatusEnum = pgEnum("product_status", productStatuses);

export const ProductTable = pgTable("clients", {
  id,
  name: text().notNull(),
  description: text().notNull(),
  price: integer().notNull(),
  status: productStatusEnum().notNull().default("available"),
  createdAt,
  updatedAt,
});

export const ProductRelationships = relations(
  ProductTable,
  ({ one, many }) => ({
    test: one(),
  })
);
