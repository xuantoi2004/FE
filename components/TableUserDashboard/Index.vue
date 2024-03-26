<template>
    <div class="w-2/3 flex flex-col shadow-xl pb-5 rounded-lg gap-y-3">
        <div class="flex bg-gray-700 rounded-t-lg p-5">
            <div class="w-1/4 text-sm font-semibold">
                USER
            </div>
            <div class="w-1/4 text-sm font-semibold">
                EMAIL
            </div>
            <div class="w-1/4 text-sm font-semibold text-right">
                ROLE
            </div>
            <div class="w-1/4 text-sm font-semibold text-right">
                STATUS
            </div>
        </div>
        <TableUserDashboardItem />
        <TableUserDashboardItem />
        
    </div>
</template>