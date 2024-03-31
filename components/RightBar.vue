<template>
    <div>
        <button v-if="!showForm" title="Tìm kiếm mẫu giày ưng ý!"
            class="fixed right-0 bottom-20 z-50 p-4 bg-amber-400 rounded-full shadow-lg hover:bg-amber-600 transition-all duration-300"
            @click="showForm = true">
            <IconSearchDocument />
        </button>

        <div v-if="showForm"
            class="fixed right-0 top-0 z-40 w-1/5 h-full bg-gray-100 shadow-lg transition-all duration-300">
            <div class="flex justify-end p-4">
                <button class="text-gray-800 hover:bg-gray-400 hover:rounded-full transition-all duration-300"
                    @click="showForm = false" title="Đóng popup">
                    <IconXMark />
                </button>
            </div>
            <div class="p-4 flex flex-col gap-1">
                <div class="mb-4 w-full flex flex-col gap-1">
                    <label for="purpose" class="w-full font-semibold">Mục đích sử dụng:</label>
                    <select id="purpose" class="border border-gray-300 p-2 rounded-md w-full" v-model="purpose">
                        <option value="đi làm">Giày đi làm</option>
                        <option value="đi chơi">Giày đi chơi</option>
                        <option value="hoạt động thể thao">Hoạt động thể thao</option>
                        <option value="dã ngoại leo núi">Dã ngoại/leo núi</option>
                    </select>
                </div>
                <div class="mb-4 w-full flex flex-col gap-1">
                    <label for="gender" class="w-full font-semibold">Giới tính:</label>
                    <select id="gender" class="border border-gray-300 p-2 rounded-md w-full" v-model="gender">
                        <option value="nam">Nam</option>
                        <option value="nữ">Nữ</option>
                    </select>
                </div>
                <div class="mb-4 w-full flex flex-col gap-1">
                    <label for="maincolor" class="w-full font-semibold">Màu sắc ưa thích:</label>
                    <div class="flex">
                        <div class="flex w-1/2 items-center gap-1">
                            <div>Chủ đạo: </div>
                            <input type="color" id="maincolor" v-model="maincolor"
                                class="border border-gray-300 p-0.5 rounded-md h-14" />
                        </div>
                        <div class="flex w-1/2 items-center gap-1">
                            <div>Phụ đạo: </div>
                            <input type="color" id="subcolor" v-model="subcolor"
                                class="border border-gray-300 p-0.5 rounded-md h-14" />
                        </div>
                    </div>
                </div>
                <div class="mb-4 w-full flex flex-col gap-1">
                    <label for="size" class="w-full font-semibold">Kích thước chân(EU size):</label>
                    <input type="number" min="15" max="47" v-model="size"
                     id="size" name="size"
                        class="border border-gray-300 p-2 rounded-md w-full" />
                </div>
                <div class="mb-4 w-full flex flex-col gap-1">
                    <label for="trademark" class="w-full font-semibold">Thương hiệu:</label>
                    <select id="trademark" name="trademark" class="border border-gray-300 p-2 rounded-md w-full" v-model="brand">
                        <option value="">Tất cả</option>
                        <option value="nike">Nike</option>
                        <option value="converse">Converse</option>
                        <option value="adidas">Adidas</option>
                        <option value="vans">Vans</option>
                        <option value="puma">Puma</option>
                        <option value="fila">Fila</option>
                    </select>
                </div>
                <div class="flex flex-col gap-1 italic" v-if="hasResult">
                    <div class="font-semibold text-sm">
                        Mẫu sản phẩm phù hợp với bạn là:
                    </div>
                    <div class="text-green-500">
                        <NuxtLink :to="{
                            path: '/search',
                            query: {
                                name: result
                            }
                        }" title="Tìm sản phẩm này trên website">{{ result }}</NuxtLink>
                    </div>
                </div>
                <div v-if="loadingGenAI" class='h-0.5 bg-red-100 overflow-hidden'>
                    <div class='progress h-full bg-green-500 left-right'></div>
                </div>
                <button type="button" @click="genAI"
                    class="bg-gray-700 text-amber-300 hover:bg-gray-800 hover:text-amber-400 p-2 rounded-md flex items-center justify-center gap-1 uppercase font-semibold">
                    Tìm kiếm với AI
                    <IconChip />
                </button>
            </div>
        </div>
    </div>
</template>
<script setup>
const config = useRuntimeConfig();

const showForm = ref(false);
const purpose = ref('dã ngoại leo núi');
const gender = ref('nam');
const maincolor = ref('#FFFFFF');
const subcolor = ref('#000000');
const size = ref(39);
const brand = ref('');

const hasResult = ref(false);
const result = ref('');

const loadingGenAI = ref(false);
const genAI = async () => {
    loadingGenAI.value = true;

    const { data, pending, error } = await useFetch('/gemini/prompt', {
        baseURL: config.public.apiBase,
        method: 'POST',
        body: {
            prompt: `Tìm kiếm và trả về cho tôi tên của 1 mẫu giày hoặc dép đáp ứng các tiêu chí sau(lưu ý kết quả chỉ trả về tên của mẫu giày đó, nếu là giày thì thêm tiền tố Giày, nếu là dép thì tên tiền tố Dép): 
            - Thương hiệu: ${brand.value}
            - Sử dụng cho mục đích: ${purpose.value}
            - Dành cho giới tính: ${gender.value}
            - Màu sắc chủ đạo của nó có mã màu là: ${maincolor.value}, phụ đạo có mã màu là: ${subcolor.value}
            - Kích thước (cỡ EU) là: ${size.value}
            `
        }
    })

    if (error.value) {
        alert('Lỗi truy vấn AI:' + error.value);
        loadingGenAI.value = false;
        return;
    }

    hasResult.value = true;
    result.value = data.value;
    loadingGenAI.value = false;
}
</script>
<style scoped>
.progress {
    animation: progress 1s infinite linear;
}

.left-right {
    transform-origin: 0% 50%;
}

@keyframes progress {
    0% {
        transform: translateX(0) scaleX(0);
    }

    40% {
        transform: translateX(0) scaleX(0.4);
    }

    100% {
        transform: translateX(100%) scaleX(0.5);
    }
}
</style>