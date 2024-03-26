import { useUserStore } from '~/store/user';

export default defineNuxtRouteMiddleware((to, from) => {
    const userStore = useUserStore();

    if (!userStore.user.isAdmin) {
      return navigateTo('/login');
    }
  });