export default defineNuxtConfig({
  app: {
    head: {
      charset: "utf-16",
      viewport: "width=device-width,initial-scale=1",
      title: "Renan Santos",
      titleTemplate: "%s - Software Engineer 🧑‍💻",
      meta: [{ name: "description", content: "Renan's awesome blog" }],
    },
  },
  modules: ["@nuxtjs/tailwindcss"],
  runtimeConfig: {
    public: {
      wpUri: '',
    },
  },
});