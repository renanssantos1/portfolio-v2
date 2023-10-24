<script lang="ts" setup>

const route = useRoute()
const { slug } = route.params;
 
const { data } = await useFetch(`https://dev.to/api/articles/j471n/${slug}`)


// definePageMeta({
//   validate: async (route) => {
//     // Check if the id is made up of digits
//     return /^\d+$/.test(route.params.id)
//   }
// })

</script>
<template>
  <section class="container blog py-10 sm:py-16">
    Hello slug blog page
    <div v-html="data.body_html" > </div>
    
  </section>
</template>