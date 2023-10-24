<script lang="ts" setup>
defineProps<{
  image?: string;
  title: string;
  description?: string;
  slug: string;
  created_at?: string
  id: number
}>();
</script>


<template>
  <div class="col-span-1 shadow-lg">
    <!-- Blog image -->
    <div  v-if="image" class="h-[180px] w-full relative overflow-hidden">
      <img
        class="w-full h-full absolute object-cover"
        :src="image"
        alt="Blog thumb"
      />
    </div>
    <!-- Blog contents -->
    <div class="p-5">
      <h3 class="text-xl font-semibold mb-3">{{ title }}</h3>
      <p v-if="description" class="text-sm mb-3">{{ description }}</p>
      <nuxt-link
        class="border-b-2 border-primary-500 inline-flex items-center"
        :to="`/blog/${slug}`"
        >Leia mais
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke="currentColor"
          class="w-4 h-4 ml-1 group-hover:ml-2 duration-200"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M4.5 12h15m0 0l-6.75-6.75M19.5 12l-6.75 6.75"
          ></path>
        </svg>
      </nuxt-link>
    </div>
  </div>
</template>