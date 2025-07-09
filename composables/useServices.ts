import { computed, queryCollection, useAsyncData, useI18n } from '#imports';

export const useServices = () => {
  const { locale } = useI18n();

  // Fetch services based on current locale
  const { data: servicesEn } = useAsyncData('services', () =>
    (queryCollection as any)('services').all(),
  );

  const { data: servicesAr } = useAsyncData('servicesAr', () =>
    (queryCollection as any)('servicesAr').all(),
  );

  // Computed property that returns the appropriate services based on locale
  const services = computed(() => {
    return locale.value === 'ar'
      ? servicesAr.value || []
      : servicesEn.value || [];
  });

  // Get service by slug (now simple and synchronous)
  const getServiceBySlug = (slug: string) => {
    return services.value.find((s: any) => s.slug === slug);
  };

  // Get all service slugs
  const getServiceSlugs = computed(() => {
    return services.value.map((service) => service.slug);
  });

  return {
    services,
    getServiceBySlug,
    getServiceSlugs,
    locale,
  };
};
