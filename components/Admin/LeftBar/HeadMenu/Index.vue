<template>
    <NuxtLink to="/admin" class="flex justify-between items-center py-2 bg-gray-200 px-5">
        <div class="w-3/5 flex">
            <IconHome class="text-gray-500" />
            <div class="ml-2 text-gray-500 font-semibold uppercase text-sm items-center flex">
                Tổng quan
            </div>
        </div>
        <div class="w-1/5 flex items-center">
            <div class="bg-green-400 text-white rounded-lg p-1 text-xs ml-auto">New</div>
        </div>
    </NuxtLink>
    <AdminLeftBarHeadMenuItem />
    
</template>