<template>
  <div class="shadow-sm">
    <header class="l-wrapper w-full px-6">
      <nav class="w-full py-4 flex self-center justify-between flex-row">
        <NuxtLink to="/" class="font-bold block'">
          <img class="max-w-1 w-28" src="../assets/img/log.svg" alt="" />
        </NuxtLink>
        <ul
          class="flex gap-5 self-center font-bold text-lg delay-500 ease-linear"
        >
          <li>
            <NuxtLink to="/cart/">
              <div class="relative block border-transparent">
                <i class="material-icons mr-2">add_shopping_cart</i>
                <p
                  v-if="store.getNumProducts"
                  class="absolute bg-red-700 w-6 h-6 flex justify-center items-center rounded-full text-white text-xs top-[-15px] right-[-9px]"
                >
                  {{ store.getNumProducts }}
                </p>
              </div>
            </NuxtLink>
            <!-- <div class="flex justify-center self-center"></div> -->
          </li>
          <li>
            <NuxtLink to="/products/" class="font-bold block'">
              Products
            </NuxtLink>
          </li>
          <li>
            <NuxtLink to="/about/" class="font-bold block'"> About </NuxtLink>
          </li>
          <li v-if="!isAuth">
            <NuxtLink to="/login" class="btn">Login</NuxtLink>
          </li>
          <li v-if="isAuth">
            <NuxtLink to="/admin"  class="cursor-pointer">Admin page</NuxtLink>
          </li>
          <li v-if="isAuth">
            <NuxtLink @click="logout" class="btn cursor-pointer">Log out</NuxtLink>
          </li>

        </ul>
      </nav>
    </header>
  </div>
</template>

<script setup>
import { cartStore } from "~~/stores/cartStore";
import { authStore } from "~~/stores/authStore";
import { storeToRefs } from "pinia";

const router = useRouter();
const store = cartStore();
const { logUserOut } = authStore();
const { isAuth } = storeToRefs(authStore());
const logout = () => {
  logUserOut();
  // router.push("/");
};
</script>

<style lang="scss" scoped>
.router-link-exact-active.btn {
  color: black;
}
</style>
