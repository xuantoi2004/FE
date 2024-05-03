<template>
    <AdminItemBreadCrumb />
    <form @submit.prevent="createSupplier">
        <div class="flex flex-col gap-y-5 p-5 rounded-lg shadow-xl bg-white">
            <div class="text-md font-bold text-gray-700 uppercase" id="add">Thêm nhà cung cấp mới</div>

            <div class="flex gap-x-10">
                <div class="w-1/2 flex flex-col gap-y-3">
                    <div class="flex items-center">
                        <div class="w-1/3 text-gray-600 font-semibold after:content-[':'] ">Tên</div>
                        <input type="text" v-model="supplier.name" placeholder="nhập tên nhà cung cấp"
                            class="w-2/3 px-2 py-2.5 border-gray-300 rounded-lg text-gray-500 border outline-none  bg-admin placeholder:lowercase focus:border-red-500">
                    </div>
                    <div class="flex items-center">
                        <div class="w-1/3 text-gray-600 font-semibold after:content-[':'] ">Mô tả</div>
                        <textarea v-model="supplier.description" placeholder="nhập mô tả cho nhà cung cấp"
                            class="w-2/3 px-2 py-2.5 border-gray-300 rounded-lg text-gray-500 border outline-none  bg-admin placeholder:lowercase focus:border-red-500"></textarea>
                    </div>
                    <div class="flex items-center">
                        <div class="w-1/3 text-gray-600 font-semibold after:content-[':'] ">Số điện thoại</div>
                        <input type="text" v-model="supplier.phone" placeholder="nhập số điện thoại"
                            class="w-2/3 px-2 py-2.5 border-gray-300 rounded-lg text-gray-500 border outline-none  bg-admin placeholder:lowercase focus:border-red-500">
                    </div>
                    <div class="flex items-center">
                        <div class="w-1/3 text-gray-600 font-semibold after:content-[':'] ">Email</div>
                        <input type="email" v-model="supplier.email" placeholder="nhập email"
                            class="w-2/3 px-2 py-2.5 border-gray-300 rounded-lg text-gray-500 border outline-none  bg-admin placeholder:lowercase focus:border-red-500">
                    </div>
                    <div class="flex items-center">
                        <div class="w-1/3 text-gray-600 font-semibold after:content-[':'] ">Địa chỉ</div>
                        <textarea v-model="supplier.address" placeholder="nhập địa chỉ"
                            class="w-2/3 px-2 py-2.5 border-gray-300 rounded-lg text-gray-500 border outline-none  bg-admin placeholder:lowercase focus:border-red-500"></textarea>
                    </div>
                    <div class="flex items-center">
                        <div class="w-1/3 text-gray-600 font-semibold after:content-[':'] ">Thành phố</div>
                        <input type="text" v-model="supplier.city" placeholder="nhập thành phố"
                            class="w-2/3 px-2 py-2.5 border-gray-300 rounded-lg text-gray-500 border outline-none  bg-admin placeholder:lowercase focus:border-red-500">
                    </div>
                </div>
                <div class="w-1/2 flex flex-col gap-y-3">
                    <div class="flex items-center">
                        <div class="w-1/3 text-gray-600 font-semibold after:content-[':'] ">Quốc gia</div>
                        <input type="text" v-model="supplier.country" placeholder="nhập quốc gia"
                            class="w-2/3 px-2 py-2.5 border-gray-300 rounded-lg text-gray-500 border outline-none  bg-admin placeholder:lowercase focus:border-red-500">
                    </div>
                    <div class="flex items-center">
                        <div class="w-1/3 text-gray-600 font-semibold after:content-[':'] ">Mã bưu điện</div>
                        <input type="text" v-model="supplier.postal_code" placeholder="nhập mã bưu cục"
                            class="w-2/3 px-2 py-2.5 border-gray-300 rounded-lg text-gray-500 border outline-none  bg-admin placeholder:lowercase focus:border-red-500">
                    </div>
                    <div class="flex items-center">
                        <div class="w-1/3 text-gray-600 font-semibold after:content-[':'] ">Trang web</div>
                        <input type="text" v-model="supplier.url" placeholder="nhập đường dẫn tới trang web"
                            class="w-2/3 px-2 py-2.5 border-gray-300 rounded-lg text-gray-500 border outline-none  bg-admin placeholder:lowercase focus:border-red-500">
                    </div>
                    <FormUploadImage v-model:src-image="supplier.logo" />

                    <div class="flex items-center">
                        <div class="w-1/3 text-gray-600 font-semibold after:content-[':'] ">Xếp hạng</div>
                        <input type="number" min="1" v-model="supplier.ranking" placeholder="nhập số thứ tự trên index"
                            class="w-2/3 px-2 py-2.5 border-gray-300 rounded-lg text-gray-500 border outline-none  bg-admin placeholder:lowercase focus:border-red-500">
                    </div>
                    <div class="flex items-center">
                        <div class="w-1/3 text-gray-600 font-semibold after:content-[':'] ">Trạng thái
                        </div>
                        <select v-model="supplier.active"
                            class="w-2/3 px-2 py-2 border-gray-300 rounded-lg text-gray-500 border outline-none  bg-admin">
                            <option value="1">Hoạt động</option>
                            <option value="0">Tắt hoạt động</option>
                        </select>
                    </div>
                </div>
            </div>
            <div class="flex md:justify-center">
                <div class="flex gap-x-3">
                    <button class="text-white bg-green-600 rounded py-1 px-4" type="submit">Thêm</button>
                    <button class="text-gray-400 border border-gray-400 rounded py-1 px-4" @click="goBack">Quay lại</button>
                </div>
            </div>

        </div>
    </form>
</template>
<script setup>
definePageMeta({
    layout: 'admin', middleware: 'auth-admin',
})
const config = useRuntimeConfig();
const router = useRouter();
const { $objstring } = useNuxtApp();

const goBack = () => {
    router.back()
}

const supplier = ref({
    "name": "",
    "description": "",
    "phone": "",
    "email": "@gmail.com",
    "address": "",
    "city": "Hà Nội",
    "country": "Việt Nam",
    "postal_code": "000000",
    "url": ".com",
    "logo": "/img/default.jpg",
    "ranking": 1,
    "active": 1
})

const createSupplier = async () => {
    await useFetch('/suppliers', {
        baseURL: config.public.apiBase,
        method: 'POST',
        body: $objstring(supplier.value),
        onResponse({
            request, response, options
        }) {
            if (response.ok) {
                alert('Thêm nhà cung cấp mới thành công');
                router.back();
            } else {
                alert('Thêm nhà cung cấp mới thất bại')
            }
        }
    })
}

</script>