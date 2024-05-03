<template>
    <AdminItemBreadCrumb />
    <div class="flex flex-col gap-y-5 p-5 rounded-lg bg-white shadow-xl w-full mx-auto">
        <div class="text-sm font-bold text-gray-700 uppercase">Thêm người dùng mới</div>
        <div class="flex gap-x-5">
            <div class="flex flex-col gap-y-3 w-1/2">
                <div class="flex items-center">
                    <div class="w-1/3 text-gray-600 font-semibold after:content-[':'] text-sm uppercase">Họ</div>
                    <input type="text" placeholder="nhập họ" v-model="customer.firstName"
                        class="w-2/3 px-2 py-2.5 border-gray-300 rounded-lg border outline-none text-gray-500 bg-admin  focus:border-red-500">
                </div>
                <div class="flex items-center">
                    <div class="w-1/3 text-gray-600 font-semibold after:content-[':'] text-sm uppercase">Tên</div>
                    <input type="text" placeholder="nhập tên" v-model="customer.lastName"
                        class="w-2/3 px-2 py-2.5 border-gray-300 rounded-lg border outline-none text-gray-500 bg-admin focus:border-red-500">
                </div>
                <div class="flex items-center">
                    <div class="w-1/3 text-gray-600 font-semibold after:content-[':'] text-sm uppercase">Số điện thoại</div>
                    <input type="text" placeholder="nhập số điện thoại" v-model="customer.phone"
                        class="w-2/3 px-2 py-2.5 border-gray-300 rounded-lg border outline-none text-gray-500 bg-admin  focus:border-red-500">
                </div>
                <div class="flex items-center">
                    <div class="w-1/3 text-gray-600 font-semibold after:content-[':'] text-sm uppercase">Email</div>
                    <input type="text" placeholder="nhập email" v-model="customer.email"
                        class="w-2/3 px-2 py-2.5 border-gray-300 rounded-lg border outline-none text-gray-500 bg-admin  focus:border-red-500">
                </div>
                <FormUploadImage v-model:src-image="customer.avatar" />
                <div class="flex items-center">
                    <div class="w-1/3 text-gray-600 font-semibold after:content-[':'] text-sm uppercase">Chọn giới tính
                    </div>
                    <select v-model="customer.gender"
                        class="w-2/3 px-2 py-2.5 border-gray-300 rounded-lg border outline-none text-gray-500 bg-admin  focus:border-red-500">
                        <option value="true">Nam</option>
                        <option value="false">Nữ</option>
                    </select>
                </div>
                <div class="flex items-center">
                    <div class="w-1/3 text-gray-600 font-semibold after:content-[':'] text-sm uppercase">Mật khẩu</div>
                    <input type="password" placeholder="nhập mật khẩu người dùng" v-model="customer.password"
                        class="w-2/3 px-2 py-2.5 border-gray-300 rounded-lg border outline-none text-gray-500 bg-admin  focus:border-red-500">
                </div>
                <div class="flex items-center">
                    <div class="w-1/3 text-gray-600 font-semibold after:content-[':'] text-sm uppercase">Xác nhận mật khẩu
                    </div>
                    <input type="password" placeholder="nhập lại mật khẩu"
                        class="w-2/3 px-2 py-2.5 border-gray-300 rounded-lg border outline-none text-gray-500 bg-admin  focus:border-red-500">
                </div>
                <div class="flex items-center">
                    <div class="w-1/3 text-gray-600 font-semibold after:content-[':'] text-sm uppercase">Chọn vai trò
                    </div>
                    <select placeholder="nhập đường dẫn..." v-model="customer.isAdmin"
                        class="w-2/3 px-2 py-2.5 border-gray-300 rounded-lg border outline-none bg-admin uppercase text-xs text-gray-500 focus:border-red-500">
                        <option value="false">Khách hàng</option>
                        <option value="true">Admin</option>
                    </select>
                </div>
                <div class="flex items-center">
                    <div class="w-1/3 text-gray-600 font-semibold after:content-[':'] text-sm uppercase">Chọn trạng thái
                    </div>
                    <select placeholder="nhập đường dẫn..." v-model="customer.active"
                        class="w-2/3 px-2 py-2.5 border-gray-300 rounded-lg border outline-none bg-admin uppercase text-xs text-gray-500 focus:border-red-500">
                        <option value="true">Hoạt động</option>
                        <option value="false">Khóa</option>
                    </select>
                </div>
            </div>

            <div class="flex flex-col gap-y-3 w-1/2">
                <div class="flex items-center">
                    <div class="w-1/3 text-gray-600 font-semibold after:content-[':'] text-sm uppercase">Jcoin</div>
                    <input type="number" placeholder="nhập số xu" v-model="customer.jcoin"
                        class="w-2/3 px-2 py-2.5 border-gray-300 rounded-lg border outline-none text-gray-500 bg-admin  focus:border-red-500">
                </div>
                <div class="flex items-center">
                    <div class="w-1/3 text-gray-600 font-semibold after:content-[':'] text-sm uppercase">Quốc gia 1</div>
                    <input type="text" placeholder="nhập quốc gia" v-model="customer.nation1"
                        class="w-2/3 px-2 py-2.5 border-gray-300 rounded-lg border outline-none text-gray-500 bg-admin  focus:border-red-500">
                </div>
                <div class="flex items-center">
                    <div class="w-1/3 text-gray-600 font-semibold after:content-[':'] text-sm uppercase">Thành phố 1</div>
                    <input type="text" placeholder="nhập thành phố" v-model="customer.city1"
                        class="w-2/3 px-2 py-2.5 border-gray-300 rounded-lg border outline-none text-gray-500 bg-admin  focus:border-red-500">
                </div>
                <div class="flex items-center">
                    <div class="w-1/3 text-gray-600 font-semibold after:content-[':'] text-sm uppercase">Quận/Huyện 1</div>
                    <input type="text" placeholder="nhập quận huyện" v-model="customer.district1"
                        class="w-2/3 px-2 py-2.5 border-gray-300 rounded-lg border outline-none text-gray-500 bg-admin  focus:border-red-500">
                </div>
                <div class="flex items-center">
                    <div class="w-1/3 text-gray-600 font-semibold after:content-[':'] text-sm uppercase">Địa chỉ 1</div>
                    <input type="text" placeholder="nhập địa chỉ thứ 1" v-model="customer.address1"
                        class="w-2/3 px-2 py-2.5 border-gray-300 rounded-lg border outline-none text-gray-500 bg-admin  focus:border-red-500">
                </div>
                <div class="flex items-center">
                    <div class="w-1/3 text-gray-600 font-semibold after:content-[':'] text-sm uppercase">Quốc gia 2</div>
                    <input type="text" placeholder="nhập quốc gia" v-model="customer.nation2"
                        class="w-2/3 px-2 py-2.5 border-gray-300 rounded-lg border outline-none text-gray-500 bg-admin  focus:border-red-500">
                </div>
                <div class="flex items-center">
                    <div class="w-1/3 text-gray-600 font-semibold after:content-[':'] text-sm uppercase">Thành phố 2</div>
                    <input type="text" placeholder="nhập thành phố" v-model="customer.city2"
                        class="w-2/3 px-2 py-2.5 border-gray-300 rounded-lg border outline-none text-gray-500 bg-admin  focus:border-red-500">
                </div>
                <div class="flex items-center">
                    <div class="w-1/3 text-gray-600 font-semibold after:content-[':'] text-sm uppercase">Quận/Huyện 2</div>
                    <input type="text" placeholder="nhập quận huyện" v-model="customer.district2"
                        class="w-2/3 px-2 py-2.5 border-gray-300 rounded-lg border outline-none text-gray-500 bg-admin  focus:border-red-500">
                </div>
                <div class="flex items-center">
                    <div class="w-1/3 text-gray-600 font-semibold after:content-[':'] text-sm uppercase">Địa chỉ 2</div>
                    <input type="text" placeholder="nhập địa chỉ thứ 2" v-model="customer.address2"
                        class="w-2/3 px-2 py-2.5 border-gray-300 rounded-lg border outline-none text-gray-500 bg-admin  focus:border-red-500">
                </div>
            </div>
        </div>

        <div class="flex gap-x-3 mx-auto">
            <button class="text-white bg-green-500 rounded py-1 px-4" @click="addCustomer">Thêm người dùng</button>
            <button class="text-gray-400 border border-gray-400 rounded py-1 px-4" @click="useRouter().back()">Quay
                lại</button>
        </div>
    </div>
</template>
<script setup>
definePageMeta({
    layout: 'admin', middleware: 'auth-admin',
})

const { $objstring } = useNuxtApp();
const config = useRuntimeConfig();

const customer = ref({
    firstName: '',
    lastName: '',
    phone: '',
    email: '',
    avatar: '/img/default.jpg',
    gender: true,
    password: '',
    active: true,
    nation1: 'Việt Nam',
    city1: 'Hà Nội',
    district1: 'Thanh Xuân',
    address1: '',
    nation2: 'Việt Nam',
    city2: 'Hà Nội',
    district2: 'Đống Đa',
    address1: '',
    address2: '',
    jcoin: 0,
    isAdmin: false
})

const addCustomer = async () => {
    await useFetch('/customers', {
        baseURL: config.public.apiBase,
        method: 'POST',
        body: $objstring(customer.value),
        onResponse: ({ response }) => {
            if (response.ok) {
                alert('Thêm người dùng mới thành công');
                navigateTo('/admin/customer');
            } else {
                alert('Thêm người dùng mới thất bại');
            }
        }
    })
}

</script>