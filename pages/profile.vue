<template>
    <div class="flex mt-2">
        <div class="w-3/12 flex flex-col mr-3">
            <div class="font-bold text-xl text-red-700 p-4 border-b-2 bg-white shadow-md uppercase">
                Quản lý TÀI KHOẢN
            </div>
            <div class="p-4 bg-white shadow-md">
                <div class="border-b py-3 text-sm cursor-pointer" @click="showDashboardTab" :class="{'text-orange-700': isDashboardTab}">
                    Bảng điều khiển tài khoản
                </div>
                <div class="border-b py-3 text-sm cursor-pointer" @click="showProfileTab" :class="{'text-orange-700': isProfileTab}">
                    Thông tin tài khoản
                </div>
                <div class="border-b py-3 text-sm cursor-pointer">Đơn hàng của tôi</div>
                <div class="border-b py-3 text-sm cursor-pointer">Voucher của tôi</div>
                <div class="border-b py-3 text-sm cursor-pointer">Thông báo</div>
                <div class="border-b py-3 text-sm cursor-pointer" @click="logout">Đăng xuất</div>
            </div>
        </div>
        <div class="w-9/12 flex flex-col">
            <ProfileDashboard v-if="isDashboardTab" :class="{ hidden: !isDashboardTab }" v-bind:user="user.result" @update-user="showProfileTab" />
            <ProfileUser v-if="isProfileTab" v-bind:user="user.result" :class="{ hidden: !isProfileTab }" />
        </div>
    </div>
</template>
  
<script setup>
import { ref } from 'vue';
import { useUserStore } from '~/store/user';

definePageMeta({
    middleware: ['auth'],
});

const config = useRuntimeConfig();
const isDashboardTab = ref(true);
const isProfileTab = ref(false);

const userStore = useUserStore();
const userId = userStore.user.id;
const { data: user } = await useFetch('/customers/' + userId, {
    baseURL: config.public.apiBase
});

const showDashboardTab = () => {
    isDashboardTab.value = true;
    isProfileTab.value = false;
};

const showProfileTab = () => {
    isDashboardTab.value = false;
    isProfileTab.value = true;
};

if(useRoute().hash == '#edit'){
    showProfileTab();
}

const logout = () => {
    userStore.removeUser();
    navigateTo('/');
}
</script>
  