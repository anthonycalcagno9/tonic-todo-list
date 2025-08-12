import { db, Task } from "astro:db";

export default async function seed() {
  await db
    .insert(Task)
    .values([{ id: 1, isCompleted: false, description: "Example Task! Please click Complete and then click Delete" }]);

  console.log("seed data inserted into table");
}
