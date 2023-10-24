<script lang="ts" setup>

interface BlogItem {
  id: number
  description: string 
  url: string 
  tag_list?: string[]
  cover_image?: string
}

const { data } = await useFetch<BlogItem[]>('https://dev.to/api/articles?username=j471n')


</script>
<template>
  <section class="blogs py-10">
    <div class="hero bg-gray-100 py-10 ">
      <div class="container">
        <div class="flex items-center flex-wrap">
          <div
            class="avatar relative h-[200px] w-[200px] rounded overflow-hidden mr-10 mb-5 sm:mb-0 shadow-xl"
          >
            <img
              src="/_nuxt/elon.c4da2aad.png"
              alt="Elon Musk"
              class="absolute w-full h-full object-cover"
            />
          </div>
          <div>
            <h1 class="hero__title">Hi, I am Elon</h1>
            <p class="mt-3 mb-5">
              I built SpaceX, acquired Tesla, Twitter. <br />In my free time i
              sh*t post on twitter.
            </p>
            <a
              href="https://twitter.com/jahiddev"
              class="bg-primary-500 hover:bg-primary-600 py-2 px-4 rounded text-white inline-flex items-center gap-2"
              >
              Let's Connect</a
            >
          </div>
        </div>
      </div>
    </div>

    <!-- Blog Grid Items -->
    <div class="container py-10">
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

    <!-- End blog Grid items -->
  </section>
</template>

