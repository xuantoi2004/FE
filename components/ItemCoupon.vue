<template>
    <div class="flex bg-white shadow-lg">
        <div class="p-2 border rounded-s-lg w-1/5 relative">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 104.554 125.395"
                class="cart2-svg-icon">
                <path id="Frame_icon_web"
                    d="M95.424,124.4H47.593l-33.592,0a12,12,0,0,1-12-12V12A12,12,0,0,1,14,0H80.785l.255,0H95.424a10.364,10.364,0,0,0,10.129,10.165l-.005,4.374a2.907,2.907,0,1,0,0,5.813v2.324a2.907,2.907,0,1,0,0,5.814v2.324a2.907,2.907,0,0,0-2.06.852,2.874,2.874,0,0,0-.855,2.05,2.917,2.917,0,0,0,2.915,2.912v2.324a2.907,2.907,0,0,0-2.06.852,2.874,2.874,0,0,0-.855,2.05,2.917,2.917,0,0,0,2.915,2.911v2.324a2.906,2.906,0,0,0-2.06.852,2.876,2.876,0,0,0-.855,2.051,2.912,2.912,0,0,0,2.915,2.9V55.22a2.907,2.907,0,1,0,0,5.813v2.324a2.907,2.907,0,1,0,0,5.813V71.5a2.907,2.907,0,0,0-2.06.852,2.874,2.874,0,0,0-.855,2.05,2.917,2.917,0,0,0,2.915,2.912v2.324a2.906,2.906,0,0,0-2.06.852,2.876,2.876,0,0,0-.855,2.051,2.912,2.912,0,0,0,2.915,2.9v2.324a2.907,2.907,0,1,0,0,5.814V95.9a2.907,2.907,0,1,0,0,5.814v2.324a2.906,2.906,0,0,0-2.06.852,2.876,2.876,0,0,0-.855,2.051,2.916,2.916,0,0,0,2.915,2.911l0,3.987A10.328,10.328,0,0,0,95.423,124.2c0,.065,0,.131,0,.2h0Z"
                    transform="translate(-1.501 0.499)" fill="currentColor" stroke="rgba(0,0,0,0)" stroke-miterlimit="10"
                    stroke-width="1"></path>
            </svg>
            <IconPercent v-if="icon == 1" class="absolute top-6 left-6 text-white" />
            <IconTruck v-else-if="icon == 2" class="absolute top-6 left-6 text-white" />
            <IconCreditCard v-else class="absolute top-6 left-6 text-white" />
        </div>
        <div class="p-2 border rounded-e-lg flex w-4/5">
            <div class="flex flex-col">
                <div class="text-black font-semibold">
                    MÃ GIẢM 10K - ĐƠN HÀNG TỪ 150K
                </div>
                <div class="text-gray-400 text-sm">
                    Không Áp Dụng Cho Phiếu Quà Tặng
                </div>
            </div>
            <div class="border-l border-dashed pl-2">
                <a href="#" class="text-blue-500 text-xs">Chi tiết</a>
            </div>
        </div>

    </div>
</template>
<script setup>

    const props = defineProps({
        icon: {
            type: Number,
            default: 1
        }
    })
</script>