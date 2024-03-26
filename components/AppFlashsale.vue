<template>
    <div class="flex mt-4 flex-col">
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
        <div class="bg-white">
            <ul class="flex">
                <li class="w-1/5 p-5" v-for="product in products.result" :id="product.id">
                    <ItemFlashSale :product="product" />
                </li>
            </ul>
            <div class="px-5 py-2 bg-gray-800 w-2/12 rounded-full text-center mx-auto mt-4 text-amber-400 font-semibold mb-5 hover:bg-amber-400 hover:text-gray-800">
                Xem Thêm</div>
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

const { data: products } = await useFetch('http://localhost:3000/api/products', {
    method: 'GET',
    query: {
        flashsale: true,
        limit: 5
    }
})
</script>