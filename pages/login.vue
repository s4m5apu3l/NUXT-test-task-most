<template>
  <div>
    <section class="h-[80vh] flex items-center justify-center">
      <div class="flex flex-col gap-2 items-start">
        <div class="col-span-3 mb-4">
          <label class="label">Username</label>
          <input
            name="Username"
            type="text"
            class="input"
            v-model="state.username"
            :class="{ error: errorMsg }"
          />
        </div>
        <div class="col-span-3 mb-4">
          <label for="password" class="label"> Password </label>
          <input
            v-model="state.password"
            name="password"
            type="text"
            id="password"
            class="input"
            :class="{ error: errorMsg }"
          />
        </div>
        <span v-if="errorMsg" class="font-bold  text-red-600"> {{ errorMsg }}</span>
        <div class="col-span-6">
          <button
            @click.prevent="onSubmit"
            type="submit"
            class="block w-full rounded-md bg-black p-2.5 text-sm text-white transition hover:shadow-lg"
          >
            Login
          </button>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import { authStore } from "~~/stores/authStore";
const userStore = authStore();

const router = useRouter();

const state = ref({
  username: "kminchelle",
  password: "0lelplR",
});

// const {} = storeToRefs(store);
// const { error } = storeToRefs(store);

const { auth } = userStore;

const onSubmit = async () => {
  userStore.clearErrorMsg();
  await auth(state.value.username, state.value.password);
};


// import { useRouter } from "vue-router";

userStore.$subscribe((mutation, piniaState) => {
  if (piniaState.user.status) {
    router.push("/admin");
  }
});

const errorMsg = computed(() => {
  return userStore.getUser.error;
});
</script>

<style lang="scss" scoped>
.router-link-exact-active {
  color: black !important;
}
.error {
  border-color: #e6c9ce !important;
  background: #fcf6f7 !important;
}
.error-msg {
  color: #b53629;
  font-weight: 400;
  font-size: 12px;
  line-height: 16px;
  transform: translate3d(-65px, -2px, 10px);
}
</style>
