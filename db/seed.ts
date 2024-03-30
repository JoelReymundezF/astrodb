import { db, Comment } from 'astro:db';

// https://astro.build/db/seed
export default async function () {
	await db.insert(Comment).values([
		{ author: "1", body: 'Hope you like Astro DB!' },
		{ author: "2", body: 'Enjoy!' }
	] as any [])
}