import { relations } from "drizzle-orm";
import { pgTable, text } from "drizzle-orm/pg-core";
import { id, createdAt, updatedAt } from "@/drizzle/schemaHelper";

export const ServiceTable = pgTable("clients", {
  id,
  name: text().notNull(),
  description: text().notNull(),

  createdAt,
  updatedAt,
});

export const ServiceRelationships = relations(
  ServiceTable,
  ({ one, many }) => ({
    test: one(),
  })
);
