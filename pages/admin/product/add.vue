<template>
    <AdminItemBreadCrumb />
    <div class="flex flex-col gap-y-5 p-5 rounded-lg bg-white shadow-xl w-full mx-auto">
        <div class="flex flex-col gap-y-5">
            <div class="text-sm font-bold text-gray-700 uppercase">Thêm sản phẩm mới :</div>
            <div class="flex flex-wrap">
                <div class="w-1/2">
                    <div class="flex flex-col gap-y-3 p-2">
                        <div class="flex items-center">
                            <div class="w-1/3 text-gray-600 font-semibold after:content-[':'] uppercase text-sm">Nhà
                                cung cấp
                            </div>
                            <select v-model="product.supplier_id"
                                class="w-2/3 px-2 py-2 text-gray-500 border-gray-300 rounded-lg border outline-none bg-admin text-sm ">
                                <option value="">Chọn nhà cung cấp</option>
                                <option v-for="sup in suppliers.result" :value="sup.id">{{ sup.name }}</option>
                            </select>
                        </div>
                        <div class="flex items-center">
                            <div class="w-1/3 text-gray-600 font-semibold after:content-[':'] uppercase text-sm">Danh
                                mục
                            </div>
                            <select v-model="product.category_id"
                                class="w-2/3 px-2 py-2 text-gray-500 border-gray-300 rounded-lg border outline-none  bg-admin  text-sm ">
                                <option value="">Chọn danh mục</option>
                                <option v-for="cate in categories.result" :value="cate.id">{{ cate.categoryName }}
                                </option>
                            </select>
                        </div>

                        <div class="flex items-center">
                            <div class="w-1/3 text-gray-600 font-semibold after:content-[':'] uppercase text-sm">Tên
                            </div>
                            <input type="text" v-model="product.name" placeholder="nhập tên sản phẩm"
                                class="w-2/3 px-2 py-2.5 text-gray-500 border-gray-300 rounded-lg border outline-none  bg-admin placeholder:lowercase focus:border-red-500">
                        </div>
                        <div class="flex items-center">
                            <div class="w-1/3 text-gray-600 font-semibold after:content-[':'] uppercase text-sm">Số
                                lượng</div>
                            <input type="number" v-model="product.qty" placeholder="số lượng sản phẩm"
                                class="w-2/3 px-2 py-2.5 text-gray-500 border-gray-300 rounded-lg border outline-none  bg-admin placeholder:lowercase focus:border-red-500">
                        </div>
                        <div class="flex items-center">
                            <div class="w-1/3 text-gray-600 font-semibold after:content-[':'] uppercase text-sm">Giá
                            </div>
                            <input type="number" v-model="product.price" placeholder="nhập giá"
                                class="w-2/3 px-2 py-2.5 text-gray-500 border-gray-300 rounded-lg border outline-none  bg-admin placeholder:lowercase focus:border-red-500">
                        </div>
                        <div class="flex items-center">
                            <div class="w-1/3 text-gray-600 font-semibold after:content-[':'] uppercase text-sm">Sản
                                phẩm đang có
                                sẵn?
                            </div>
                            <select v-model="product.product_available"
                                class="w-2/3 px-2 py-2 text-gray-500 border-gray-300 rounded-lg border outline-none  bg-admin  ">
                                <option value="true">Có</option>
                                <option value="false">Không</option>
                            </select>
                        </div>
                    </div>
                </div>
                <div class="w-1/2">
                    <div class="flex flex-col gap-y-3 p-2">
                        <div class="flex items-center">
                            <div class="w-1/3 text-gray-600 font-semibold after:content-[':'] uppercase text-sm">Sản
                                phẩm đang giảm giá?
                            </div>
                            <select v-model="product.discount_available"
                                class="w-2/3 px-2 py-2 text-gray-500 border-gray-300 rounded-lg border outline-none bg-admin">
                                <option value="true">Giảm</option>
                                <option value="false">Không giảm</option>
                            </select>
                        </div>
                        <div class="flex items-center">
                            <div class="w-1/3 text-gray-600 font-semibold after:content-[':'] uppercase text-sm">% giảm
                                giá</div>
                            <input type="number" v-model="product.discount" placeholder="nhập % giảm"
                                class="w-2/3 px-2 py-2.5 text-gray-500 border-gray-300 rounded-lg border outline-none  bg-admin placeholder:lowercase focus:border-red-500">
                        </div>
                        <div class="flex items-center">
                            <div class="w-1/3 text-gray-600 font-semibold after:content-[':'] uppercase text-sm">
                                Flashsale?
                            </div>
                            <select v-model="product.is_flashsale"
                                class="w-2/3 px-2 py-2 text-gray-500 border-gray-300 rounded-lg border outline-none  bg-admin  ">
                                <option value="true">Có</option>
                                <option value="false">Không</option>
                            </select>
                        </div>
                        <div class="flex items-center">
                            <div class="w-1/3 text-gray-600 font-semibold after:content-[':'] uppercase text-sm">
                                Trending?
                            </div>
                            <select v-model="product.is_trending"
                                class="w-2/3 px-2 py-2 text-gray-500 border-gray-300 rounded-lg border outline-none  bg-admin  ">
                                <option value="true">Có</option>
                                <option value="false">Không</option>
                            </select>
                        </div>
                        <div class="flex items-center">
                            <div class="w-1/3 text-gray-600 font-semibold after:content-[':'] uppercase text-sm">Ảnh mô
                                tả</div>
                            <div class="w-2/3 flex flex-col">
                                <div class="py-2 gap-1 flex items-center">
                                    <img :src="product.picture" class="w-2/3">
                                    <div class="flex flex-col w-1/3 gap-2">
                                        <input type="file" @change="onFileChange">
                                        <button class="bg-green-500 text-white rounded">
                                            Upload ảnh
                                        </button>
                                    </div>
                                </div>
                                <div class="flex gap-2">
                                    <input type="text" v-model="product.picture" placeholder="nhập link ảnh"
                                        class="w-full px-2 py-2.5 text-gray-500 border-gray-300 rounded-lg border outline-none  bg-admin placeholder:lowercase focus:border-red-500">
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="w-full">
                    <div class="flex p-2">
                        <div class="w-1/12 text-gray-600 font-semibold after:content-[':'] uppercase text-sm">Mô tả
                        </div>
                        <div class="w-1/12 text-green-500 hover:text-green-700">
                            <button v-if="product.name.length > 0"
                                :title="`Dùng AI tạo mô tả cho sản phẩm ${product.name}`" @click="genAI">
                                <IconComputer />
                            </button>
                        </div>
                        <div class="w-10/12 flex flex-col gap-2">
                            <div v-if="loadingGenAI" class='h-0.5 bg-red-100 overflow-hidden'>
                                <div class='progress h-full bg-green-500 left-right'></div>
                            </div>
                            <textarea v-model="product.description" :disabled="loadingGenAI"
                                :placeholder="loadingGenAI ? 'Đang tạo content tự động' : 'nhập mô tả cho sản phẩm'"
                                class="px-2 py-5 text-gray-500 border-gray-300 rounded-lg border outline-none  bg-admin placeholder:lowercase focus:border-red-500"></textarea>
                        </div>
                    </div>

                </div>
            </div>
        </div>

        <div class="flex gap-x-3 mx-auto">
            <button class="text-white bg-green-500 rounded py-1 px-4" @click="addProduct">Thêm</button>
            <button class="text-gray-600 border border-gray-600 rounded py-1 px-4" @click="useRouter().back()">Quay
                lại</button>
        </div>
    </div>
