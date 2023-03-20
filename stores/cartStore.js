import { defineStore } from "pinia";
// import { useLocalStorage } from "@vueuse/core";

export const cartStore = defineStore("cart", {
  state: () => ({
    cart: [],
  }),
  getters: {
    getNumProducts() {
      return this.cart.reduce((total, item) => {
        return total + item.quantity;
      }, 0);
    },
    cartTotal() {
      return this.cart.reduce((total, item) => {
        return total + item.price * item.quantity;
      }, 0);
    },
  },
  actions: {
    async getCart() {
      console.log(this.cart);
      // localStorage.setItem(
      //   "TEST",
      //   JSON.stringify(this.cart)
      // );
    },
    async deleteFromCart(product) {
      this.cart = this.cart.filter((p) => {
        return p.id != product.id;
      });
    },
    async addToCart(product) {
      const exist = this.cart.find((p) => p.id === product.id);

      if (exist) {
        this.incQuantity(product);
        localStorage.setItem("TEST", JSON.stringify(this.incQuantity(product)));
      }
      if (!exist) {
        this.cart.push({ ...product, quantity: 1 });
      }
    },
    async incQuantity(product) {
      this.card = this.cart.map((p) => {
        if (p.id === product.id) {
          p.quantity++;
        }
        return p;
      });
    },
    async decQuantity(product) {
      this.card = this.cart.map((p) => {
        if (p.id === product.id && p.quantity > 1) {
          p.quantity--;
        }
        return p;
      });
    },
  },
});
