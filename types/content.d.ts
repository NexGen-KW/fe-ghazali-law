declare module '#content' {
  import { QueryBuilder } from '@nuxt/content/dist/runtime/types';

  const queryContent: QueryBuilder;
  export { queryContent };
}

export interface TeamMember {
  title: string;
  description: string;
  // Add other expected fields
}
