<template>
    <div
        class="min-h-screen flex-col space-y-4 font-bold h-screen overflow-y-auto sticky top-0 scroll-custom border-r border-gray-150">
        <div class="flex items-center sticky top-0 pt-5 pb-2 px-5 z-50 bg-admin">
            <div class="w-3/5">
                <NuxtLink to="/">
                    <!-- <img src="/img/logo.png" /> -->
                    <div class="text-gray-800 font-bold text-xl text-center"><img src="/img/logo_kingshoes.png" /> </div>

                </NuxtLink>
            </div>
            <IconCollapseLeft class="w-1/5 max-h-6 ml-auto" />
        </div>
        <AdminLeftBarHeadMenu class="px-2" />
        <AdminLeftBarItem v-model:dataRoute="dataRoute" />

    </div>
</template>
<script setup>
const route = useRoute();
let dataRoute = ref([
    {
        name: 'Nhà cung cấp',
        data: [
            {
                url: '/admin/supplier',
                name: 'Danh sách'
            },
            {
                url: '/admin/supplier/add',
                name: 'Thêm mới'
            }
        ]
    },
    {
        name: 'Ngành hàng',
        data: [
            {
                url: '/admin/goodcategory',
                name: 'Danh sách',
            },
            {
                url: '/admin/goodcategory/add',
                name: 'Thêm mới'
            }
        ]
    },
    {
        name: 'Danh mục',
        data: [
            {
                url: '/admin/category',
                name: 'Danh sách'
            },
            {
                url: '/admin/category/add',
                name: 'Thêm mới'
            }
        ]
    },
    {
        name: 'Sản phẩm',
        data: [
            {
                url: '/admin/product',
                name: 'Danh sách'
            },
            {
                url: '/admin/product/add',
                name: 'Thêm mới'
            }
        ]
    },
    {
        name: 'Người dùng',
        data: [
            {
                url: '/admin/customer',
                name: 'Danh sách'
            },
            {
                url: '/admin/customer/add',
                name: 'Thêm mới'
            }
        ]
    },
    {
        name: 'Hóa đơn',
        data: [
            {
                url: '/admin/invoice',
                name: 'Danh sách'
            }
        ]
    },
    // {
    //     name: 'Shipper',
    //     data: [
    //         {
    //             url: '/admin/shipper',
    //             name: 'Danh sách'
    //         },
    //         {
    //             url: '/admin/shipper/add',
    //             name: 'Thêm mới'
    //         }
    //     ]
    // },
    // {
    //     name: 'Hình thức thanh toán',
    //     data: [
    //         {
    //             url: '/admin/payment',
    //             name: 'Danh sách'
    //         },
    //         {
    //             url: '/admin/payment/add',
    //             name: 'Thêm mới'
    //         }
    //     ]
    // },
])

dataRoute.value = dataRoute.value.map(item => {
    item.data.forEach(data => {
        data.active = data.url === route.path;
    });
    return item;
});

watch(route, () => {
    dataRoute.value = dataRoute.value.map(item => {
        item.data.forEach(data => {
            data.active = data.url === route.path; // Update active state based on current route
        });
        return item;
    });
})


</script>
<style>
.scroll-custom::-webkit-scrollbar {
    width: 5px;
    /* Độ rộng của thanh scrollbar */
}

.scroll-custom::-webkit-scrollbar-thumb {
    background-color: #e5e7eb;
    /* Màu của thumb (phần kéo) */
    border-radius: 4px;
    /* Bo góc cho thumb */
}

.scroll-custom::-webkit-scrollbar-thumb:hover {
    background-color: #ccc;
    /* Màu của thumb khi hover */
}
</style>