</template>
<script setup>
definePageMeta({
    layout: 'admin', middleware: 'auth-admin',
})

const { $objstring } = useNuxtApp();

const product = ref({
    name: '',
    description: '',
    picture: '/img/default.jpg',
    price: '',
    discount: '0',
    discount_available: false,
    product_available: true,
    supplier_id: '',
    category_id: '',
    is_flashsale: false,
    is_trending: false,
    qty: 10
})

const loadingGenAI = ref(false);

const { data: categories } = await useFetch('http://localhost:3000/api/category');

const { data: suppliers } = await useFetch('http://localhost:3000/api/suppliers');

const onFileChange = async (e) => {
    // Lấy file được chọn
    const file = e.target.files[0];

    // // Tạo FileReader
    // const reader = new FileReader();

    // // Đọc file và hiển thị ảnh
    // reader.onloadend = async (e) => {
    //     product.value.picture = reader.result;
    // };
    // reader.readAsDataURL(file);

    // Tạo FormData để gửi file
    const formData = new FormData();
    formData.append('image', file);

    await useFetch('http://localhost:3000/api/products/upload', {
        method: 'POST',
        body: formData,
        onResponse: ({ response }) => {
            if (response.ok) {
                const imageURL = response._data.result;
                product.value.picture = 'http://localhost:3000/api/products/image/'+imageURL;
                alert('Upload ảnh thành công');
            } else {
                alert('Upload ảnh thất bại')
            }
        }
    })
};

const resetProduct = () => { }

const addProduct = async () => {
    await useFetch('http://localhost:3000/api/products', {
        method: 'POST',
        body: $objstring(product.value),
        onResponse: ({ response }) => {
            if (response.ok) {
                alert('Thêm sản phẩm thành công');
                useRouter().back()
            } else {
                alert('Thêm sản phẩm thất bại')
            }
        }
    })
}

const genAI = async () => {
    loadingGenAI.value = true;

    const { data, pending, error } = await useFetch('http://localhost:3000/api/gemini/prompt', {
        method: 'POST',
        body: $objstring({
            prompt: `viết mô tả ngắn gọn khoảng 400 ký tự cho sản phẩm: ${product.value.name}`
        })
    })

    if (error.value) {
        alert('Lỗi truy vấn AI:' + error.value);
        loadingGenAI.value = false;
        return;
    }

    product.value.description = data.value;
    loadingGenAI.value = false;
}

</script>
<style scoped>
.progress {
    animation: progress 1s infinite linear;
}

.left-right {
    transform-origin: 0% 50%;
}

@keyframes progress {
    0% {
        transform: translateX(0) scaleX(0);
    }

    40% {
        transform: translateX(0) scaleX(0.4);
    }

    100% {
        transform: translateX(100%) scaleX(0.5);
    }
}

canvas {
  max-width: 200px;
  max-height: 200px;
}
</style>