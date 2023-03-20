<template>
  <section>
    <h1 class="sr-only">Checkout</h1>
    <div class="grid grid-cols-1 mx-auto max-w-screen-2xl md:grid-cols-2">
      <div class="py-12 bg-gray-50 md:py-24">
        <div class="max-w-lg px-4 mx-auto space-y-8 lg:px-8">
          <div>
            <p class="text-2xl font-medium tracking-tight text-gray-900">
              ${{ storeCart.cartTotal }}
            </p>
            <p class="mt-1 text-sm text-gray-600">For the purchase of</p>
          </div>
          <div>
            <div class="flow-root">
              <!--Checkout products list-->

              <ul
                class="-my-4 divide-y divide-gray-100"
                v-for="product in storeCart.cart"
                :key="product"
              >
                <li class="flex items-center mb-10">
                  <img
                    :src="product.thumbnail"
                    class="object-cover w-16 h-16 rounded"
                    loading="lazy"
                  />
                  <div class="ml-4">
                    <h3 class="text-sm text-gray-900">
                      {{ product.title }} |
                      <span v-if="product.quantity > 0"
                        >{{ product.quantity }} pieces</span
                      >
                    </h3>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div class="py-12 bg-white md:py-24">
        <div class="max-w-lg px-4 mx-auto lg:px-8">
          <PurchaseForm />
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { cartStore } from "~~/stores/cartStore";
const storeCart = cartStore();
</script>

<style lang="scss" scoped></style>
