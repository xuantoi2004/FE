<template>
    <!-- <Adminproduct.value.resultBreadCrumb /> -->
    <div class="flex flex-col gap-y-5 p-5 rounded-lg bg-white shadow-xl w-full mx-auto">
        <div class="flex flex-col gap-y-5">
            <div class="text-sm font-bold text-gray-700 uppercase">Sửa sản phẩm: {{ product.result.name }}</div>

            <div class="flex flex-col gap-y-3">
                <table class="table-auto shadow-sm">
                    <thead>
                        <tr class="text-gray-700 text-left">
                            <th>Tên</th>
                            <th>Thuộc tính</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr class="text-gray-600">
                            <td class="border p-3 w-1/3">Nhà cung cấp</td>
                            <td class="border p-3 w-2/3">
                                <select v-model="product.result.supplierId"
                                    class="w-full px-2 py-2 text-gray-500 border-gray-300 rounded-lg border outline-none bg-admin text-sm ">
                                    <option value="">Chọn nhà cung cấp</option>
                                    <option v-for="sup in suppliers.result" :value="sup.id">{{ sup.name }}</option>
                                </select>
                            </td>
                        </tr>
                        <tr class="text-gray-600">
                            <td class="border p-3 w-1/3">Danh mục</td>
                            <td class="border p-3 w-2/3">
                                <select v-model="product.result.categoryId"
                                    class="w-full px-2 py-2 text-gray-500 border-gray-300 rounded-lg border outline-none  bg-admin  text-sm ">
                                    <option value="">Chọn danh mục</option>
                                    <option v-for="cate in categories.result" :value="cate.id">{{ cate.categoryName }}
                                    </option>
                                </select>
                            </td>
                        </tr>
                        <tr class="text-gray-600">
                            <td class="border p-3 w-1/3">Tên</td>
                            <td class="border p-3 w-2/3">
                                <input type="text" v-model="product.result.name" placeholder="nhập tên sản phẩm"
                                    class="w-full px-2 py-2.5 text-gray-500 border-gray-300 rounded-lg border outline-none  bg-admin placeholder:lowercase focus:border-red-500">
                            </td>
                        </tr>
                        <tr class="text-gray-600">
                            <td class="border p-3 w-1/3">Mô tả</td>
                            <td class="border p-3 w-2/3">
                                <textarea v-model="product.result.description" placeholder="nhập mô tả cho sản phẩm"
                                    class="w-full px-2 py-2.5 text-gray-500 border-gray-300 rounded-lg border outline-none  bg-admin placeholder:lowercase focus:border-red-500"></textarea>
                            </td>
                        </tr>
                        <tr class="text-gray-600">
                            <td class="border p-3 w-1/3" id="avatar">Ảnh đại diện</td>
                            <td class="border p-3 w-2/3">
                                <div class="flex items-center gap-x-3">
                                    <img :src="product.result.picture" class="w-1/4" alt="">
                                    <input type="text" v-model="product.result.picture" placeholder="nhập link ảnh đại diện"
                                        class="h-fit w-3/4 px-2 py-2.5 text-gray-500 border-gray-300 rounded-lg border outline-none  bg-admin placeholder:lowercase focus:border-red-500">
                                </div>
                            </td>
                        </tr>
                        <tr class="text-gray-600">
                            <td class="border p-3 w-1/3">Số lượng</td>
                            <td class="border p-3 w-2/3">
                                <input type="number" v-model="product.result.qty" placeholder="nhập số lượng"
                                    class="w-full px-2 py-2.5 text-gray-500 border-gray-300 rounded-lg border outline-none  bg-admin placeholder:lowercase focus:border-red-500">
                            </td>
                        </tr>
                        <tr class="text-gray-600">
                            <td class="border p-3 w-1/3">Giá</td>
                            <td class="border p-3 w-2/3">
                                <input type="number" v-model="product.result.price" placeholder="nhập giá"
                                    class="w-full px-2 py-2.5 text-gray-500 border-gray-300 rounded-lg border outline-none  bg-admin placeholder:lowercase focus:border-red-500">
                            </td>
                        </tr>
                        <tr class="text-gray-600">
                            <td class="border p-3 w-1/3">Giảm giá</td>
                            <td class="border p-3 w-2/3">
                                <select v-model="product.result.discountAvailable"
                                    class="w-full px-2 py-2 text-gray-500 border-gray-300 rounded-lg border outline-none  bg-admin  ">
                                    <option value="true">Giảm</option>
                                    <option value="false">Không</option>
                                </select>
                            </td>
                        </tr>
                        <tr class="text-gray-600">
                            <td class="border p-3 w-1/3">% giảm giá</td>
                            <td class="border p-3 w-2/3">
                                <input type="number" v-model="product.result.discount" placeholder="nhập giảm giá"
                                    class="w-full px-2 py-2.5 text-gray-500 border-gray-300 rounded-lg border outline-none  bg-admin placeholder:lowercase focus:border-red-500">
                            </td>
                        </tr>
                        <tr class="text-gray-600">
                            <td class="border p-3 w-1/3">Flashsale</td>
                            <td class="border p-3 w-2/3">
                                <select v-model="product.result.isFlashsale"
                                    class="w-full px-2 py-2 text-gray-500 border-gray-300 rounded-lg border outline-none  bg-admin  ">
                                    <option value="true">Có</option>
                                    <option value="false">Không</option>
                                </select>
                            </td>
                        </tr>
                        <tr class="text-gray-600">
                            <td class="border p-3 w-1/3">Trending</td>
                            <td class="border p-3 w-2/3">
                                <select v-model="product.result.isTrending"
                                    class="w-full px-2 py-2 text-gray-500 border-gray-300 rounded-lg border outline-none  bg-admin  ">
                                    <option value="true">Có</option>
                                    <option value="false">Không</option>
                                </select>
                            </td>
                        </tr>
                        <tr class="text-gray-600">
                            <td class="border p-3 w-1/3">Có sẵn</td>
                            <td class="border p-3 w-2/3">
                                <select v-model="product.result.productAvailable"
                                    class="w-full px-2 py-2 text-gray-500 border-gray-300 rounded-lg border outline-none  bg-admin">
                                    <option value="true">Có</option>
                                    <option value="false">Không</option>
                                </select>
                            </td>
                        </tr>
                        <tr class="text-gray-600" v-for="item in itemProps.result">
                            <td class="border p-3 w-1/3">{{ item.nameProp }}</td>
                            <td class="border p-3 w-2/3">{{ item.valueProp }}</td>
                        </tr>
                        <tr class="text-gray-600" :class="{ hidden: hiddenAddProdPropBox }">
                            <td class="border p-3 w-1/3">
                                <input v-model="prodProp.nameProp" type="text"
                                    class="w-1/2 text-gray-500 border border-gray-500 outline-none rounded p-2"
                                    placeholder="nhập tên thuộc tính">
                            </td>
                            <td class="border p-3 w-2/3">
                                <input v-model="prodProp.valueProp" type="text"
                                    class=" text-gray-500 border border-gray-500 outline-none rounded p-2"
                                    placeholder="nhập giá trị thuộc tính">
                                <button class="rounded text-white bg-green-500 p-2 uppercase text-sm font-semibold ml-3"
                                    @click="addProductProp">Thêm</button>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>


        <div class="w-1/3 flex gap-x-3">
            <button class="text-white rounded py-1 px-4 flex items-center" @click="toggleProductProp" :class="{
                'bg-red-500': !hiddenAddProdPropBox,
                'bg-green-500': hiddenAddProdPropBox,
            }">
                <IconPlus :class="{ hidden: !hiddenAddProdPropBox }" />
                <IconMinus :class="{ hidden: hiddenAddProdPropBox }" />
                thuộc tính
            </button>
            <button class="text-white bg-green-500 rounded py-1 px-4 flex items-center text-sm"
                @click="toggleProductDetail">
                <IconPlus />ảnh mô tả
            </button>
        </div>
        <div class="border border-green-500 rounded p-4 flex flex-col gap-y-3" :class="{ hidden: hiddenAddProdDetailBox }">
            <div class="flex">
                <div class="w-1/3 text-red-500">Link ảnh mô tả:</div>
                <input v-model="prodDetail.picture" type="text" placeholder="nhập link ảnh mô tả"
                    class="w-2/3 text-gray-500 border border-gray-500 outline-none rounded p-2">
            </div>
            <div class="flex mx-auto w-1/6">
                <button class="w-1/2 border rounded text-white bg-green-500" @click="addProductDetail">Thêm</button>
                <button class="w-1/2 border rounded text-white bg-sky-500">Reset</button>
            </div>
        </div>
        <div class="flex gap-x-3">
            <button class="text-white bg-orange-500 rounded py-1 px-4" @click="editProduct">Cập nhật sản phẩm</button>
            <button class="text-gray-600 border border-gray-600 rounded py-1 px-4" @click="useRouter().back()">Trở
                lại</button>
        </div>

        <!-- image -->
        <div class="flex flex-col text-gray-500">
            <div class="flex">
                <div class="w-full border bg-gray-400 text-white p-2">Ảnh mô tả cho sản phẩm</div>
            </div>
            <div class="flex flex-wrap border border-t-0">
                <div class="w-1/5 flex flex-col justify-center items-center p-3 gap-y-3 border-r border-b border-dashed"
                    v-for="item in items" :id="item.id">
                    <img :src="item.picture" alt="">
                    <div class="flex gap-x-3">
                        <NuxtLink :to="`/admin/product/${product.result.id}/edit/${item.id}`"
                            class="text-white bg-orange-500 p-1 rounded h-fit">Sửa</NuxtLink>
                        <NuxtLink :to="`/admin/product/${product.result.id}/remove/${item.id}`"
                            class="text-white bg-red-500 p-1 rounded h-fit">Xóa</NuxtLink>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script setup>
