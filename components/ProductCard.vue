<template>
  <div>
    <div class="card text-center">
      <NuxtLink :to="`/products/${product.id}`">
        <img :src="product.images[0]" alt="product thumb" class="thumb" />
        <div class="flex self-start gap-2 p-4 justify-start flex-col text-left">
          <p class="font-bold text-gray-500 truncate">{{ product.title }}</p>
          <span class="text-base text-stone-500 whitespace-nowrap">
            {{ product.price }} $
          </span>
        </div>
      </NuxtLink>
      <button
        @click="addProductToCart(product)"
        :disabled="isPending"
        class="group relative inline-block overflow-hidden border border-primary px-4 py-3 focus:outline-none focus:ring"
      >
        <div
          class="relative text-sm font-medium text-primary transition-colors group-hover:text-green-400"
        >
          <span v-show="!isPending">Add to card</span>
          <span v-show="isPending">Adding...</span>
        </div>
      </button>
    </div>
  </div>
</template>

<script setup>
import { cartStore } from "~~/stores/cartStore";

const { product } = defineProps(["product"]);

const store = cartStore();
const isPending = ref(false);

const addProductToCart = async () => {
  isPending.value = true;
  await store.addToCart(product);
  setTimeout(() => {
    isPending.value = false;
  }, 1000);
};
</script>

<style lang="scss" scoped></style>
