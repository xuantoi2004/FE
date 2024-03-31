<template>
    <div class="flex my-3 text-sm items-center gap-x-3">
        <NuxtLink to="/" class="uppercase flex items-center gap-x-2">
            <IconHome /> Trang Chủ
        </NuxtLink> &rArr; <NuxtLink :to="'/good_cate/' + category.result.goodCategory.id" class="uppercase">{{
            category.result.goodCategory.goodName }}</NuxtLink> > <span class="uppercase">{{ category.result.categoryName
    }}</span>
    </div>
    <div class="flex">
        <div class="w-2/12 bg-white p-4 shadow-sm">
            <!-- <div class="border-b border-gray-300 flex flex-col pb-2">
                <div class="font-bold text-sm">NHÓM SẢN PHẨM</div>
                <div class="p-2">
                    Manga
                </div>
            </div> -->

            <!-- Sort -->
            <div class="border-b border-gray-300 flex flex-col pb-2 mt-2">
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
            </div>

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
            </div>

            <div class="border-b border-gray-300 flex flex-col pb-2 mt-2">
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
        <div class="w-10/12 bg-white flex flex-col ml-2 p-4 shadow-sm">
            <div class="border-b border-gray-300 pb-4 mb-2 px-2">
                Sắp xếp theo:
                <select name="" id="" class="border rounded-lg px-5 py-2 mr-2">
                    <option value="">
                        Bán Chạy Tuần
                    </option>
                </select>
                <select name="" id="" class="border rounded-lg px-5 py-2">
                    <option value="">
                        24 sản phẩm
                    </option>
                </select>
            </div>
            <div class="flex flex-wrap">
                <div class="w-1/4 flex flex-col" v-for="product in products.result" :id="product.id">
                    <ItemTrending :product="product" :isFlashSale="false" />
                </div>
            </div>
        </div>
    </div>
</template>
<script setup>
const idCate = useRoute().params.id;
const { data: category } = await useFetch('http://localhost:3000/api/category/' + idCate);
const { data: products } = await useFetch('http://localhost:3000/api/products', {
    method: 'GET',
    query: {
        categoryId: idCate
    }
})
</script>