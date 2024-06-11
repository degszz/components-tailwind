import { defineCollection, z } from "astro:content";

const comps = defineCollection({
    type: "content",
    schema: z.object({
        image:z.string(),
        title:z.string(),
        text:z.string(), 
        code:z.string(),
    })
})

export const collections = {comps}