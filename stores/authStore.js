import { defineStore } from "pinia";

export const authStore = defineStore("auth", {
  state: () => ({
    error: null,
    user: {
      token: null,
      image: "",
      id: "",
      username: "",
      email: "",
      firstName: "",
      lastName: "",
      status: false,
    },
    isAuth: false,
  }),
  getters: {
    getUser() {
      return this.user;
    },
  },
  actions: {
    async auth(username, password) {
      // this.isLoading = true;
      const { data } = await useFetch("https://dummyjson.com/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: {
          username,
          password,
        },
      });
      if (data.value) {
        const token = useCookie("token");
        token.value = data?.value?.token;
        this.user.status = true;
        this.user.username = data.value.username;
        this.isAuth = true;
      } else {
        console.log("error auth");
        this.error = true;
      }
    },
    logUserOut() {
      const token = useCookie("token");
      this.isAuth = false;
      token.value = null;
    },
  },
});
