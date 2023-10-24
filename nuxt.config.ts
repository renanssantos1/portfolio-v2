// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  app: {
    head: {
      charset: "utf-16",
      viewport: "width=device-width,initial-scale=1",
      title: "Renan Santos",
      titleTemplate: "%s - Software Engineer",
      meta: [{ name: "description", content: "Hello, I'm a Software Engineer from Brazil, coding to help companies and people grow." }],
    },
  },
  modules: ["@nuxtjs/tailwindcss"],
  runtimeConfig: {
    public: {
      wpUri: process.env.WP_URI,
    },
  },
  
});
