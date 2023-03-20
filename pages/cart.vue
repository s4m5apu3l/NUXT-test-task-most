<template>
  <div class="max-w-screen-lg max-auto p-7">
    <div class="text-left">
      <h1 class="text-4xl font-bold text-gray-800">Cart</h1>
    </div>

    <section class="pt-10">
      <div class="mt-4">
        <div v-if="storeCart.cart.length > 0">
          <ul
            class="space-y-4"
            v-for="product in storeCart.cart"
            :key="product"
          >
            <li class="flex items-center bg-gray-100 p-5 rounded-md">
              <img
                :src="product.images[0]"
                alt=""
                class="rounded object-cover w-20 h-20"
              />
              <div class="flex gap-2 items-center">
                <a
                  @click="storeCart.decQuantity(product)"
                  href="javascript:void(0)"
                  class="w-10 h-10 leading-10 text-center text-gray-600 transition hover:opacity-75"
                >
                  &minus;
                </a>
                {{ product.quantity }}
                <a
                  @click="storeCart.incQuantity(product)"
                  href="javascript:void(0)"
                  class="w-10 h-10 leading-10 text-center text-gray-600 transition hover:opacity-75"
                >
                  &plus;
                </a>
              </div>
              <div class="ml-4">
                <h3 class="text-sm text-gray-900">{{ product.title }}</h3>
              </div>
              <div class="ml-4">
                <h3 class="text-sm text-gray-900">{{ product.price }} $</h3>
              </div>
              <div class="flex items-center justify-end flex-1 gap-2">
                <button
                  class="text-gray-600 transition hover:text-red-600"
                  @click="storeCart.deleteFromCart(product)"
                >
                  <span class="material-symbols-outlined"> delete </span>
                </button>
              </div>
            </li>
          </ul>
        </div>
        <div v-else>Cart is empty</div>
        <div
          class="flex justify-end pt-8 mt-8 border-t border-gray-100"
          v-if="storeCart.cart.length > 0"
        >
          <div class="w-screen max-w-full space-y-4">
            <dl class="space-y-0.5 text-sm text-gray-700">
              <div class="flex justify-end gap-4 !text-base font-medium">
                <dt>Total:</dt>
                <dd>${{ storeCart.cartTotal }}</dd>
              </div>
            </dl>
            <div class="flex justify-end">
              <NuxtLink to="/purchase">
                <a
                  class="block px-5 py-3 text-sm text-gray-100 transition bg-gray-700 rounded hover:bg-gray-600"
                >
                  Purchase
                </a>
              </NuxtLink>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import { cartStore } from "~~/stores/cartStore";
const storeCart = cartStore();

definePageMeta({
  pageTransition: {
    name: "slide-right",
  },
  // layout: "products",
});
</script>

<style lang="scss" scoped></style>
