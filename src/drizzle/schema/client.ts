import { relations } from "drizzle-orm";
import { pgTable, text } from "drizzle-orm/pg-core";
import { id, createdAt, updatedAt } from "@/drizzle/schemaHelper";

export const ServiceTable = pgTable("clients", {
  id,
  name: text().notNull(),
  address: text().notNull(),
  createdAt,
  updatedAt,
});

export const ClientRelationships = relations(ServiceTable, ({ one, many }) => ({
  test: one(),
}));
