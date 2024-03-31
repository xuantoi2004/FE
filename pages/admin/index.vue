<template>
    <div class="flex space-x-5">
        <div class="w-1/2 flex rounded-lg flex-col p-5 gap-y-3 h-fit bg-white shadow-lg">
            <div class="flex">
                <div class="flex flex-col">
                    <div class="font-bold text-lg text-gray-600">Sản Phẩm</div>
                </div>
                <IconThreeDot class="ml-auto" />
            </div>
            <div class="flex">
                <div class="flex items-center gap-x-4 w-1/3">
                    <div class="p-1.5 text-white-500 bg-red-500 rounded w-1/3">
                        <IconUser />
                    </div>
                    <div class="flex flex-col w-2/3">
                        <div class="font-semibold text-lg text-gray-500">{{ goodCates.result.length }}</div>
                        <div class="text-sm text-gray-400">Ngành hàng</div>
                    </div>
                </div>
                <div class="flex items-center gap-x-4 w-1/3 ">
                    <div class="p-1.5 text-white-500 bg-green-500 rounded">
                        <IconUser />
                    </div>
                    <div>
                        <div class="font-semibold text-lg text-gray-500">{{ categories.result.length }}</div>
                        <div class="text-sm text-gray-400">Danh mục</div>
                    </div>
                </div>
                <div class="flex items-center gap-x-4 w-1/3">
                    <div class="p-1.5 text-white-500 bg-blue-500 rounded">
                        <IconUser />
                    </div>
                    <div>
                        <div class="font-semibold text-lg text-gray-500">{{ products.result.length }}</div>
                        <div class="text-sm text-gray-400">Sản phẩm</div>
                    </div>
                </div>
            </div>

        </div>
        <div class="w-1/2 flex shadow-lg bg-white rounded-lg flex-col p-5 gap-y-3 h-fit">
            <div class="flex">
                <div class="flex flex-col">
                    <div class="font-bold text-lg text-gray-600">Người dùng</div>
                    <!-- <div class="text-gray-400 text-sm">
                        Total 42.5k Sales <span class="text-green-400">+18%</span>
                    </div> -->
                </div>
                <IconThreeDot class="ml-auto" />
            </div>
            <div class="flex">
                <div class="flex items-center gap-x-4 w-1/3">
                    <div class="p-1.5 text-white-500 bg-red-500 rounded">
                        <IconUser />
                    </div>
                    <div>
                        <div class="font-semibold text-lg text-gray-500">{{ suppliers.result.length }}</div>
                        <div class="text-sm text-gray-400">Nhà cung cấp</div>
                    </div>
                </div>
                <div class="flex items-center gap-x-4 w-1/3">
                    <div class="p-1.5 text-white-500 bg-green-500 rounded">
                        <IconUser />
                    </div>
                    <div>
                        <div class="font-semibold text-lg text-gray-500">{{ customers.result.length }}</div>
                        <div class="text-sm text-gray-400">Người dùng</div>
                    </div>
                </div>
                <div class="flex items-center gap-x-4 w-1/3">
                    <div class="p-1.5 text-white-500 bg-blue-500 rounded">
                        <IconUser />
                    </div>
                    <div>
                        <div class="font-semibold text-lg text-gray-500">{{ customers.result.filter(item => item.isAdmin).length }}</div>
                        <div class="text-sm text-gray-400">Admin</div>
                    </div>
                </div>
            </div>

        </div>
    </div>
    <!-- <div class="flex space-x-5">
        <div class="w-1/2 flex shadow-xl rounded-lg flex-col p-5 gap-y-3 bg-red-500">
        </div>
        <div class="w-1/2 flex space-x-5">
            <div class="w-1/2 flex flex-col shadow-xl bg-white rounded-lg p-5">
                <div class="flex">
                    <div class="w-1/2">
                        <div class="text-lg font-bold text-gray-600">Total Visits</div>
                        <div class="text-lg font-bold text-gray-500">42.5k</div>
                    </div>
                    <div class="w-1/2 text-green-500 text-right">
                        +18.2%
                    </div>
                </div>
                <div class="flex">
                    <div class="w-1/2">
                        Mobile
                    </div>
                    <div class="w-1/2">
                        Desktop
                    </div>
                </div>
            </div>
            <div class="w-1/2 flex flex-col shadow-xl bg-white rounded-lg px-5 pt-5">
                <div class="text-lg font-bold text-gray-600">Sales this month</div>
                <div>Total sale this month</div>
                <div class="text-lg font-semibold">$28,000</div>
            </div>
        </div>
    </div> -->
    <!-- <div class="flex space-x-5">
        <ActivityTimeline />
        <TopReferralSource />
    </div> -->
    <!-- <div class="flex space-x-5">
        <div class="w-2/3 flex gap-x-5">
            <div class="w-2/5 shadow-xl bg-white rounded-lg flex flex-col h-fit">
                <div class="flex p-5">
                    <div class="w-1/3">
                        <IconPhone class="text-red-500" />
                    </div>
                    <div class="flex flex-col w-2/3">
                        <div class="font-bold text-lg">
                            84K -24%
                        </div>
                        <div class="text-gray-400">Total Impressions</div>
                    </div>
                </div>
                <div class="flex p-5 border-t border-gray-500">
                    <div class="w-1/3">
                        <IconPhone />
                    </div>
                    <div class="flex flex-col w-2/3">
                        <div class="font-bold text-lg">
                            84K -24%
                        </div>
                        <div class="text-gray-400">Total Impressions</div>
                    </div>
                </div>
            </div>
            <div class="w-3/5 flex shadow-xl bg-white p-5 rounded-lg flex-col gap-y-3">
                <div class="flex flex-col gap-y-1">
                    <div class="font-bold text-lg">Marketing & Sales</div>
                    <div class="text-sm text-gray-400">Total 245.8k Sales <span class="text-green-600">+25%</span>
                    </div>
                </div>
                <div class="flex gap-x-3">
                    <div class="w-1/3">
                        <img src="/img/logocty.png" class="rounded-lg" alt="">
                    </div>
                    <div class="w-2/3 flex flex-col gap-y-3">
                        <div class="text-lg">Sales Overview</div>
                        <div class="flex flex-wrap gap-y-3">
                            <div class="w-1/2 flex gap-x-1 items-center">
                                <div class="bg-gray-500 px-2 py-0.5 rounded-lg">28</div>
                                <div class="text-sm text-gray-400">COGF</div>
                            </div>
                            <div class="w-1/2 flex gap-x-1 items-center">
                                <div class="bg-gray-500 px-2 py-0.5 rounded-lg">28</div>
                                <div class="text-sm text-gray-400">COGF</div>
                            </div>
                            <div class="w-1/2 flex gap-x-1 items-center">
                                <div class="bg-gray-500 px-2 py-0.5 rounded-lg">28</div>
                                <div class="text-sm text-gray-400">COGF</div>
                            </div>
                            <div class="w-1/2 flex gap-x-1 items-center">
                                <div class="bg-gray-500 px-2 py-0.5 rounded-lg">28</div>
                                <div class="text-sm text-gray-400">COGF</div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="flex gap-x-3">
                    <button class="bg-red-900 rounded-md py-0.5 px-3 text-red-500 opacity-90 uppercase">Details</button>
                    <button class="bg-red-700 rounded-md py-0.5 px-3 uppercase">Report</button>
                </div>
            </div>
        </div>
        <div class="w-1/3 flex flex-col shadow-xl bg-white rounded-lg p-5">
            <div class="flex">
                <div>
                    <div class="font-bold text-lg">Live Visitors</div>
                    <div class="text-sm text-gray-400">Total 890 Visitors Are Live</div>
                </div>
                <div class="ml-auto text-green-500">+78.2%</div>
            </div>

        </div>

    </div> -->
    <!-- <div class="flex space-x-5">
        <TableUserDashboard />
        <div class="w-1/3 flex flex-col shadow-xl bg-white p-5 rounded-lg">
            <div class="flex flex-col">
                <div class="text-gray-500 font-semibold">Visits by Day</div>
                <div class="text-sm text-gray-400">Total 248.5k Visits</div>
            </div>
            <div></div>
            <div class="flex items-center">
                <div class="flex flex-col">
                    <div class="text-gray-500 font-semibold">Most Visited Day</div>
                    <div class="text-sm text-gray-400">Total 62.4k Visits on Thursday</div>
                </div>
                <div class="ml-auto bg-red-400 opacity-90 text-white p-1 rounded text-center">
                    <IconRight />
                </div>
            </div>
        </div>
    </div> -->
    <div class="flex gap-x-5 ">
        <AdminItemTable :headers="headerInvoices" :items="itemInvoices" class="w-full bg-white shadow-md" :show-action="false" />
    </div>
    <div class="flex gap-x-5">
        <AdminItemTable :headers="headerProducts" :items="itemProducts" class="w-1/2 bg-white shadow-sm" :show-action="false" />
        <AdminItemTable :headers="headerCustomers" :items="itemCustomers" class="w-1/2 h-fit bg-white shadow-sm" :show-action="false" />
    </div>
