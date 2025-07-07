import { defineCollection, defineContentConfig } from '@nuxt/content';

export default defineContentConfig({
  collections: {
    team: defineCollection({
      source: 'team/*.md',
      type: 'page',
    }),
  },
});
