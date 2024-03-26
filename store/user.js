import { defineStore } from "pinia";

export const useUserStore = defineStore('user', () => {
    const user = ref({
        id: null,
        full_name: 'Tài khoản',
        avt: '/img/avatar/default.jpg',
        isLoggin: false,
        isAdmin: false
    })

    function addUser(dataUser) {
        user.value.id = dataUser.id;
        user.value.full_name = dataUser.firstName;
        user.value.avt = dataUser.avatar;
        user.value.isLoggin = true;
        user.value.isAdmin = dataUser.isAdmin;
    }

    function removeUser() {
        user.value = {
            id: null,
            full_name: 'Tài khoản',
            avt: '/img/avatar/default.jpg',
            isLoggin: false,
            isAdmin: false
        }
    }

    return {
        user,
        addUser,
        removeUser
    }
}, {
    persist: true
})