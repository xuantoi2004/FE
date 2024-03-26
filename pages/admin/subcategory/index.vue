<template>
    <div class="flex gap-x-5">
        <div class="flex flex-col w-2/5 gap-y-5">
            <div class="flex border border-gray-500 rounded-lg flex-col p-5 gap-y-3 h-fit">
                <div class="flex">
                    <div class="flex flex-col">
                        <div class="font-bold text-lg capitalize">Thống kê</div>
                        <div class="text-gray-400 text-sm">Đã bán 10k đơn <span class="text-green-400">+18%</span>
                        </div>
                    </div>
                    <IconThreeDot class="ml-auto" />
                </div>
                <div class="flex">
                    <div class="flex items-center gap-x-4 w-1/3">
                        <div class="p-1.5 text-white-500 bg-red-500 rounded">
                            <IconUser />
                        </div>
                        <div>
                            <div class="font-semibold text-lg">100</div>
                            <div class="text-sm text-gray-400">Danh mục</div>
                        </div>
                    </div>
                    <div class="flex items-center gap-x-4 w-1/3">
                        <div class="p-1.5 text-white-500 bg-green-500 rounded">
                            <IconUser />
                        </div>
                        <div>
                            <div class="font-semibold text-lg">200</div>
                            <div class="text-sm text-gray-400">Danh mục con</div>
                        </div>
                    </div>
                    <div class="flex items-center gap-x-4 w-1/3">
                        <div class="p-1.5 text-white-500 bg-sky-500 rounded">
                            <IconUser />
                        </div>
                        <div>
                            <div class="font-semibold text-lg ">3000</div>
                            <div class="text-sm text-gray-400">Sản phẩm</div>
                        </div>
                    </div>
                </div>

            </div>
            <div class="flex flex-col gap-y-5 p-5 rounded-lg border border-gray-600">
                <div class="text-lg font-semibold capitalize" id="add">Thêm danh Mục Con</div>
                <div class="flex flex-col gap-y-3">
                    <div class="flex items-center">
                        <div class="w-1/3 text-gray-400 font-semibold after:content-[':'] after:ml-1.5">Chọn danh mục cha
                        </div>
                        <select
                            class="w-2/3 px-2 py-2.5 border-gray-600 rounded-lg border-2 outline-none  bg-admin text-gray-400 ">
                            <option value="1">Sách</option>
                            <option value="1">Truyện</option>
                            <option value="1">Vở</option>
                        </select>
                    </div>
                    <div class="flex items-center">
                        <div class="w-1/3 text-gray-400 font-semibold after:content-[':'] after:ml-1.5">Tên danh mục</div>
                        <input type="text" name="" id="" placeholder="nhập tên"
                            class="w-2/3 px-2 py-2.5 border-gray-600 rounded-lg border-2 outline-none  bg-admin placeholder:lowercase focus:border-red-500">
                    </div>
                    <div class="flex items-center">
                        <div class="w-1/3 text-gray-400 font-semibold after:content-[':'] after:ml-1.5">Mô tả</div>
                        <textarea name="" id="" placeholder="nhập mô tả"
                            class="w-2/3 px-2 py-2.5 border-gray-600 rounded-lg border-2 outline-none  bg-admin placeholder:lowercase focus:border-red-500"></textarea>
                    </div>
                    <div class="flex items-center">
                        <div class="w-1/3 text-gray-400 font-semibold after:content-[':'] after:ml-1.5">Từ khóa SEO</div>
                        <input type="text" name="" id="" placeholder="nhập keyword seo"
                            class="w-2/3 px-2 py-2.5 border-gray-600 rounded-lg border-2 outline-none  bg-admin placeholder:lowercase focus:border-red-500">
                    </div>
                    <div class="flex items-center">
                        <div class="w-1/3 text-gray-400 font-semibold after:content-[':'] after:ml-1.5">Đường dẫn tùy chọn
                        </div>
                        <input type="text" name="" id="" placeholder="nhập đường dẫn"
                            class="w-2/3 px-2 py-2.5 border-gray-600 rounded-lg border-2 outline-none  bg-admin placeholder:lowercase focus:border-red-500">
                    </div>
                </div>
                <div class="flex flex-col gap-y-3">
                    <div class="w-2/3 flex ml-auto gap-x-3">
                        <button class="text-white bg-green-600 rounded py-1 px-4 uppercase">Thêm</button>
                        <button class="text-gray-400 border border-gray-400 rounded py-1 px-4 uppercase">Reset</button>
                    </div>
                </div>
            </div>
        </div>
        <div class="w-3/5 flex flex-col gap-y-5">
            <div class="flex p-5 flex-col border border-gray-500 rounded-lg gap-y-3">
                <div class="font-bold text-lg capitalize">Tìm kiếm theo</div>
                <div class="flex gap-x-3">
                    <div class="w-1/3">
                        <select name="" id=""
                            class="border border-gray-500 px-2 py-2.5 rounded-lg bg-admin w-full appearance-none text-sm text-gray-400">
                            <option value="" disabled selected>Danh mục cha</option>
                            <option value="">Sách</option>
                            <option value="">Văn phòng phẩm</option>
                            <option value="">Điện thoại</option>
                        </select>
                    </div>
                    <div class="w-1/3 hidden">
                        <select name="" id=""
                            class="border border-gray-500 px-2 py-2.5 rounded-lg bg-admin w-full appearance-none text-sm text-gray-400">
                            <option value="">Select Plan</option>
                        </select>
                    </div>
                    <div class="w-1/3 hidden">
                        <select name="" id=""
                            class="border border-gray-500 px-2 py-2.5 rounded-lg bg-admin w-full appearance-none text-sm text-gray-400">
                            <option value="">Select Status</option>
                        </select>
                    </div>
                </div>
            </div>
            <div class="flex flex-col pt-5 border border-gray-500 rounded-md gap-y-5">
                <div class="flex px-5">
                    <div
                        class="border border-gray-500 px-4 py-2.5 text-gray-500 rounded text-sm hover:text-white hover:bg-sky-700 hover:border-none">
                        Export
                    </div>
                    <div class="ml-auto flex gap-x-5">
                        <input type="text"
                            class="border border-gray-500 bg-admin rounded px-4 py-2 focus:border-red-500 outline-none placeholder:text-sm"
                            placeholder="Tìm danh mục...">
                        <a href="#add" class="bg-red-500 text-white-500 px-4 py-2 rounded font-semibold">
                            Thêm danh mục
                        </a>
                    </div>
                </div>
                <AdminItemTable :headers="headers" :items="items" @changeSelect="changeSelect" />
            </div>
        </div>
    </div>
