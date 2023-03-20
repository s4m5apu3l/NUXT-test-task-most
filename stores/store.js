import { defineStore } from "pinia";

export const dataStore = defineStore("products", {
  state: () => ({
    products: [],
    categories: [],
    selectedCategory: "",
    sortOptions: [
      { value: "Price", label: "Price" },
      { value: "A-Z", label: "A-Z" },
      { value: "Z-A", label: "Z-A" },
    ],
    sortType: "",
    searchTerm: "",
    error: false,
    cart: [],
    isLoading: false,
    pending: false,
  }),

  getters: {
    getNumProducts() {
      return this.products.length;
    },
    filteredProducts() {
      let products = [...this.products];
      if (this.selectedCategory !== "") {
        products = products.filter(
          (product) => product.category === this.selectedCategory
        );
      } else if (this.searchTerm !== "") {
        products = products.filter((product) =>
          product.name.toLowerCase().includes(this.searchTerm.toLowerCase())
        );
      }
      if (this.sortType === "Price") {
        products = products.sort((a, b) => a.price - b.price);
      } else if (this.sortType === "A-Z") {
        products = products.sort((a, b) => {
          return a.title.localeCompare(b.title);
        });
      } else if (this.sortType === "Z-A") {
        products = products.sort((a, b) =>
          b.title.toLowerCase().localeCompare(a.title.toLowerCase())
        );
      }
      return products;
    },
    // sortByPrice() {
    //   console.log('done sort get')
    //   return this.products.sort((a, b) => a.price - b.price)
    //   // this.products.value.sort((a, b) => {
    //   //   return a.price - b.price;
    //   // });
    // }
  },

  actions: {
    setSortType(sortType) {
      this.sortType = sortType;
    },
    async getError() {
      return this.error;
    },
    async fetchProducts() {
      // this.isLoading = true;
      const { data, pending, error } = await useFetch(
        "https://dummyjson.com/products"
      );
      if (data.value) {
        this.products = data.value.products;
        // console.log(data.value.products);
      } else {
        console.log(error);
        this.error = true;
        // this.isLoading = true;
      }
    },

    async searchProducts(searchTerm) {
      const { data } = await useFetch(
        `https://dummyjson.com/products/search?q=${searchTerm}`
      );
      if (data.value) {
        this.products = data.value.products;
        this.searchTerm = searchTerm;
        this.error = false;
      }
      if (data.value.total == 0) {
        console.log("pusto");
        this.error = true;
      }
    },
    async fetchCategories() {
      const { data } = await useFetch(
        "https://dummyjson.com/products/categories"
      );
      if (data.value) {
        // this.products = data.value.products;
        this.categories = data.value || [];
        // console.log("fetch categories", data.value);
      } else {
        console.log("error fetch category");
        this.error = true;
      }
    },
    async fetchProductsByCategory(category) {
      const { data } = await useFetch(
        `https://dummyjson.com/products/category/${category}`
      );
      if (data.value) {
        console.dir(data.value.products);
        this.products = data.value.products;
      }
    },
    updateSelectedCategory(category) {
      this.selectedCategory = category;
      if (category === "") {
        this.fetchProducts();
      } else {
        this.fetchProductsByCategory(category);
      }
    },
  },
});
