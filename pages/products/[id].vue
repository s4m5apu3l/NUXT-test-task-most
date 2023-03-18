<template>
  <div>
    <Head>
      <Title>{{ product.title }}</Title>
      <Meta name="description" :content="product.description"></Meta>
    </Head>
    <ProductDetail :product="product" />
  </div>
</template>

<script setup>
const { id } = useRoute().params;
const uri = "https://dummyjson.com/products/" + id;

// fetch product
const { data: product } = await useFetch(uri, { key: id });

if (!product.value) {
  throw createError({
    statusCode: 404,
    message: "Product not found",
    fatal: true,
  });
}

definePageMeta({
  layout: "products",
});
</script>

<style lang="scss" scoped>
.router-link-exact-active {
  color: #12b488;
}
</style>
