<template>
    <Adminproduct.value.resultBreadCrumb />
    <div class="flex flex-col gap-y-5 p-5 rounded-lg bg-white shadow-xl w-full mx-auto">
        <div class="flex flex-col gap-y-5">
            <div class="text-sm font-bold text-gray-700 uppercase">Sửa sản phẩm:</div>
            <div class="flex flex-col gap-y-3">
                <div class="flex product.value.results-center">
                    <div class="w-1/3 text-gray-600 font-semibold after:content-[':'] uppercase text-sm">Nhà cung cấp
                    </div>
                    <select v-model="product.result.supplierId"
                        class="w-2/3 px-2 py-2 text-gray-500 border-gray-300 rounded-lg border outline-none bg-admin text-sm ">
                        <option value="">Chọn nhà cung cấp</option>
                        <option v-for="sup in suppliers.result" :value="sup.id">{{ sup.name }}</option>
                    </select>
                </div>
                <div class="flex product.value.results-center">
                    <div class="w-1/3 text-gray-600 font-semibold after:content-[':'] uppercase text-sm">Danh mục
                    </div>
                    <select v-model="product.result.categoryId"
                        class="w-2/3 px-2 py-2 text-gray-500 border-gray-300 rounded-lg border outline-none  bg-admin  text-sm ">
                        <option value="">Chọn danh mục</option>
                        <option v-for="cate in categories.result" :value="cate.id">{{ cate.categoryName }}</option>
                    </select>
                </div>

                <div class="flex product.value.results-center">
                    <div class="w-1/3 text-gray-600 font-semibold after:content-[':'] uppercase text-sm">Tên</div>
                    <input type="text" v-model="product.result.name" placeholder="nhập tên sản phẩm"
                        class="w-2/3 px-2 py-2.5 text-gray-500 border-gray-300 rounded-lg border outline-none  bg-admin placeholder:lowercase focus:border-red-500">
                </div>
                <div class="flex product.value.results-center">
                    <div class="w-1/3 text-gray-600 font-semibold after:content-[':'] uppercase text-sm">Mô tả</div>
                    <textarea v-model="product.result.description" placeholder="nhập mô tả cho sản phẩm"
                        class="w-2/3 px-2 py-2.5 text-gray-500 border-gray-300 rounded-lg border outline-none  bg-admin placeholder:lowercase focus:border-red-500"></textarea>
                </div>
                <div class="flex product.value.results-center">
                    <div class="w-1/3 text-gray-600 font-semibold after:content-[':'] uppercase text-sm">Ảnh mô tả</div>
                    <input type="text" v-model="product.result.picture" placeholder="nhập link ảnh mô tả"
                        class="w-2/3 px-2 py-2.5 text-gray-500 border-gray-300 rounded-lg border outline-none  bg-admin placeholder:lowercase focus:border-red-500">
                </div>
                <div class="flex product.value.results-center">
                    <div class="w-1/3 text-gray-600 font-semibold after:content-[':'] uppercase text-sm">Giá</div>
                    <input type="number" v-model="product.result.price" placeholder="nhập giá"
                        class="w-2/3 px-2 py-2.5 text-gray-500 border-gray-300 rounded-lg border outline-none  bg-admin placeholder:lowercase focus:border-red-500">
                </div>
                <div class="flex product.value.results-center">
                    <div class="w-1/3 text-gray-600 font-semibold after:content-[':'] uppercase text-sm">Giảm giá</div>
                    <input type="number" v-model="product.result.discount" placeholder="nhập giảm giá"
                        class="w-2/3 px-2 py-2.5 text-gray-500 border-gray-300 rounded-lg border outline-none  bg-admin placeholder:lowercase focus:border-red-500">
                </div>
                <div class="flex product.value.results-center">
                    <div class="w-1/3 text-gray-600 font-semibold after:content-[':'] uppercase text-sm">Giảm giá
                    </div>
                    <select v-model="product.result.discountAvailable"
                        class="w-2/3 px-2 py-2 text-gray-500 border-gray-300 rounded-lg border outline-none  bg-admin  ">
                        <option value="">Chọn trạng thái</option>
                        <option value="true">giảm</option>
                        <option value="false">không giảm</option>
                    </select>
                </div>
                <div class="flex items-center">
                    <div class="w-1/3 text-gray-600 font-semibold after:content-[':'] uppercase text-sm">Flash sale
                    </div>
                    <select v-model="product.result.isFlashsale"
                        class="w-2/3 px-2 py-2 text-gray-500 border-gray-300 rounded-lg border outline-none  bg-admin  ">
                        <option value="">Chọn trạng thái</option>
                        <option value="true">Sale</option>
                        <option value="false">Not flashsale</option>
                    </select>
                </div>
                <div class="flex items-center">
                    <div class="w-1/3 text-gray-600 font-semibold after:content-[':'] uppercase text-sm">Trending
                    </div>
                    <select v-model="product.result.isTrending"
                        class="w-2/3 px-2 py-2 text-gray-500 border-gray-300 rounded-lg border outline-none  bg-admin  ">
                        <option value="">Chọn trạng thái</option>
                        <option value="true">Trend</option>
                        <option value="false">Not trend</option>
                    </select>
                </div>
                <div class="flex product.value.results-center">
                    <div class="w-1/3 text-gray-600 font-semibold after:content-[':'] uppercase text-sm">Trạng thái
                    </div>
                    <select v-model="product.result.productAvailable"
                        class="w-2/3 px-2 py-2 text-gray-500 border-gray-300 rounded-lg border outline-none  bg-admin  ">
                        <option value="">Chọn trạng thái</option>
                        <option value="true">Active</option>
                        <option value="false">Disactive</option>
                    </select>
                </div>
            </div>
        </div>

        <div class="w-1/3 flex gap-x-3 mx-auto">
            <button class="text-white bg-orange-500 rounded py-1 px-4" @click="editProduct">Sửa</button>
            <button class="text-gray-600 border border-gray-600 rounded py-1 px-4" @click="useRouter().back()">Quay
                lại</button>
        </div>
    </div>
</template>
<script setup>
definePageMeta({
    layout: 'admin', middleware: 'auth-admin',
})
const idProd = useRoute().params.id;
const { $objstring } = useNuxtApp();

const { data: product } = await useFetch('http://localhost:3000/api/products/' + idProd);

const { data: categories } = await useFetch('http://localhost:3000/api/category');

const { data: suppliers } = await useFetch('http://localhost:3000/api/suppliers');


const editProduct = async () => {
    const formData = ref({
        name: product.value.result.name,
        description: product.value.result.description,
        picture: product.value.result.picture,
        price: product.value.result.price,
        discount: product.value.result.discount,
        discount_available: product.value.result.discountAvailable ? 1 : 0,
        product_available: product.value.result.productAvailable ? 1 : 0,
        supplier_id: product.value.result.supplierId,
        category_id: product.value.result.categoryId,
        is_trending: product.value.result.isTrending,
        is_flashsale: product.value.result.isFlashsale
    });

    await useFetch('http://localhost:3000/api/products/' + idProd, {
        method: 'PATCH',
        body: $objstring(formData.value),
        watch: false,
        onResponse: ({ response }) => {
            if (response.ok) {
                alert('Edit success');
                // useRouter().back()
            } else {
                alert('Edit failed')
            }
        }
    })
}

</script>