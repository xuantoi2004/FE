<template>
    <div class="flex mt-4 flex-col">
        <div class="flex justify-center items-center text-2xl text-green-600 font-semibold">
            <IconBolt class="text-red-500" />
            <div class="uppercase"> FLASH SALE Trong:</div>
            <div class="flex items-center">
                <div class="bg-green-400 text-white rounded-md p-1">{{ countdown.hours }}</div> :
                <div class="bg-green-400 text-white rounded-md p-1">{{ countdown.minutes }}</div> :
                <div class="bg-green-400 text-white rounded-md p-1">{{ countdown.seconds }}</div>
            </div>
        </div>
    </div>
    <div class="flex flex-col w-5/6 mx-auto">
        <ul class="flex">
            <li class="w-1/5 p-5 flex flex-col border rounded hover:shadow-md" v-for="product in products.result" :id="product.id">
                <ItemFlashSale :product="product" />
            </li>
        </ul>
        <NuxtLink to="/flashsale"
            class="px-5 py-2 w-2/12 rounded text-center mx-auto mt-4 hover:text-green-300 font-semibold mb-5 bg-green-600 text-white hover:shadow-md">
            Xem thêm</NuxtLink>
    </div>
</template>
<script setup>
const config = useRuntimeConfig();
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

const { data: products } = await useFetch('/products', {
    baseURL: config.public.apiBase,
    method: 'GET',
    query: {
        flashsale: true,
        limit: 5
    }
})
</script>