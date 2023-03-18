<template>
  <div>
    <div class="grid grid-cols-4 gap-4">
      <div v-for="product in data.products" :key="product">
        <ProductCard :product="product" />
      </div>
    </div>
  </div>
</template>

<script setup>
definePageMeta({
  layout: "products",
});

const { data } = await useFetch("https://dummyjson.com/products");

useHead({
  title: "Merch page",
  meta: [{ name: "description", content: "Merch page test buy a merch" }],
});
</script>

<style lang="scss" scoped>
.router-link-exact-active {
  color: #12b488;
}
</style>
