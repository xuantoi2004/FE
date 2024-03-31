<template>
    <div class="flex my-3 text-sm items-center gap-x-3">
        <NuxtLink to="/" class="uppercase flex items-center gap-x-2">
            <IconHome /> Trang Chủ
        </NuxtLink> &rArr; FLASH SALE
    </div>
    <div class="flex bg-amber-400 w-full align-middle">
        <div class="flex items-center mr-2 font-bold p-2">
            <img src="/img/icon/flashsale.png" class="mr-2" alt=""> FLASH SALE
        </div>
        <div class="flex items-center border-l-2 border-gray-800 pl-2">
            <div class="font-semibold uppercase text-sm">Kết Thúc Trong</div>
            <div class="flex items-center ml-2">
                <div class="bg-white rounded-md p-1">{{ countdown.hours }}</div> :
                <div class="bg-white rounded-md p-1">{{ countdown.minutes }}</div> :
                <div class="bg-white rounded-md p-1">{{ countdown.seconds }}</div>
            </div>
        </div>
    </div>
    <div class="flex">
        <div class="w-full bg-white flex flex-col p-4 shadow-sm">
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
            <div class="bg-white flex flex-col">
                <ul class="flex">
                    <li class="w-1/5 p-5 flex flex-col justify-between hover:shadow-md" v-for="product in products.result"
                        :id="product.id">
                        <ItemFlashSale :product="product" />
                    </li>
                </ul>

            </div>
        </div>
    </div>
</template>
<script setup>
const countdown = ref({
    hours: '00',
    minutes: '45',
    seconds: '00',
});

const startCountdown = () => {
    const targetTime = new Date();
    targetTime.setMinutes(targetTime.getMinutes() + 45); // Thời gian kết thúc sau 45 phút

    const updateCountdown = () => {
        const currentTime = new Date();
        const timeDifference = targetTime - currentTime;

        if (timeDifference > 0) {
            const hours = String(Math.floor((timeDifference / (1000 * 60 * 60)) % 24)).padStart(2, '0');
            const minutes = String(Math.floor((timeDifference / 1000 / 60) % 60)).padStart(2, '0');
            const seconds = String(Math.floor((timeDifference / 1000) % 60)).padStart(2, '0');

            countdown.value = { hours, minutes, seconds };
        }
    };

    updateCountdown(); // Cập nhật thời gian ban đầu

    const countdownInterval = setInterval(updateCountdown, 1000);

    onUnmounted(() => {
        clearInterval(countdownInterval);
    });
};

onMounted(() => {
    startCountdown();
});

const config = useRuntimeConfig();

const { data: products } = await useFetch('/products', {
    baseURL: config.public.apiBase,
    method: 'GET',
    query: {
        flashsale: true,
        limit: 24
    }
})
</script>