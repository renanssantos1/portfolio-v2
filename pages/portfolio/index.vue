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
    <BlogProfile />

    <div class="container py-10">
      <div class="flex min-h-screen justify-center">
        <div >
          <h2 class="text-xl text-gray-700 mb-7">Empresas e projetos que ja participei</h2>
          <ul>
            <li class="relative flex items-baseline gap-6 pb-5">
              <div class="before:absolute before:left-[5.5px] before:h-full before:w-[1px] before:bg-gray-400">
                <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" class="bi bi-circle-fill fill-green-600" viewBox="0 0 16 16">
                  <circle cx="8" cy="8" r="8" />
                </svg>
              </div>
              <div>
                <h3 class="text-1xl font-bold">Squadra Digital</h3>
                <h4 class="mb-2">Analista de Sistemas Pleno 3</h4>
                <p class="text-sm text-gray-600">2020 até 2023</p>
                <div class="my-2 text-gray-600 text-sm">
                  <p>
                    Graças à aplicação de minha expertise e colaboração com a equipe, conseguimos aprimorar significativamente a 
                    digitalização de portais e aplicativos para o setor de odontologia. <br>
                    Essa melhoria resultou em um aumento notável na eficiência operacional e na <span class="font-bold">experiência do usuário</span>, 
                    com um ganho de até <span class="font-bold">40%</span> na otimização de processos, na acessibilidade dos serviços e na qualidade dos dados,
                    impactando positivamente a indústria odontológica.
                  </p>
                </div>
                <div class="pt-1 flex gap-1 flex-wrap">
                  <span class="bg-blue-100 text-blue-800 text-xs font-medium mr-2 px-2.5 py-0.5 rounded dark:bg-blue-900 dark:text-blue-300">PHP</span>
                  <span class="bg-gray-100 text-gray-800 text-sm font-medium mr-2 px-2.5 py-0.5 rounded dark:bg-gray-900 dark:text-gray-300">Java</span>
                  <span class="bg-green-100 text-green-800 text-sm font-medium mr-2 px-2.5 py-0.5 rounded dark:bg-green-900 dark:text-green-300">Node</span>
                  <span class="bg-blue-100 text-blue-800 text-sm font-medium mr-2 px-2.5 py-0.5 rounded dark:bg-blue-900 dark:text-blue-300">Docker</span>
                  <span class="bg-pink-100 text-pink-800 text-sm font-medium mr-2 px-2.5 py-0.5 rounded dark:bg-pink-900 dark:text-pink-300">Git</span>
                  <span class="bg-yellow-100 text-yellow-800 text-sm font-medium mr-2 px-2.5 py-0.5 rounded dark:bg-yellow-900 dark:text-yellow-300">Scrum</span>
                </div>
              </div>
            </li>

            <li class="relative flex items-baseline gap-6 pb-5">
              <div class="before:absolute before:left-[5.5px] before:h-full before:w-[1px] before:bg-gray-400">
                <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" class="bi bi-circle-fill fill-gray-400" viewBox="0 0 16 16">
                  <circle cx="8" cy="8" r="8" />
                </svg>
              </div>
              <div>
                <h3 class="text-1xl font-bold">Just Digital</h3>
                <h4 class="mb-2">Analista de Sistemas Junior 2</h4>
                <p class="text-sm text-gray-600">2020 até 2023</p>
                <div class="my-2 text-gray-600 text-sm">
                  <p>
                    Durante a pandemia de COVID-19, minha experiência na empresa de tecnologia foi marcada pela resposta ágil às demandas críticas 
                    daquele momento desafiador. Fui designado á projetos que envolviam o <span class="font-bold">desenvolvimento de aplicativos móveis</span> 
                    usando tecnologias como Angular, Ionic e Java, e esses aplicativos desempenharam um papel vital na mitigação dos impactos da pandemia.
                  </p>
                  <p class="my-2">
                    Meu trabalho e o da equipe na empresa de tecnologia não apenas atenderam às demandas urgentes, mas também 
                    destacaram a capacidade da tecnologia móvel de ser uma força transformadora e essencial em momentos de crise.
                  </p>
                </div>
                <div class="pt-1 flex gap-1 flex-wrap">
                  <span class="bg-purple-100 text-purple-800 text-sm font-medium mr-2 px-2.5 py-0.5 rounded dark:bg-purple-900 dark:text-purple-300">Ionic</span>
                  <span class="bg-blue-100 text-blue-800 text-xs font-medium mr-2 px-2.5 py-0.5 rounded dark:bg-blue-900 dark:text-blue-300">Angular</span>
                  <span class="bg-gray-100 text-gray-800 text-sm font-medium mr-2 px-2.5 py-0.5 rounded dark:bg-gray-900 dark:text-gray-300">Java</span>
                  <span class="bg-green-100 text-green-800 text-sm font-medium mr-2 px-2.5 py-0.5 rounded dark:bg-green-900 dark:text-green-300">Node</span>
                  <span class="bg-pink-100 text-pink-800 text-sm font-medium mr-2 px-2.5 py-0.5 rounded dark:bg-pink-900 dark:text-pink-300">Git</span>
                  <span class="bg-yellow-100 text-yellow-800 text-sm font-medium mr-2 px-2.5 py-0.5 rounded dark:bg-yellow-900 dark:text-yellow-300">Scrum</span>
                </div>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </section>
</template>