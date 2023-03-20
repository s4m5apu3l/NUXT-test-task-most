<template>
  <div v-if="!error" class="grid grid-cols-4 gap-4">
    <div  v-for="product in products" :key="product">
      <ProductCard :product="product" />
    </div>

  </div>
  <div v-else>
    <div class="flex mx-auto p-11 shadow-sm self-center justify-center">
      <span class="text-4xl flex">NOT FOUND</span>
    </div>
  </div>

</template>

<script setup>
import { dataStore } from "@/stores/store";
import { storeToRefs } from "pinia";

const store = dataStore();
const { products } = defineProps(["products"]);

const { fetchProducts } = store;
const { error, pending } = storeToRefs(store);
// await fetchProducts();  

// onMounted(() => {
//   fetchProducts();
// });

</script>

<style lang="scss" scoped></style>
