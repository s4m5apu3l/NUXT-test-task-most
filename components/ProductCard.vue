<template>
  <div class="relative m-3 flex flex-wrap mx-auto justify-center">
    <div class="min-w-[340px]flex flex-col group">
      <div
        class="h-48 md:h-56 lg:h-[24rem] w-full border-2 border-white flex items-center justify-center text-white text-base mb-3 md:mb-5 overflow-hidden relative"
      >
        <img
          :src="product.images[0]"
          alt="product thumb"
          class="object-cover w-full h-full scale-100 group-hover:scale-110 transition-all duration-400"
        />
        <div
          class="absolute z-10 border-4 border-primary w-[95%] h-[95%] invisible group-hover:visible opacity-0 group-hover:opacity-100 group-hover:scale-90 transition-all duration-500"
        ></div>
      </div>
      <a
        href="#"
        class="block text-black text-center hover:text-primary transition-colors duration-150 text-lg md:text-xl mb-1"
      >
        {{ product.title }}
      </a>
      <p
        class="text-custom mb-4 font-light text-sm md:text-sm text-center text-gray-400"
      >
        {{ product.description }}
      </p>
      <p
        class="text-custom mb-4 font-light text-lg md:text-sm text-center text-gray-900 text-bold "
      >
        {{ product.price }} $
      </p>
      <div class="flex justify-center gap-x-3">
        <button @click="addProductToCart(product)" :disabled="isPending">
          <span
            v-show="!isPending"
            class="px-5 py-2 border border-primary text-primary hover:bg-primary transition-all outline-none bg-black border-black text-white hover:text-black hover:bg-white font-bold"
          >
            Add
          </span>
          <span v-show="isPending"> Adding... </span>
        </button>
        <NuxtLink
          :to="`/products/${product.id}`"
          class="px-5 py-2 border border-primary text-primary hover:bg-primary hover:text-white transition-all outline-none bg-white border-black text-black hover:text-white hover:bg-black font-bold"
        >
          View
        </NuxtLink>
      </div>
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

<style lang="scss" scoped>
.text-custom {
  display: inline-block !important;
  overflow: hidden !important;
  text-overflow: ellipsis !important;
  display: -webkit-box !important;
  -webkit-line-clamp: 2 !important;
  -webkit-box-orient: vertical !important;
}
</style>
