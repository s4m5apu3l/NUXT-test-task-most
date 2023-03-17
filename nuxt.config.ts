// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: [
    "@nuxtjs/tailwindcss",
    "@pinia/nuxt"
  ],
  app: {
    head: {
      title: "Онлайн магазин",
      meta: [{ name: "description", content: "test task from appmost" }],
      link: [
        {
          rel: "stylesheet",
          href: "https://fonts.googleapis.com/css2?family=Material+Icons",
        },
      ],
    },
    pageTransition: { name: "page", mode: "out-in" },
  },
});
