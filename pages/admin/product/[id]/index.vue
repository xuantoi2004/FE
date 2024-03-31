<template>
    <!-- <Adminproduct.value.resultBreadCrumb /> -->
    <div class="flex flex-col gap-y-5 p-5 rounded-lg bg-white shadow-xl w-full mx-auto">
        <div class="flex flex-col gap-y-5">
            <div class="text-sm font-bold text-gray-700 uppercase">Thông tin sản phẩm: {{ product.result.name }}</div>

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
                            <td class="border p-3 w-2/3">{{ product.result.supplier.name }}</td>
                        </tr>
                        <tr class="text-gray-600">
                            <td class="border p-3 w-1/3">Danh mục</td>
                            <td class="border p-3 w-2/3">{{ product.result.category.categoryName }}</td>
                        </tr>
                        <tr class="text-gray-600">
                            <td class="border p-3 w-1/3">Tên sản phẩm</td>
                            <td class="border p-3 w-2/3">{{ product.result.name }}</td>
                        </tr>
                        <tr class="text-gray-600">
                            <td class="border p-3 w-1/3">Mô tả</td>
                            <td class="border p-3 w-2/3">{{ product.result.description }}</td>
                        </tr>
                        <tr class="text-gray-600">
                            <td class="border p-3 w-1/3">Số lượng</td>
                            <td class="border p-3 w-2/3">{{ product.result.qty }}</td>
                        </tr>
                        <tr class="text-gray-600">
                            <td class="border p-3 w-1/3">Giá</td>
                            <td class="border p-3 w-2/3">{{ product.result.price.toLocaleString() }} đ</td>
                        </tr>
                        <tr class="text-gray-600">
                            <td class="border p-3 w-1/3">Giảm giá</td>
                            <td class="border p-3 w-2/3">{{ product.result.discountAvailable ?
                                'Có' : 'Không' }}</td>
                        </tr>
                        <tr class="text-gray-600">
                            <td class="border p-3 w-1/3">% giảm giá</td>
                            <td class="border p-3 w-2/3">{{ product.result.discount }} %</td>
                        </tr>
                        <tr class="text-gray-600">
                            <td class="border p-3 w-1/3">Flashsale</td>
                            <td class="border p-3 w-2/3">{{ product.result.isFlashsale ? 'Có' : 'Không' }}</td>
                        </tr>
                        <tr class="text-gray-600">
                            <td class="border p-3 w-1/3">Trending</td>
                            <td class="border p-3 w-2/3">{{ product.result.isTrending ? 'Có' : 'Không' }}</td>
                        </tr>
                        <tr class="text-gray-600">
                            <td class="border p-3 w-1/3">Có sẵn</td>
                            <td class="border p-3 w-2/3">{{ product.result.productAvailable ? 'Có' : 'Không' }}</td>
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
            <NuxtLink :to="'/admin/product/edit/'+product.result.id" class="text-white bg-orange-500 py-1 px-4 rounded">Sửa sản phẩm</NuxtLink>
            <button class="text-gray-600 border border-gray-600 rounded py-1 px-4" @click="useRouter().back()">quay
                lại</button>
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
        <div class="flex flex-col text-gray-500">
            <div class="flex">
                <div class="w-full border bg-gray-400 text-white p-2">Ảnh mô tả cho sản phẩm: </div>
            </div>
            <div class="flex border border-t-0 flex-wrap">
                <div class="w-1/5 border-r border-dashed p-2">
                    <img :src="product.result.picture" alt="">
                </div>
                <div v-for="item in items" :id="item.id" class="w-1/5 border-r border-dashed p-2">
                    <img :src="item.picture" alt="">
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
const config = useRuntimeConfig();

const hiddenAddProdDetailBox = ref(true);
const hiddenAddProdPropBox = ref(true);

const { data: product } = await useFetch('/products/' + idProd,{
    baseURL: config.public.apiBase
});

const { data: productDetails } = await useFetch('/productdetails', {
    baseURL: config.public.apiBase,
    method: 'GET',
    query: {
        product: idProd
    }
});

const headers = ref([
    { text: "Ảnh", value: "picture", sortable: true },
])

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
    nameDetail: '',
    price: 0,
    discount: 0,
    discountAvailable: false,
    picture: '/img/default.jpg',
    qty: 1,
    productId: idProd
})

const {data: itemProps} = await useFetch('/productprops',{
    baseURL: config.public.apiBase,
    method: 'GET',
    query: {
        product: idProd
    },
    pick: ['result']
})

const addProductProp = async () => {
    await useFetch('/productprops/', {
        baseURL: config.public.apiBase,
        method: 'POST',
        body: $objstring(prodProp.value),
        watch: false,
        onResponse: ({ response }) => {
            if (response.ok) {
                alert('Add success');
                const item = response._data.result;
                itemProps.value.result.push({
                    nameProp: item.nameProp,
                    valueProp: item.valueProp
                })
                // thêm hàng mới có giá trị item.name và item.value
            } else {
                alert('Add failed')
            }
        }
    })
}

const addProductDetail = async () => {

    await useFetch('/productdetails/', {
        baseURL: config.public.apiBase,
        method: 'POST',
        body: $objstring(prodDetail.value),
        watch: false,
        onResponse: ({ response }) => {
            if (response.ok) {
                alert('Add success');
                const item = response._data.result;
                items.value.unshift({
                    id: item.id,
                    nameDetail: item.nameDetail,
                    picture: item.picture,
                    price: item.price,
                    discount: item.discount,
                    qty: item.qty
                })
                // useRouter().back()
            } else {
                alert('Add failed')
            }
        }
    })
}

</script>