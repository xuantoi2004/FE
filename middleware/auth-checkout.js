import { useCartStore } from "~/store/cart";

export default defineNuxtRouteMiddleware((to, from) => {
    const cartStore = useCartStore();

    if (cartStore.cart.length<=0) {
      return navigateTo('/');
    }
  });