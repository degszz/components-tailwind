import { defineDb, defineTable, column } from 'astro:db';


const Message = defineTable({
  columns: {
    id: column.text({ primaryKey: true }),
    name: column.text(),
    email: column.text(),
    text: column.text()
  },
});

// https://astro.build/db/config
export default defineDb({
  tables: {
    Message,
  }
});
