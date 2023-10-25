<script lang="ts" setup>
import useDevToApi from "~~/composables/useDevToApi";

useHead({
  title: "Portfolio",
  meta: [
    {
      name: "Hello, I'm a Software Engineer from Brazil, coding to help companies and people grow.",
      content: "Portfolio",
    },
  ],
  titleTemplate: "%s - Software Engineer",
});

const { data } = await useDevToApi().getPosts("j471n");
</script>
<template>
    <section class="blogs md:py-10">
        <div class="container py-10"> </div>
    </section>
</template>