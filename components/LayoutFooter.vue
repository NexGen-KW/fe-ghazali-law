<template>
  <footer class="text-gold-50 bg-[#181507] py-12">
    <div
      class="container mx-auto flex flex-col gap-12 md:flex-row md:justify-between md:gap-0"
    >
      <!-- Left: Logo, Description, Social -->
      <div class="flex min-w-[260px] flex-1 flex-col items-start gap-6">
        <img src="/logo.svg" alt="RMG Law Logo" class="mb-2 h-24 w-auto" />
        <p class="text-gold-50 mb-6 max-w-xs text-lg">
          Delivering trusted legal solutions<br />
          with global standards and local<br />
          expertise since 1992.
        </p>
        <div class="flex gap-4">
          <a
            href="#"
            aria-label="Facebook"
            class="bg-gold-300 hover:bg-gold-500 text-gold-50 rounded p-3 px-[12px]"
            ><Icon
              icon="fa6-brands:facebook-f"
              size="40"
              class="text-[#181507]"
          /></a>
          <a
            href="#"
            aria-label="LinkedIn"
            class="bg-gold-300 hover:bg-gold-500 text-gold-50 rounded p-3 px-[12px]"
            ><Icon
              icon="fa6-brands:linkedin-in"
              size="40"
              class="text-[#181507]"
          /></a>
          <a
            href="#"
            aria-label="X"
            class="bg-gold-300 hover:bg-gold-500 text-gold-50 rounded p-3 px-[12px]"
            ><Icon icon="fa6-brands:x-twitter" size="40" class="text-[#181507]"
          /></a>
        </div>
      </div>
      <!-- Center: Contact Info -->
      <div
        class="border-gold-900 md:items-left flex min-w-[260px] flex-1 flex-col items-start border-r border-l px-[50px]"
      >
        <h3 class="text-gold-50 mb-4 font-serif text-2xl font-bold">
          Contact Info
        </h3>
        <p class="text-gold-50 mb-2">
          Kuwait Chamber of Commerce & Industry Building, 1st Floor, Kuwait City
        </p>
        <p class="text-gold-50 mb-2">
          <span class="text-gold-50 font-bold">Phone :</span> 1802234
        </p>
        <p class="text-gold-50 mb-2">
          <span class="text-gold-50 font-bold">Email :</span>
          mail@alghazali-law.com
        </p>
        <a
          href="https://www.google.com/maps/dir//9XCJ%2BM92,+Al-Shuhada+St,+Kuwait+City/@29.371612,47.8984984,21491m/data=!3m1!1e3!4m8!4m7!1m0!1m5!1m1!1s0x3fcf84c007b71c29:0x609cc9378c29467c!2m2!1d47.9808998!2d29.3716373?entry=ttu&g_ep=EgoyMDI1MTAxNS4wIKXMDSoASAFQAw%3D%3D"
          target="_blank"
          class="text-gold-50 mt-2 font-bold underline"
          >GET DIRECTIONS</a
        >
      </div>
      <!-- Right: Browse Links -->
      <div
        class="md:items-left flex min-w-[200px] flex-1 flex-col items-start px-[50px]"
      >
        <h3 class="text-gold-50 mb-4 font-serif text-2xl font-bold">
          Browse Links
        </h3>
        <ul class="text-gold-50 space-y-2 text-lg">
          <li>
            <Nuxt-Link
              @click="scrollToTop"
              class="text-gold-50 cursor-pointer hover:underline"
              >Home</Nuxt-Link
            >
          </li>
          <li>
            <Nuxt-Link to="/about" class="text-gold-50 hover:underline"
              >About Us
            </Nuxt-Link>
          </li>
          <li>
            <Nuxt-Link to="/services" class="text-gold-50 hover:underline"
              >Services
            </Nuxt-Link>
          </li>
          <li>
            <Nuxt-Link to="/team" class="text-gold-50 hover:underline"
              >Team
            </Nuxt-Link>
          </li>
          <li></li>
          <li>
            <Nuxt-Link to="/contact" class="text-gold-50 hover:underline"
              >Contact Us
            </Nuxt-Link>
          </li>
        </ul>
      </div>
    </div>
  </footer>
</template>

<script setup lang="ts">
import { Icon } from '@iconify/vue';
</script>

<script lang="ts">
export default {
  methods: {
    scrollToTop() {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    },
  },
};
</script>
