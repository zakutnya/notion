import { defineCollection } from "astro:content";

const pagesCollection = defineCollection({});
const postsCollection = defineCollection({});

export const collections = {
    pages: pagesCollection,
    posts: postsCollection,
};
