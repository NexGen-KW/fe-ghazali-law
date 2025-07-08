import { defineCollection, defineContentConfig, z } from '@nuxt/content';

export default defineContentConfig({
  collections: {
    team: defineCollection({
      type: 'page',
      source: 'team/*.md',
      schema: z.object({
        name: z.string(),
        image: z.string(),
        role: z.string(),
        biography: z.string(),
        academic: z.array(z.string()),
        experience: z.array(z.string()),
        participations: z.array(z.string()),
      }),
    }),
  },
});