</template>
<script setup>
definePageMeta({
    layout: 'admin',
    middleware: 'auth-admin'
})
const config = useRuntimeConfig();

const {data: suppliers} = await useFetch('/suppliers',{
    baseURL: config.public.apiBase
});
const {data: products} = await useFetch('/products', {
    baseURL: config.public.apiBase,
    method: 'GET',
    query: {
        limit: 6
    }
});
const {data: customers} = await useFetch('/customers',{
    baseURL: config.public.apiBase
});
const {data: goodCates} = await useFetch('/goods-category',{
    baseURL: config.public.apiBase
});
const {data: categories} = await useFetch('/category',{
    baseURL: config.public.apiBase
});


const headerInvoices = ref([
    { text: "Mã hóa đơn", value: "invoice_id" },
    { text: "Họ và tên", value: "full_name" },
    { text: "SĐT người đặt", value: "phone", sortable: true },
    { text: "Địa chỉ", value: "address", sortable: true },
    { text: "Người tạo", value: "user", sortable: true },
    { text: "Số đơn hàng", value: "qty", sortable: true },
    { text: "Tổng tiền", value: "total", sortable: true },
    { text: "Trạng thái", value: "status", sortable: true },
])

const {data: invoices} = await useFetch('/invoice',{
    baseURL: config.public.apiBase
});