definePageMeta({
    layout: 'admin', middleware: 'auth-admin',
})

const idProd = useRoute().params.id;
const { $objstring } = useNuxtApp();

const hiddenAddProdDetailBox = ref(true);
const hiddenAddProdPropBox = ref(true);

const { data: product } = await useFetch('http://localhost:3000/api/products/' + idProd);

const { data: categories } = await useFetch('http://localhost:3000/api/category');

const { data: suppliers } = await useFetch('http://localhost:3000/api/suppliers');

const { data: productDetails } = await useFetch('http://localhost:3000/api/productdetails', {
    method: 'GET',
    query: {
        product: idProd
    }
});

const items = ref([])
items.value = productDetails.value.result.map((item) => {
    return {
        id: item.id,
        picture: item.picture
    }
})

const toggleProductDetail = () => {
    hiddenAddProdDetailBox.value = !hiddenAddProdDetailBox.value;
}

const toggleProductProp = () => {
    hiddenAddProdPropBox.value = !hiddenAddProdPropBox.value;
}

const prodProp = ref({
    nameProp: '',
    valueProp: '',
    productId: idProd
})

const prodDetail = ref({
    picture: '/img/default.jpg',
    productId: idProd
})

const { data: itemProps } = await useFetch('http://localhost:3000/api/productprops', {
    method: 'GET',
    query: {
        product: idProd
    }
})

