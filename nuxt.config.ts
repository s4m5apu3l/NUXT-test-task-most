// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: [
    "@nuxtjs/tailwindcss",
    "@pinia/nuxt",
    'nuxt-swiper',
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
        {
          rel: "preconnect",
          href: "https://fonts.googleapis.com",
        },
        {
          rel:"preconnect",
          href:"https://fonts.gstatic.com",
        },
        {
          rel:"stylesheet",
          href:"https://fonts.googleapis.com/css2?family=Nunito:wght@400;500;700&display=swap",
        },

      ],
    },
    pageTransition: { name: "page", mode: "out-in" },
    layoutTransition: { name: 'layout', mode: 'out-in' }
  },
});
