<template>
  <div class="card">
    <NuxtLink to="/products/">
      <div class="flex self-center gap-1">
        <i class="material-icons">arrow_back</i>
        <span>Go back</span>
      </div>
    </NuxtLink>

    <div class="grid grid-cols-2">
      <div class="p-7">
        <Swiper
          :modules="[SwiperEffectCreative, SwiperNavigation]"
          :navigation="true"
          :loop="true"
          :effect="'creative'"
          :creative-effect="{
            prev: {
              shadow: false,
              translate: ['-20%', 0, -1],
            },
            next: {
              translate: ['100%', 0, 0],
            },
          }"
        >
          <SwiperSlide :height="280" v-for="img in product.images" :key="img">
            <img
              :src="img"
              alt="product img"
              class="mx-auto my-7 max-h-full h-72 rounded-lg"
            />
          </SwiperSlide>
        </Swiper>
      </div>
      <div class="p-7">
        <h2 class="text-4xl my-7">{{ product.title }}</h2>
        <p class="text-xl my-7">Price: $ {{ product.price }}</p>
        <h3 class="font-bold border-b-2 mb-4 pb-2">Product description</h3>
        <p class="mb-7">{{ product.description }}</p>
        <button class="btn flex">
          <i class="material-icons mr-2">add_shopping_cart</i>
          <span>Add to cart</span>
        </button>
      </div>
    </div>
  </div>
</template>

<script setup>
const { product } = defineProps(["product"]);
</script>

<style lang="scss" scoped>
img {
  // max-width: 40%;
}
.router-link-exact-active {
  color: #12b488;
}
</style>
