<template>
  <Swiper :slides-per-view="4" :free-mode="true" class="mb-10">
    <SwiperSlide
      v-for="category in categories"
      :key="category"
      class=" mr-2 border-2 border-blue-600 rounded-lg px-3 py-2 text-blue-400 cursor-pointer hover:bg-blue-600 hover:text-blue-200"
      
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
