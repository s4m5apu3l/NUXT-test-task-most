<template>
  <div class="shadow-sm">
    <header class=" l-wrapper w-full px-6">
      <nav class="w-full py-4 flex self-center justify-between flex-row">
        <NuxtLink to="/" class="font-bold block'">
          <img class="max-w-1 w-28" src="../assets/img/log.svg" alt="" />
        </NuxtLink>
        <ul
          class="flex gap-5 self-center font-bold text-lg delay-500 ease-linear"
        >
          <li>
            <div class="flex justify-center self-center">
              <i class="material-icons mr-2">add_shopping_cart</i>
            </div>
          </li>
          <li>
            <NuxtLink to="/products/" class="font-bold block'">
              Products
            </NuxtLink>
          </li>
          <li>
            <NuxtLink to="/about/" class="font-bold block'"> About </NuxtLink>
          </li>
          <!-- <li><NuxtLink to="/login/" class="btn">Login</NuxtLink></li> -->
        </ul>
      </nav>
    </header>
  </div>
</template>

<script setup></script>

<style lang="scss" scoped>
.router-link-exact-active {
  color: #12b488;
}
</style>
