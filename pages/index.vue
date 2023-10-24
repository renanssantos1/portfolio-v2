<script lang="ts" setup>
</script>
<template>
  <section class="blogs">
    <div class="hero bg-gray-100 py-10">
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
        <BlogCard v-for="i in 9" :key="i" 
          :title="'How to create your own Heroku alternative on DigitalOcean'"
          :slug="'blog-1'"
          :image="'https://res.cloudinary.com/jahiddev/images/f_auto,q_auto/v1662727437/heroku-alternative-with-dokku-on-digitalocean-2/heroku-alternative-with-dokku-on-digitalocean-2.png?_i=AA'"
          :excerpt="'I was checking my mail on 25th August 2022, and then suddenly, I saw an email announcement from Heroku. I thought it might be some weekly newsletter, then later found ou'"
        />
      </div>
    </div>

    <!-- End blog Grid items -->
  </section>
</template>

