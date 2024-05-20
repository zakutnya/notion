import { defineCollection } from "astro:content";
const postsCollection = defineCollection({
    /* ... */
});
export const collections = {
    posts: postsCollection,
};
