<template>
  <div class="">
    <Filter />
    <div v-if="!error" class="grid grid-cols-4 gap-4">
      <div v-for="product in products" :key="product">
        <ProductCard :product="product" />
      </div>
    </div>
    <div v-else>
      <div class="flex mx-auto p-11 shadow-sm self-center justify-center">
        <span class="text-4xl flex">NOT FOUND</span>
      </div>
    </div>
  </div>
</template>

<script setup>
import { dataStore } from "@/stores/store";
import { storeToRefs } from "pinia";

const store = dataStore();

const { fetchProducts } = store;
const { products, error } = storeToRefs(store);
await fetchProducts();
// await getError();
// console.log(setInterval(() => {
//
// }), 5000)
setInterval(() => {
  console.log(error.value);
}, 1000);


// store.$subscribe((mutation, piniaState) => {
//   // isLoading.value = piniaState.isLoading;
//   // error.value = piniaState.error;
// });

useHead({
  title: "Merch page",
  meta: [{ name: "description", content: "Merch page test buy a merch" }],
});
definePageMeta({
  layout: "products",
});
</script>

<style lang="scss" scoped>
.router-link-exact-active {
  color: #12b488;
}
</style>
