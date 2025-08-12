import { defineDb, defineTable, column } from "astro:db";

const Task = defineTable({
  columns: {
    id: column.number({ primaryKey: true }),
    isCompleted: column.boolean(),
    description: column.text(),
  },
});

export default defineDb({
  tables: { Task },
});
