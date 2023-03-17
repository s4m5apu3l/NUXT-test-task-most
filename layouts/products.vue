<template>
  <div class="mx-auto shadow bg-slate-200 flex flex-col justify-between">
    <header class="mx-auto container shadow bg-white h-30 ">
      <nav class="flex self-center shadow">
        <NuxtLink to="/products">Nuxt Dojo Merch</NuxtLink>
      </nav>
    </header>

    <!-- output page content -->
    <div class="bg-white container mx-auto">
      <slot />
    </div>

    <footer class="container mx-auto shadow bg-slate-50 border-t-2">
      <ul class="flex gap-5">
        <li><NuxtLink to="/">Home</NuxtLink></li>
        <li><NuxtLink to="/about">About</NuxtLink></li>
        <li><NuxtLink to="/products">Products</NuxtLink></li>
      </ul>
    </footer>
  </div>
</template>

<script setup>
</script>

<style lang="scss" scoped>
.router-link-exact-active {
  color: #12b488;
}
</style>