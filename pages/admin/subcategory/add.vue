<template>
    <div class="flex flex-col gap-y-5 p-5 rounded-lg border border-gray-600 w-1/2">
        <div class="text-lg font-semibold">Thêm Chuyên Mục Con Mới</div>
        <div class="flex flex-col gap-y-3">
            <div class="flex items-center">
                <div class="w-1/3 text-gray-400 font-semibold after:content-[':'] after:ml-1.5">Tên chuyên mục</div>
                <input type="text" name="" id="" placeholder="nhập tên" class="w-2/3 px-2 py-2.5 border-gray-600 rounded-lg border-2 outline-none  bg-admin placeholder:capitalize focus:border-red-500">
            </div>
            <div class="flex items-center">
                <div class="w-1/3 text-gray-400 font-semibold after:content-[':'] after:ml-1.5">Mô tả</div>
                <textarea name="" id="" placeholder="nhập mô tả" class="w-2/3 px-2 py-2.5 border-gray-600 rounded-lg border-2 outline-none  bg-admin placeholder:capitalize focus:border-red-500"></textarea>
            </div>
            <div class="flex items-center">
                <div class="w-1/3 text-gray-400 font-semibold after:content-[':'] after:ml-1.5">Từ khóa SEO</div>
                <input type="text" name="" id="" placeholder="nhập keyword seo" class="w-2/3 px-2 py-2.5 border-gray-600 rounded-lg border-2 outline-none  bg-admin placeholder:capitalize focus:border-red-500">
            </div>
            <div class="flex items-center">
                <div class="w-1/3 text-gray-400 font-semibold after:content-[':'] after:ml-1.5">Đường dẫn tùy chọn</div>
                <input type="text" name="" id="" placeholder="nhập đường dẫn" class="w-2/3 px-2 py-2.5 border-gray-600 rounded-lg border-2 outline-none  bg-admin placeholder:capitalize focus:border-red-500">
            </div>
        </div>
        <div class="flex flex-col gap-y-3">
            <div class="w-2/3 ml-auto flex gap-x-3">
                <input type="checkbox" name="" id="" class="border outline-none bg-red-500">
                <div class="text-gray-400 text-lg">Remember me</div>
            </div>
            <div class="w-2/3 flex ml-auto gap-x-3">
                <button class="text-white bg-red-500 rounded py-1 px-4 uppercase">Submit</button>
                <button class="text-gray-400 border border-gray-400 rounded py-1 px-4 uppercase">Reset</button>
            </div>
        </div>
    </div>
</template>
<script setup>
definePageMeta({
    layout: 'admin', middleware: 'auth-admin',
})
</script>