import { defineStore } from "pinia";

export const dataStore = defineStore("products", {
  state: () => ({
    products: [],
    categories: [],
    sortOption: "name",
    sortOrder: "asc",
    searchTerm: "",
    error: false,
  }),

  getters: {
    // getError() {
    //   return this.error
    // },
    // getProducts() {
    //   return this.products;
    // },
    // filteredProducts: (state) => {
    //   let filteredProducts = [...state.products];
    //   if (state.searchTerm) {
    //     filteredProducts = filteredProducts.filter((product) =>
    //       product.name.toLowerCase().includes(state.searchTerm.toLowerCase())
    //     );
    //   }
    //   if (state.sortOption) {
    //     const sortField = state.sortOption;
    //     const sortOrder = state.sortOrder === "asc" ? 1 : -1;
    //     filteredProducts = filteredProducts.sort((a, b) =>
    //       a[sortField] > b[sortField] ? sortOrder : -sortOrder
    //     );
    //   }
    //   return filteredProducts;
    // },
  },

  actions: {
    async getError() {
      return this.error;
    },
    async fetchProducts() {
      const { data } = await useFetch("https://dummyjson.com/products");
      if (data.value) {
        this.products = data.value.products;
        // console.log(data.value.products);
      } else {
        console.log(error);
        this.error = true
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
        console.log('pusto')
        this.error = true;
      } 
    },
    // async fetchCategories() {
    //   const response = await axios.get(
    //     "https://dummyjson.com/products/categories"
    //   );
    //   this.categories = response.data;
    // },

    // setSortOption(value) {
    //   this.sortOption = value;
    // },

    // setSortOrder(value) {
    //   this.sortOrder = value;
    // },

    // searchProducts(searchTerm) {
    //   this.searchTerm = searchTerm;

    //   if (searchTerm) {
    //     useFetch(`https://dummyjson.com/products/search?q=${searchTerm}`)
    //       .then((response) => {
    //         this.products = response.data;
    //       })
    //       .catch((error) => {
    //         console.error(error);
    //       });
    //   } else {
    //     this.fetchProducts();
    //   }
    // },
  },
  // return: {
  //   fetchProducts(),
  // }
});
