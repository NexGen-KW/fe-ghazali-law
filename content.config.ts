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
        department: z.string(),
        name_ar: z.string().optional(),
        role_ar: z.string().optional(),
        biography_ar: z.string().optional(),
        academic_ar: z.string().optional(),
        experience_ar: z.string().optional(),
        participations_ar: z.string().optional(),
      }),
    }),
    services: defineCollection({
      type: 'page',
      source: 'services/*.md',
      schema: z.object({
        title: z.string(),
        slug: z.string(),
        description: z.string(),
        details: z.array(z.string()),
      }),
    }),
  },
});
