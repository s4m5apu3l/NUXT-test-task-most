import { storeToRefs } from "pinia";
import { authStore } from "~~/stores/authStore";

export default function ({ redirect }) {
  const token = useCookie("token");
  const { isAuth } = storeToRefs(authStore());
  if (token.value) {
    isAuth.value = true;
  }

  if (!isAuth.value) {
    return navigateTo("/login");
  }
}
