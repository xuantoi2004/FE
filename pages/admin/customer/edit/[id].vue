<template>
    <AdminItemBreadCrumb />
    <div class="flex flex-col gap-y-5 p-5 rounded-lg bg-white shadow-xl w-full mx-auto">
        <div class="text-sm font-bold text-gray-700 uppercase">Cập nhật người dùng:</div>
        <div class="flex gap-x-5">
            <div class="flex flex-col gap-y-3 w-1/2">
                <div class="flex items-center">
                    <div class="w-1/3 text-gray-600 font-semibold after:content-[':'] text-sm uppercase">Họ</div>
                    <input type="text" placeholder="nhập họ" v-model="customer.result.firstName"
                        class="w-2/3 px-2 py-2.5 border-gray-300 rounded-lg border outline-none text-gray-500 bg-admin  focus:border-red-500">
                </div>
                <div class="flex items-center">
                    <div class="w-1/3 text-gray-600 font-semibold after:content-[':'] text-sm uppercase">Tên</div>
                    <input type="text" placeholder="nhập tên" v-model="customer.result.lastName"
                        class="w-2/3 px-2 py-2.5 border-gray-300 rounded-lg border outline-none text-gray-500 bg-admin focus:border-red-500">
                </div>
                <div class="flex items-center">
                    <div class="w-1/3 text-gray-600 font-semibold after:content-[':'] text-sm uppercase">Số điện thoại</div>
                    <input type="text" placeholder="nhập số điện thoại" v-model="customer.result.phone"
                        class="w-2/3 px-2 py-2.5 border-gray-300 rounded-lg border outline-none text-gray-500 bg-admin  focus:border-red-500">
                </div>
                <div class="flex items-center">
                    <div class="w-1/3 text-gray-600 font-semibold after:content-[':'] text-sm uppercase">Email</div>
                    <input type="text" placeholder="nhập email" v-model="customer.result.email"
                        class="w-2/3 px-2 py-2.5 border-gray-300 rounded-lg border outline-none text-gray-500 bg-admin  focus:border-red-500">
                </div>
                <FormUploadImage v-model:src-image="customer.result.avatar" />
                <div class="flex items-center">
                    <div class="w-1/3 text-gray-600 font-semibold after:content-[':'] text-sm uppercase">Chọn giới tính
                    </div>
                    <select v-model="customer.result.gender"
                        class="w-2/3 px-2 py-2.5 border-gray-300 rounded-lg border outline-none text-gray-500 bg-admin  focus:border-red-500">
                        <option value="true">Nam</option>
                        <option value="false">Nữ</option>
                    </select>
                </div>
                <!-- <div class="flex items-center">
                    <div class="w-1/3 text-gray-600 font-semibold after:content-[':'] text-sm uppercase">Mật khẩu cũ</div>
                    <input type="password" placeholder="nhập mật khẩu người dùng"
                        class="w-2/3 px-2 py-2.5 border-gray-300 rounded-lg border outline-none text-gray-500 bg-admin  focus:border-red-500">
                </div>
                <div class="flex items-center">
                    <div class="w-1/3 text-gray-600 font-semibold after:content-[':'] text-sm uppercase">Mật khẩu mới
                    </div>
                    <input type="password" placeholder="nhập lại mật khẩu"
                        class="w-2/3 px-2 py-2.5 border-gray-300 rounded-lg border outline-none text-gray-500 bg-admin  focus:border-red-500">
                </div> -->
                <div class="flex items-center">
                    <div class="w-1/3 text-gray-600 font-semibold after:content-[':'] text-sm uppercase">Chọn vai trò
                    </div>
                    <select placeholder="nhập đường dẫn..." v-model="customer.result.isAdmin"
                        class="w-2/3 px-2 py-2.5 border-gray-300 rounded-lg border outline-none bg-admin uppercase text-xs text-gray-500 focus:border-red-500">
                        <option value="false">Khách hàng</option>
                        <option value="true">Admin</option>
                    </select>
                </div>
                <div class="flex items-center">
                    <div class="w-1/3 text-gray-600 font-semibold after:content-[':'] text-sm uppercase">Chọn trạng thái
                    </div>
                    <select placeholder="nhập đường dẫn..." v-model="customer.result.active"
                        class="w-2/3 px-2 py-2.5 border-gray-300 rounded-lg border outline-none bg-admin uppercase text-xs text-gray-500 focus:border-red-500">
                        <option value="true">Hoạt động</option>
                        <option value="false">Khóa</option>
                    </select>
                </div>
            </div>

            <div class="flex flex-col gap-y-3 w-1/2">
                <div class="flex items-center">
                    <div class="w-1/3 text-gray-600 font-semibold after:content-[':'] text-sm uppercase">Jcoin</div>
                    <input type="number" placeholder="nhập số xu" v-model="customer.result.jcoin"
                        class="w-2/3 px-2 py-2.5 border-gray-300 rounded-lg border outline-none text-gray-500 bg-admin  focus:border-red-500">
                </div>
                <div class="flex items-center">
                    <div class="w-1/3 text-gray-600 font-semibold after:content-[':'] text-sm uppercase">Quốc gia 1</div>
                    <input type="text" placeholder="nhập quốc gia" v-model="customer.result.nation1"
                        class="w-2/3 px-2 py-2.5 border-gray-300 rounded-lg border outline-none text-gray-500 bg-admin  focus:border-red-500">
                </div>
                <div class="flex items-center">
                    <div class="w-1/3 text-gray-600 font-semibold after:content-[':'] text-sm uppercase">Thành phố 1</div>
                    <input type="text" placeholder="nhập thành phố" v-model="customer.result.city1"
                        class="w-2/3 px-2 py-2.5 border-gray-300 rounded-lg border outline-none text-gray-500 bg-admin  focus:border-red-500">
                </div>
                <div class="flex items-center">
                    <div class="w-1/3 text-gray-600 font-semibold after:content-[':'] text-sm uppercase">Quận/Huyện 1</div>
                    <input type="text" placeholder="nhập quận huyện" v-model="customer.result.district1"
                        class="w-2/3 px-2 py-2.5 border-gray-300 rounded-lg border outline-none text-gray-500 bg-admin  focus:border-red-500">
                </div>
                <div class="flex items-center">
                    <div class="w-1/3 text-gray-600 font-semibold after:content-[':'] text-sm uppercase">Địa chỉ 1</div>
                    <input type="text" placeholder="nhập địa chỉ thứ 1" v-model="customer.result.address1"
                        class="w-2/3 px-2 py-2.5 border-gray-300 rounded-lg border outline-none text-gray-500 bg-admin  focus:border-red-500">
                </div>
                <div class="flex items-center">
                    <div class="w-1/3 text-gray-600 font-semibold after:content-[':'] text-sm uppercase">Quốc gia 2</div>
                    <input type="text" placeholder="nhập quốc gia" v-model="customer.result.nation2"
                        class="w-2/3 px-2 py-2.5 border-gray-300 rounded-lg border outline-none text-gray-500 bg-admin  focus:border-red-500">
                </div>
                <div class="flex items-center">
                    <div class="w-1/3 text-gray-600 font-semibold after:content-[':'] text-sm uppercase">Thành phố 2</div>
                    <input type="text" placeholder="nhập thành phố" v-model="customer.result.city2"
                        class="w-2/3 px-2 py-2.5 border-gray-300 rounded-lg border outline-none text-gray-500 bg-admin  focus:border-red-500">
                </div>
                <div class="flex items-center">
                    <div class="w-1/3 text-gray-600 font-semibold after:content-[':'] text-sm uppercase">Quận/Huyện 2</div>
                    <input type="text" placeholder="nhập quận huyện" v-model="customer.result.district2"
                        class="w-2/3 px-2 py-2.5 border-gray-300 rounded-lg border outline-none text-gray-500 bg-admin  focus:border-red-500">
                </div>
                <div class="flex items-center">
                    <div class="w-1/3 text-gray-600 font-semibold after:content-[':'] text-sm uppercase">Địa chỉ 2</div>
                    <input type="text" placeholder="nhập địa chỉ thứ 2" v-model="customer.result.address2"
                        class="w-2/3 px-2 py-2.5 border-gray-300 rounded-lg border outline-none text-gray-500 bg-admin  focus:border-red-500">
                </div>
            </div>
        </div>

        <div class="flex gap-x-3 mx-auto">
            <button class="text-white bg-orange-500 rounded py-1 px-4" @click="editCustomer">Cập nhật người dùng</button>
            <button class="text-gray-400 border border-gray-400 rounded py-1 px-4" @click="useRouter().back()">Trở
                lại</button>
        </div>
    </div>
</template>
<script setup>
definePageMeta({
    layout: 'admin', middleware: 'auth-admin',
})

const idCustomer = useRoute().params.id;
const { $objstring } = useNuxtApp();
const config = useRuntimeConfig();

const {data: customer} = await useFetch('/customers/'+idCustomer,{
    baseURL: config.public.apiBase
});

const editCustomer = async () => {
    await useFetch('/customers/update-full/'+idCustomer, {
        baseURL: config.public.apiBase,
        method: 'PATCH',
        body: $objstring(customer.value.result),
        onResponse: ({ response }) => {
            if (response.ok) {
                alert('Cập nhật thành công');
                navigateTo('/admin/customer');
            } else {
                alert('Cập nhật thất bại');
            }
        }
    })
}

</script>