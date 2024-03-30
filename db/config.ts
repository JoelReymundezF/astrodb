import { column, defineDb, defineTable } from 'astro:db';

// https://astro.build/db/config

const Author = defineTable({
  columns: {
    id: column.number({ primaryKey: true }),
    name: column.text(),
  }
});

const Comment = defineTable({
  columns: {
    author: column.text(),
    body: column.text({ optional: true }),
    content: column.text({ optional: true }),
  }
})

export default defineDb({
  tables: { Comment }
});
