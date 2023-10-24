<script lang="ts" setup>

interface BlogItem {
  id: number
  description: string 
  slug: string 
  tag_list: string[]
}

const { data } = await useFetch<BlogItem[]>('https://dev.to/api/articles?username=nataliedeweerd')

console.log(data)

  
</script>
<template>
  <section class="container blog py-10 sm:py-16">
    <div class="grid sm:grid-cols-3 gap-5">
        <BlogCard v-for="item in data" :key="item.id" 
          :title="item.title"
          :slug="item.slug"
          :id="item.id"
          :image="'https://res.cloudinary.com/jahiddev/images/f_auto,q_auto/v1662727437/heroku-alternative-with-dokku-on-digitalocean-2/heroku-alternative-with-dokku-on-digitalocean-2.png?_i=AA'"
          :description="item.description"
        />
      </div>
  </section>
</template>