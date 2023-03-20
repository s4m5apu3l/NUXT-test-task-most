<template>
  <Swiper  :free-mode="true" class="mb-10">
    <SwiperSlide
      v-for="category in categories"
      :key="category"
      class="mr-2 w-60 cursor-pointer text-center rounded bg-blue-200"

      @click="$emit('updateSelectedCategory', category)"
    >
      {{ category }}
    </SwiperSlide>
  </Swiper>
</template>

<script setup>
//       :class="{'bg-b bg-black text-white ': selectedCategory == category,}"  when i add this class in console will be warning render
// :slides-per-view='auto' same warning in <Swiper>
const { categories, selectedCategory, updateSelectedCategory } = defineProps(
  ["categories"],
  ["selectedCategory"],
  ["updateSelectedCategory"]
);
</script>

<style lang="scss" scoped></style>
