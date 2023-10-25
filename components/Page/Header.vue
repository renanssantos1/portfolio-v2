<script lang="ts" setup>

</script>
<template>
  <section class="hero">
    <div class="container">
      <h1 v-if="title" class="text-4xl font-bold">{{ title }}</h1>
      <slot />
    </div>
  </section>
</template>

<style>

</style>
