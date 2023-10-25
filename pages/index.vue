<script lang="ts" setup>

import useDevToApi from "~~/composables/useDevToApi"

useHead({
  title: "Home",
  meta: [
    {
      name: "Hello, I'm a Software Engineer from Brazil, coding to help companies and people grow.",
      content: "Home",
    },
  ],
  titleTemplate: "%s - Software Engineer",
});


const { data } = await useDevToApi().getPosts('renanssantos1')


</script>
<template>
  <section class="blogs md:py-10">
    <BlogProfile />


    <div  class="container py-8">
      <h2 class="text-xl text-gray-700 mb-7">Um pouco sobre mim...</h2>
      <p class="my-2 text-gray-600 text-sm">
        Olá! Sou um engenheiro de software apaixonado por transformar ideias em soluções digitais. Minha jornada é guiada 
        pelas tecnologias que moldam o mundo digital, e meu objetivo é criar experiências incríveis.
      </p>
      <p class="my-2 text-gray-600 text-sm">
        Minha caixa de ferramentas inclui Node.js, PHP, Java, JavaScript, React Native, Angular e Docker. Adoro ambientes de testes e arquiteturas complexas <span class="font-bold">(oque estranho é interessante)</span>, do back-end ao front-end. 
        Gosto de mergulhar no shell para automatizar tarefas e melhorar a eficiência.
      </p>
      <p class="my-2 text-gray-600 text-sm">
        Além disso, estou me aprofundando no mundo <span class="font-bold">DevOps</span>, explorando Docker, Kubernetes, Terraform e AWS. Estou comprometido em trazer uma abordagem de infraestrutura como código para meu trabalho, 
        tornando nossas operações mais eficientes e escaláveis.
      </p>
      <p class="my-2 text-gray-600 text-sm">
        Em um futuro próximo, planejo obter minha primeira certificação AWS para aprimorar ainda mais minha expertise na nuvem.
      </p>
      <p class="my-2 text-gray-600 text-sm">Vamos criar algo incrível juntos!</p>
    </div>

    <div class="container py-10">
      <div class="grid md:grid-cols-3 gap-5 lg:gap-10" >
        <div class="md:col-span-1 border p-5 rounded-3xl transition-all duration-300 bg-gray-100 dark:border-white/10 dark:bg-white/5" >
          <div class="rounded-xl inline-flex p-2 mb-4 bg-black/10 dark:bg-white/10" >
            <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" aria-hidden="true" role="img" class="hover:text-primary-600 icon" style="" width="40px" height="40px" viewBox="0 0 21 21" ><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M7.5 3.5h6a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2h-6a2 2 0 0 1-2-2v-10a2 2 0 0 1 2-2zm1 12h4"></path></svg>
          </div>
          <h3 class="font-bold">aplicativo web</h3>
          <p class="mt-2" >Aplicativos web personalizados para atender às suas necessidades comerciais exclusivas.</p>
        </div>

        <div class="md:col-span-1 border p-5 rounded-3xl transition-all duration-300 bg-gray-100 dark:border-white/10 dark:bg-white/5" >
          <div class="rounded-xl inline-flex p-2 mb-4 bg-black/10 dark:bg-white/10" >
            <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" aria-hidden="true" role="img" class="hover:text-primary-600 icon" data-v-44312f6c="" style="" width="40px" height="40px" viewBox="0 0 21 21" ><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="m12.5 3.5l-4 14m-2-5l-4-4l4-4m8 12l4-4l-4-4"></path></svg> 
          </div>
          <h3 class="font-bold">aplicativo moveis</h3>
          <p class="mt-2" >Aplicativos móveis bonitos e funcionais para plataformas iOS e Android.</p>
        </div>

        <div class="md:col-span-1 border p-5 rounded-3xl transition-all duration-300 bg-gray-100 dark:border-white/10 dark:bg-white/5" >
          <div class="rounded-xl inline-flex p-2 mb-4 bg-black/10 dark:bg-white/10" >
            <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" aria-hidden="true" role="img" class="hover:text-primary-600 icon" data-v-44312f6c="" style="" width="40px" height="40px" viewBox="0 0 21 21" ><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M8.5 18.5h4M10.5 5a4.5 4.5 0 0 1 2.001 8.532l-.001.968a2 2 0 1 1-4 0v-.968A4.5 4.5 0 0 1 10.5 5z"></path></svg>
          </div>
          <h3 class="font-bold">estudante cloud</h3>
          <p class="mt-2" >Indo para o próximo nível 🚀, com Docker, Kubernets, Terraform e AWS.</p>
        </div>
      </div>
    </div>

    <!-- Blog Grid Items -->
    <div class="container py-10">
      <div class="section-heading heading-spacing flex items-center md:justify-between md:items-end flex-col md:flex-row gap-5 mb-5">
       <h2 class="md:w-1/2 text-center md:text-left">Gosto de escrever um pouco<br><span class="lg:text-primary-500 text-base font-normal">Oque eu aprendo eu compartilho!</span></h2>
        <div>
            <a href="/blog" class="btn btn-default inline-flex items-center group"><span>Ver tudo</span>👉</a>
        </div>
     </div>


      <div class="grid sm:grid-cols-3 gap-5">
        <BlogCard v-for="item in data.slice(0, 6)" :key="item.id" 
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

