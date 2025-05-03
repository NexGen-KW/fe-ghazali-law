<template>
  <section class="bg-gold-50/40 border-gold-200 border-y">
    <div class="container py-5">
      <ul class="inline-flex">
        <template v-for="(item, index) in breadcrumb" :key="index">
          <li>
            <NuxtLink
              :to="item.url"
              class="font-medium capitalize"
              :class="{
                'text-gold-500': !(index < breadcrumb.length - 1),
                'text-gold-300 hover:text-gold-400':
                  index < breadcrumb.length - 1,
              }"
            >
              {{ item.label }}
            </NuxtLink>

            <span v-if="index < breadcrumb.length - 1" class="text-gold-300"
              >&nbsp;/&nbsp;</span
            >
          </li>
        </template>
      </ul>
    </div>
  </section>
</template>

<script lang="ts" setup>
interface Props {
  breadcrumb: IBreadcrumb;
}

defineProps<Props>();
</script>