</template>
<script setup>
import { ref } from "vue";
definePageMeta({
    layout: 'admin', middleware: 'auth-admin',
})

const headers = ref([
    { text: "Tên", value: "name" },
    { text: "Danh mục con", value: "cateChildQty", sortable: true },
    { text: "sản phẩm", value: "prodQty", sortable: true },
    { text: "Đơn đã bán", value: "prodSoldQty", sortable: true }
])

const items = ([
    { id: 1, "name": "Tin Tức", "cateChildQty": 178, "prodQty": 77, "prodSoldQty": 20, isSelected: false },
    { id: 2, "name": "James", "cateChildQty": 180, "prodQty": 75, "prodSoldQty": 21, isSelected: false },
    { id: 3, "name": "Jordan", "cateChildQty": 181, "prodQty": 73, "prodSoldQty": 22, isSelected: false },
    { id: 1, "name": "Tin Tức", "cateChildQty": 178, "prodQty": 77, "prodSoldQty": 20, isSelected: false },
    { id: 2, "name": "James", "cateChildQty": 180, "prodQty": 75, "prodSoldQty": 21, isSelected: false },
    { id: 3, "name": "Jordan", "cateChildQty": 181, "prodQty": 73, "prodSoldQty": 22, isSelected: false },
    { id: 1, "name": "Tin Tức", "cateChildQty": 178, "prodQty": 77, "prodSoldQty": 20, isSelected: false },
    { id: 2, "name": "James", "cateChildQty": 180, "prodQty": 75, "prodSoldQty": 21, isSelected: false },
    { id: 3, "name": "Jordan", "cateChildQty": 181, "prodQty": 73, "prodSoldQty": 22, isSelected: false },
    { id: 1, "name": "Tin Tức", "cateChildQty": 178, "prodQty": 77, "prodSoldQty": 20, isSelected: false },
    { id: 2, "name": "James", "cateChildQty": 180, "prodQty": 75, "prodSoldQty": 21, isSelected: false },
    { id: 3, "name": "Jordan", "cateChildQty": 181, "prodQty": 73, "prodSoldQty": 22, isSelected: false },
    { id: 1, "name": "Tin Tức", "cateChildQty": 178, "prodQty": 77, "prodSoldQty": 20, isSelected: false },
    { id: 2, "name": "James", "cateChildQty": 180, "prodQty": 75, "prodSoldQty": 21, isSelected: false },
    { id: 3, "name": "Jordan", "cateChildQty": 181, "prodQty": 73, "prodSoldQty": 22, isSelected: false },
    { id: 1, "name": "Tin Tức", "cateChildQty": 178, "prodQty": 77, "prodSoldQty": 20, isSelected: false },
    { id: 2, "name": "James", "cateChildQty": 180, "prodQty": 75, "prodSoldQty": 21, isSelected: false },
    { id: 3, "name": "Jordan", "cateChildQty": 181, "prodQty": 73, "prodSoldQty": 22, isSelected: false },
    { id: 1, "name": "Tin Tức", "cateChildQty": 178, "prodQty": 77, "prodSoldQty": 20, isSelected: false },
    { id: 2, "name": "James", "cateChildQty": 180, "prodQty": 75, "prodSoldQty": 21, isSelected: false },
    { id: 3, "name": "Jordan", "cateChildQty": 181, "prodQty": 73, "prodSoldQty": 22, isSelected: false },
    { id: 1, "name": "Tin Tức", "cateChildQty": 178, "prodQty": 77, "prodSoldQty": 20, isSelected: false },
    { id: 2, "name": "James", "cateChildQty": 180, "prodQty": 75, "prodSoldQty": 21, isSelected: false },
    { id: 3, "name": "Jordan", "cateChildQty": 181, "prodQty": 73, "prodSoldQty": 22, isSelected: false },
    { id: 1, "name": "Tin Tức", "cateChildQty": 178, "prodQty": 77, "prodSoldQty": 20, isSelected: false },
    { id: 2, "name": "James", "cateChildQty": 180, "prodQty": 75, "prodSoldQty": 21, isSelected: false },
    { id: 3, "name": "Jordan", "cateChildQty": 181, "prodQty": 73, "prodSoldQty": 22, isSelected: false }
])

const changeSelect = (itemId, selectedValue) => {
    items.value = items.map(item =>
        item.id === itemId ? { ...item, isSelected: selectedValue } : item
    );
};


</script>