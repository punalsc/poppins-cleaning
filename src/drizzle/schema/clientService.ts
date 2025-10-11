import { pgTable, uuid, primaryKey } from "drizzle-orm/pg-core";
import { relations } from "drizzle-orm";
import { ServiceTable } from "./service";
import { ProductTable } from "./product";
import { createdAt, updatedAt } from "../schemaHelper";

export const ClientServiceTable = pgTable(
  "client_services",
  {
    serviceId: uuid()
      .notNull()
      .references(() => ServiceTable.id, { onDelete: "restrict" }),
    productId: uuid()
      .notNull()
      .references(() => ProductTable.id, { onDelete: "cascade" }),
    createdAt,
    updatedAt,
  },
  (t) => [primaryKey({ columns: [t.serviceId, t.productId] })]
);

export const ClientServiceRelationships = relations(
  ClientServiceTable,
  ({ one }) => {
    service: one();
  }
);
