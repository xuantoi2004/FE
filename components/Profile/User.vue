<template>
    <div class="flex flex-col bg-white p-4">
        <div class="font-semibold mb-3">THÔNG TIN TÀI KHOẢN</div>
        <div class="flex flex-col gap-y-3">
            <div class="flex justify-between">
                <div class="w-2/12">Họ</div>
                <input type="text" class="border w-10/12 rounded px-2 py-1 outline-none" placeholder="Nhập họ"
                    v-model="user.firstName">
            </div>
            <div class="flex justify-between">
                <div class="w-2/12">Tên</div>
                <input type="text" class="border w-10/12 rounded px-2 py-1 outline-none" placeholder="Nhập tên"
                    v-model="user.lastName">
            </div>
            <div class="flex justify-between">
                <div class="w-2/12">Số điện thoại</div>
                <input type="text" class="border w-10/12 rounded px-2 py-1 outline-none disabled:bg-gray-200 disabled:text-gray-400" placeholder="Nhập số điện thoại"
                    :value="user.phone" disabled>
            </div>
            <div class="flex justify-between">
                <div class="w-2/12">Email</div>
                <input type="email" class="border w-10/12 rounded px-2 py-1 outline-none disabled:bg-gray-200 disabled:text-gray-400" placeholder="Nhập email"
                    :value="user.email" disabled>
            </div>
            <div class="flex justify-between">
                <div class="w-2/12">Giới tính</div>
                <div class="w-10/12 flex">
                    <div class="flex items-center mr-2"><input type="radio" name="gender" v-model="user.gender" value="true"
                            class="mr-1"> Nam</div>
                    <div class="flex items-center"><input type="radio" name="gender" v-model="user.gender" value="false"
                            class="mr-1"> Nữ</div>
                </div>
            </div>
            <div class="flex justify-between border-b border-dashed pb-3">
                <div class="w-2/12">Avatar</div>
                <div class="w-10/12 flex">
                    <input type="text" class="w-full border rounded outline-none px-2 py-1 mr-1" placeholder="nhập link ảnh"
                        v-model="user.avatar">
                </div>
            </div>
            <div class="flex justify-between">
                <div class="w-2/12">Quốc gia 1</div>
                <div class="w-10/12 flex">
                    <input type="text" class="w-full border rounded outline-none px-2 py-1 mr-1"
                        placeholder="nhập quốc gia" v-model="user.nation1">
                </div>
            </div>
            <div class="flex justify-between">
                <div class="w-2/12">Thành phố 1</div>
                <div class="w-10/12 flex">
                    <input type="text" class="w-full border rounded outline-none px-2 py-1 mr-1"
                        placeholder="nhập thành phố" v-model="user.city1">
                </div>
            </div>
            <div class="flex justify-between">
                <div class="w-2/12">Quận/Huyện 1</div>
                <div class="w-10/12 flex">
                    <input type="text" class="w-full border rounded outline-none px-2 py-1 mr-1"
                        placeholder="nhập quận/huyện" v-model="user.district1">
                </div>
            </div>
            <div class="flex justify-between border-b border-dashed pb-3">
                <div class="w-2/12">Địa chỉ 1</div>
                <div class="w-10/12 flex">
                    <input type="text" class="w-full border rounded outline-none px-2 py-1 mr-1"
                        placeholder="nhập địa 1" v-model="user.address1">
                </div>
            </div>
            <div class="flex justify-between">
                <div class="w-2/12">Quốc gia 2</div>
                <div class="w-10/12 flex">
                    <input type="text" class="w-full border rounded outline-none px-2 py-1 mr-1"
                        placeholder="nhập quốc gia" v-model="user.nation2">
                </div>
            </div>
            <div class="flex justify-between">
                <div class="w-2/12">Thành phố 2</div>
                <div class="w-10/12 flex">
                    <input type="text" class="w-full border rounded outline-none px-2 py-1 mr-1"
                        placeholder="nhập thành phố" v-model="user.city2">
                </div>
            </div>
            <div class="flex justify-between">
                <div class="w-2/12">Quận/Huyện 2</div>
                <div class="w-10/12 flex">
                    <input type="text" class="w-full border rounded outline-none px-2 py-1 mr-1"
                        placeholder="nhập quận/huyện" v-model="user.district2">
                </div>
            </div>
            <div class="flex justify-between">
                <div class="w-2/12">Địa chỉ 2</div>
                <div class="w-10/12 flex">
                    <input type="text" class="w-full border rounded outline-none px-2 py-1 mr-1"
                        placeholder="nhập địa 1" v-model="user.address2">
                </div>
            </div>
            <div class="flex justify-between">
                <div class="w-2/12"></div>
                <div class="w-10/12 flex">
                    <input type="checkbox" v-model="checkboxChangePass" class="mr-1">
                    <div class="font-semibold">
                        Đổi mật khẩu
                    </div>
                </div>
            </div>
            <div class="flex flex-col gap-y-3" v-if="checkboxChangePass">
                <div class="flex">
                    <div class="w-1/6">Mật khẩu cũ</div>
                    <input type="password" v-model="passwordObj.old_pass"
                        class="w-5/6 border rounded px-2 py-1 mr-1 outline-none" placeholder="nhập mật khẩu cũ">
                </div>
                <div class="flex">
                    <div class="w-1/6">Mật khẩu mới</div>
                    <input type="password" v-model="passwordObj.new_pass"
                        class="w-5/6 border rounded px-2 py-1 mr-1 outline-none" placeholder="nhập mật khẩu mới">
                </div>
                <div class="flex">
                    <div class="w-1/6">Nhập lại mật khẩu mới</div>
                    <input type="password" v-model="passwordObj.confirm_pass"
                        class="w-5/6 border rounded px-2 py-1 mr-1 outline-none" placeholder="xác nhận mật khẩu mới">
                </div>
            </div>
            <button @click="updateUser"
                class="text-center w-2/6 bg-red-700 rounded-lg Px-4 py-2 text-white mx-auto mt-4 uppercase text-sm hover:bg-red-500">
                Cập nhật
            </button>
        </div>
    </div>
</template>
<script setup>
import { useUserStore } from '~/store/user';

const {$objstring} = useNuxtApp();
const props = defineProps({
    user: {
        type: Object,
        required: true
    }
})

const user = ref(props.user);
const userStore = useUserStore();

const passwordObj = ref({
    old_pass: '',
    new_pass: '',
    confirm_pass: '',
})

const checkboxChangePass = ref(false);

const updateUser = async () => {
    let checkCondSendReq = true;

    const formData = {
        ...user.value
    }

    //check password
    if (checkboxChangePass.value) {
        if (passwordObj.value.old_pass.length < 5 || passwordObj.value.new_pass.length < 5) {
            checkCondSendReq = false;
            alert('Mật khẩu chưa đủ độ dài');
        }

        if (passwordObj.value.old_pass !== user.value.password) {
            checkCondSendReq = false;
            alert('Mật khẩu cũ nhập không chính xác');
        }
        if (passwordObj.value.new_pass !== passwordObj.value.confirm_pass) {
            checkCondSendReq = false;
            alert('Mật khẩu nhập lại không khớp');
        }
        formData.password = passwordObj.value.new_pass;
    }

    if (checkCondSendReq) {
        await useFetch('http://localhost:3000/api/customers/'+user.value.id, {
            method: 'PATCH',
            body: $objstring(formData),
            onResponse: ({response}) => {
                if(response.ok) {
                    userStore.removeUser();
                    userStore.addUser(response._data.result);
                    alert('Update thành công');
                } else {
                    alert('Update thất bại');
                }
            }
        })
    }
}

</script>