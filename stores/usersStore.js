import { defineStore } from "pinia";

export const usersStore = defineStore("users", {
  state: () => ({
    users: [],
  }),
  getters: {},
  actions: {
    async fetchUsers() {
      const { data, error } = await useFetch("https://dummyjson.com/users?limit=5");
      if (data.value) {
        this.users = data.value.users;
      } else {
        console.log("error fetch users", error);
      }
    },
    async addUserFetch(user) {
      // const index = this.users.findIndex((u) => u.id === id);
      const body = JSON.stringify(user)
      const { data, error } = await useFetch(
        "https://dummyjson.com/users/add",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: body,
        }
      );
      if (data.value) {
        this.users.push(data.value);
        // this.users.splice(index, 1, data.value);
        console.log(this.users)
      } else {
        console.log(error);
      }
    },
    async updateUserFetch(id, user) {
      const index = this.users.findIndex((u) => u.id === id);
      const { data, error } = await useFetch(
        `https://dummyjson.com/users/${id}`,
        {
          method: "PUT",
          headers: { "Content-Type": "application/json" },
          body: user,
        }
      );
      if (data.value) {
        // this.users.push(data.value);
        this.users.splice(index, 1, data.value);
      } else {
        console.log(error);
      }
    },
    async deleteUser(id) {
      const index = this.users.findIndex((u) => u.id === id);
      const { data, refresh } = await useFetch(
        `https://dummyjson.com/users/${id}`,
        {
          method: "DELETE",
        }
      );
      if (data.value) {
        console.dir(data.value);
        this.users.splice(index, 1);
      } else {
        console.log(error);
      }
    },
  },
});