const itemInvoices = ref([]);
itemInvoices.value = invoices.value.result.map(item => {
    return {
        id: item.id,
        invoice_id: '#'+item.id,
        full_name: item.full_name,
        phone: item.phone,
        address: item.address,
        user: item.customer.phone,
        qty: item.invoiceChild.length,
        total: item.total.toLocaleString()+ ' đ',
        status: item.status == 1 ? `<span class="bg-orange-500 text-white px-2 rounded">CHỜ DUYỆT</span>` :  item.status == 2 ? `<span class="bg-green-500 text-white px-2 rounded">ĐÃ DUYỆT</span>` : `<span class="bg-red-500 text-white px-2 rounded">TỪ CHỐI</span>`
    }
})

const headerCustomers = ref([
    { text: "Ảnh đại diện", value: "avatar" },
    { text: "Họ và tên", value: "full_name" },
    { text: "SĐT", value: "phone", sortable: true },
    { text: "Email", value: "email", sortable: true },
])

const itemCustomers = ref([]);
itemCustomers.value = customers.value.result.map(item => {
    return {
        avatar: `<img src="${item.avatar}" class="w-1/5 mx-auto">`,
        full_name: item.firstName + ' ' + item.lastName,
        phone: item.phone,
        email: item.email,
        id: item.id
    }
})

const headerProducts = ref([
    { text: "Tên sản phẩm", value: "name" },
    { text: "Ảnh đại diện", value: "picture", sortable: true },
    { text: "Giá", value: "price", sortable: true },
    { text: "Số lượng", value: "qty", sortable: true },
])

const itemProducts = ref([])
itemProducts.value = products.value.result.map((item) => {
    return {
        id: item.id,
        name: item.name,
        picture: `<img src='${item.picture}' class="w-1/5 mx-auto"/>`,
        qty: item.qty,
        price: item.price.toLocaleString() + ' đ',
    }
})

</script>