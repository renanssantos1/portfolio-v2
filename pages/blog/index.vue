<script lang="ts" setup>
import useDevToApi from "~~/composables/useDevToApi";

useHead({
  title: "Blog",
  meta: [
    {
      name: "Sinta-se avontade para ler um pouco do qe escrevo.",
      content: "Blog",
    },
  ],
  titleTemplate: "%s - Software Engineer",
});

const { data } = await useDevToApi().getPosts("renanssantos1");
</script>
<template>
  <section class="md:py-10">
    <BlogProfile />

    <div class="container blog py-10 sm:py-16">
      <div class="grid sm:grid-cols-3 gap-5">
        <BlogCard
          v-for="item in data"
          :key="item.id"
          :title="item.title"
          :url="item.url"
          :id="item.id"
          :image="item.cover_image"
          :description="item.description"
        />
      </div>
    </div>
  </section>
</template>