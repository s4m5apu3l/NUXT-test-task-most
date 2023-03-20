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

// export default defineNuxtRouteMiddleware((to) => {
//   const { isAuth } = storeToRefs(authStore()); // make authenticated state reactive
//   const token = useCookie("token"); // get token from cookies

//   if (token.value) {
//     // check if value exists
//     // todo verify if token is valid, before updating the state
//     isAuth.value = true; // update the state to authenticated
//   }

//   // if token exists and url is /login redirect to homepage
//   if (token.value && to?.name === "login") {
//     return navigateTo("/admin");
//   }

//   // if token doesn't exist redirect to log in
//   // if (!token.value && to?.name !== "login") {
//   //   abortNavigation();
//   //   return navigateTo("/login");
//   // }
//   if (!token.value && to?.name !== "admin") {
//     // abortNavigation();
//     return navigateTo("/login");
//   }
// });