const addProductProp = async () => {
    await useFetch('http://localhost:3000/api/productprops/', {
        method: 'POST',
        body: $objstring(prodProp.value),
        watch: false,
        onResponse: ({ response }) => {
            if (response.ok) {
                alert('Thêm thành công');
                const item = response._data.result;
                itemProps.value.result.push({
                    nameProp: item.nameProp,
                    valueProp: item.valueProp
                })
                // thêm hàng mới có giá trị item.name và item.value
            } else {
                alert('Thêm thất bại')
            }
        }
    })
}

const addProductDetail = async () => {

    await useFetch('http://localhost:3000/api/productdetails/', {
        method: 'POST',
        body: $objstring(prodDetail.value),
        watch: false,
        onResponse: ({ response }) => {
            if (response.ok) {
                alert('Add success');
                const item = response._data.result;
                items.value.unshift({
                    id: item.id,
                    picture: item.picture,
                })
                // useRouter().back()
            } else {
                alert('Add failed')
            }
        }
    })
}

const editProduct = async () => {
    const formData = ref({
        name: product.value.result.name,
        description: product.value.result.description,
        picture: product.value.result.picture,
        price: product.value.result.price,
        discount: product.value.result.discount,
        discount_available: product.value.result.discountAvailable,
        product_available: product.value.result.productAvailable,
        supplier_id: product.value.result.supplierId,
        category_id: product.value.result.categoryId,
        is_trending: product.value.result.isTrending,
        is_flashsale: product.value.result.isFlashsale,
        qty: product.value.result.qty
    });

    await useFetch('http://localhost:3000/api/products/' + idProd, {
        method: 'PATCH',
        body: $objstring(formData.value),
        watch: false,
        onResponse: ({ response }) => {
            if (response.ok) {
                alert('Cập nhật sản phẩm thành công');
                // useRouter().back()
            } else {
                alert('Cập nhật sản phẩm thất bại')
            }
        }
    })
}

</script>