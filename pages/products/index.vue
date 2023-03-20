<template>
  <div class="">
    <FilterSearch />
    <FilterCategory
      :categories="categories"
      :selectedCategory="selectedCategory"
      @updateSelectedCategory="updateSelectedCategory"
    />
    <div class="w-1/2 mb-4">

      <label>
        Sort:
        <select v-model="sortType" @change="updateSortType">
          <option value="">Any</option>
          <option
            v-for="option in sortOptions"
            :value="option.value"
            :key="option.value"
          >
            {{ option.label }}
          </option>
        </select>
      </label>
    </div>
    <div>
      <Products :products="filteredProducts" />
    </div>
  </div>
</template>

<script setup>
import { dataStore } from "@/stores/store";
import { storeToRefs } from "pinia";

const store = dataStore();
// const sortType = ref(store.sortType);
// const selectedCategory = ref(store.selectedCategory)

const {
  categories,
  selectedCategory,
  filteredProducts,
  sortType,
  sortOptions,
} = storeToRefs(store);
// const { error } = storeToRefs(store);

const {
  fetchProducts,
  fetchCategories,
  updateSelectedCategory,
  fetchProductsByCategory,
} = store;
await fetchCategories();
await fetchProducts();
// await fetchProductsByCategory();

onMounted(() => {
  fetchProducts();
});

function updateSortType() {
  store.setSortType(sortType.value);
}

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
