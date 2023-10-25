<script lang="ts" setup>
</script>

<template>
  <div class="hero bg-gray-100 py-10">
    <div class="container">
      <div class="flex items-center flex-wrap">
        <div
          class="avatar relative h-[200px] w-[200px] rounded-full overflow-hidden mr-10 mb-5 sm:mb-0 shadow-xl"
        >
          <img
            src="~/assets/images/avatar.png"
            alt="Elon Musk"
            class="absolute w-full h-full object-cover"
          />
        </div>
        <div>
          <h1 class="hero__title">Hello 👋🏻 👋🏻</h1>
          <p class="mt-3 mb-5">
            I'm a software engineer, passionate about the cloud 
            and Frontend world!
          </p>
          <a
            target="_blank"
            href="https://api.whatsapp.com/send?phone=5511966052313&text=Ola%20:)"
            class="bg-blue-600 hover:bg-blue-700 py-2 px-4 rounded text-white inline-flex items-center gap-2 font-bold lowercase"
          >
            Fale Comigo</a
          >
        </div>
      </div>
    </div>
  </div>
</template>