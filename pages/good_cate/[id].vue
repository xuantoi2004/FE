<template>
    <div class="flex my-3 text-sm items-center gap-x-3">
        <NuxtLink to="/" class="uppercase flex items-center gap-x-2">
            <IconHome /> Trang Chủ
        </NuxtLink> &rArr; <span class="uppercase">{{ goodCate.result.goodName }}</span>
    </div>
    <div class="flex">
        <div class="w-1/4 bg-white p-4 shadow-sm">
            <div class="border-b border-gray-300 flex flex-col pb-2">
                <div class="font-bold text-sm uppercase">Chuyên mục sản phẩm</div>
                <div class="p-2 border-b border-dashed last:border-0" v-for="category in categories.result"
                    :id="category.id">
                    <NuxtLink :to="'/category/' + category.id">{{ category.categoryName }}</NuxtLink>
                </div>
            </div>

            <!-- Sort -->
            <!-- <div class="border-b border-gray-300 flex flex-col pb-2 mt-2">
                <div class="font-bold text-sm mb-2">GIÁ</div>
                <ul class="flex flex-col p-2">
                    <li class="flex justify-between">
                        <input type="checkbox" name="" id="">
                        <div>0đ - 150,000đ</div>
                    </li>
                    <li class="flex justify-between">
                        <input type="checkbox" name="" id="">
                        <div>150,000đ - 350,000đ</div>
                    </li>
                    <li class="flex justify-between">
                        <input type="checkbox" name="" id="">
                        <div>350,000đ - Trở lên</div>
                    </li>
                </ul>
            </div> -->

            <!-- <div class="border-b border-gray-300 flex flex-col pb-2 mt-2">
                <div class="font-bold text-sm mb-2">HÌNH THỨC</div>
                <ul class="flex flex-col p-2">
                    <li class="flex justify-between">
                        <input type="checkbox" name="" id="">
                        <div>Bìa Mềm</div>
                    </li>
                    <li class="flex justify-between">
                        <input type="checkbox" name="" id="">
                        <div>Bìa Cứng</div>
                    </li>
                    <li class="flex justify-between">
                        <input type="checkbox" name="" id="">
                        <div>Bộ Hộp</div>
                    </li>
                </ul>
            </div> -->

            <!-- <div class="border-b border-gray-300 flex flex-col pb-2 mt-2">
                <div class="font-bold text-sm mb-2 uppercase">Ngôn Ngữ</div>
                <ul class="flex flex-col p-2">
                    <li class="flex justify-between">
                        <input type="checkbox" name="" id="">
                        <div>Tiếng Việt</div>
                    </li>
                    <li class="flex justify-between">
                        <input type="checkbox" name="" id="">
                        <div>Tiếng Anh</div>
                    </li>
                </ul>
            </div> -->

        </div>
        <div class="w-3/4 bg-white flex flex-col ml-2 p-4 shadow-sm">
            <div class="border-b border-gray-300 pb-4 mb-2 px-2">
                Sắp xếp theo:
                <select class="border rounded-lg px-5 py-2 mr-2">
                    <option value="">
                        Bán Chạy Tuần
                    </option>
                </select>
                <select class="border rounded-lg px-5 py-2" v-model="lengthProduct">
                    <option v-for="length in lengthArr" :value="length">
                        {{ length }} sản phẩm
                    </option>
                </select>
            </div>
            <div class="flex flex-wrap">
                <div class="w-1/4 flex flex-col" v-for="product in products.result" :id="product.id">
                    <ItemTrending :isFlashSale="false" :product="product" />
                </div>
            </div>
        </div>
    </div>
</template>
<script setup>
const lengthProduct = ref(24);
const lengthArr = ref([24,16,8,4,2])
const idGoodCate = useRoute().params.id;
const { data: goodCate } = await useFetch('http://localhost:3000/api/goods-category/' + idGoodCate);
const { data: categories } = await useFetch('http://localhost:3000/api/category', {
    method: 'GET',
    query: {
        goodCateId: idGoodCate
    }
})
const { data: products } = await useFetch('http://localhost:3000/api/products', {
    method: 'GET',
    query: {
        goodCateId: idGoodCate,
        limit: lengthProduct
    }
})

</script>