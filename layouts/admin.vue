<template>
    <div class="flex bg-admin text-gray-200">
        <AdminLeftBar class="w-left" />
        <div class="w-right px-5 flex flex-col relative gap-y-5">
            <div class="flex pt-4 transition duration-700 mb-8" :class="{
                'sticky top-0 px-4 pb-4 bg-hehe z-50 border border-b-gray-200': addClassScroll
            }">
                <form class="flex space-x-2 items-center w-4/6">
                    <button>
                        <IconSearch class="text-gray-500 font-bold" />
                    </button>
                    <input type="text" placeholder="Tìm kiếm..." class="bg-transparent outline-none w-full text-gray-500">
                </form>
                <div class="flex ml-auto space-x-2 items-center justify-end text-gray-500">
                    <IconLanguage class="cursor-pointer" />
                    <IconNight class="cursor-pointer" />
                    <IconBell class="cursor-pointer" />
                    <div class="rounded-full bg-green-500 p-1.5 text-white">
                        <NuxtLink to="/profile">{{ userStore.user.full_name }}</NuxtLink>
                    </div>
                </div>
            </div>
            <slot />
        </div>
    </div>
</template>
<script setup>
import { useUserStore } from '~/store/user';

const userStore = useUserStore();
const addClassScroll = ref(false);

if (process.client) {
    window.addEventListener('scroll', () => {
        if (window.scrollY === 0) {
            addClassScroll.value = false;
        }
        if (window.scrollY > 5) {
            addClassScroll.value = true;
        }
    });
}


</script>
<style>
.w-left {
    width: 13%;
}

.w-right {
    width: 87%;
}

.bg-hehe {
    background-color: white;
}
</style>