<script lang="ts" setup>

interface BlogItem {
  id: number
  description: string 
  url: string 
  tag_list: string[]
}

const { data } = await useFetch<BlogItem[]>('https://dev.to/api/articles?username=j471n')
  
</script>
<template>
  <section class="py-10" >
    <BlogProfile />

    <div class="container blog py-10 sm:py-16">
         <div class="grid sm:grid-cols-3 gap-5">
        <BlogCard v-for="item in data" :key="item.id" 
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