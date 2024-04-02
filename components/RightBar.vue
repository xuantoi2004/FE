<template>
    <div>
        <button v-if="!showForm" title="Tìm kiếm mẫu giày ưng ý!"
            class="fixed right-0 bottom-20 z-50 p-4 bg-green-400 rounded-full shadow-lg hover:bg-green-600 transition-all duration-300"
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
                    <label for="trademark" class="w-full font-semibold text-sm">Upload hình ảnh trái cây bạn muốn
                        tìm:</label>
                    <input type="file" id="image-upload" class="border border-gray-300 p-2 rounded-md w-full"
                        @change="uploadChange">
                    <img :src="imageURL" class="w-40 mx-auto border border-green-400" alt="" v-if="imageURL">
                </div>
                <div class="flex flex-col gap-1 italic" v-if="hasResult">
                    <div class="font-semibold text-sm">
                        Loại trái cây có thể bạn cần tìm là:
                    </div>
                    <div :class="{
                        'text-green-500' : !result.trim().startsWith('lỗi'),
                        'text-red-500' : result.trim().startsWith('lỗi')
                    }">
                        <NuxtLink :to="{
                            path: '/search',
                            query: {
                                name: result
                            }
                        }" :class="{
                            'pointer-events-none' : result.trim().startsWith('lỗi')
                        }" title="Tìm sản phẩm này trên website">
                            {{ result }}
                        </NuxtLink>
                    </div>
                </div>
                <div v-if="loadingGenAI" class='h-0.5 bg-red-100 overflow-hidden'>
                    <div class='progress h-full bg-green-500 left-right'></div>
                </div>
                <button type="button" @click="genAI" :disabled="!imageURL"
                    class="disabled:bg-gray-800 bg-green-700 text-amber-300 hover:bg-green-800 hover:text-amber-400 p-2 rounded-md flex items-center justify-center gap-1 uppercase font-semibold">
                    {{ imageURL ? 'Tìm kiếm bằng AI' : 'Vui lòng tải ảnh lên' }}
                    <IconChip />
                </button>
            </div>
        </div>
    </div>
</template>
<script setup>
const config = useRuntimeConfig();

const imageURL = ref('');
const showForm = ref(false);
const hasResult = ref(false);
const result = ref('');
const loadingGenAI = ref(false);

const uploadChange = async (e) => {
    // Lấy file được chọn
    const file = e.target.files[0];

    // // Tạo FileReader
    const reader = new FileReader();

    // Đọc file và hiển thị ảnh
    reader.onloadend = async (e) => {
        imageURL.value = reader.result;
    };
    reader.readAsDataURL(file);

    hasResult.value = false;
}

const genAI = async () => {
    // Lấy file được chọn
    const file = document.getElementById('image-upload').files[0];

    // Tạo FormData để gửi file
    const formData = new FormData();
    formData.append('images', file);
    formData.append('prompt', 'Nhận diện loại trái cây trong ảnh sau và chỉ trả về duy nhất tên của loại trái cây đó (không bao gồm thông tin khác, nếu không phải trải cây thì trả về "lỗi: không phát hiện được loại trái cây cụ thể nào, vui lòng tải lên ảnh khác")');

    loadingGenAI.value = true;
    const { data, pending, error } = await useFetch('/gemini/upload', {
        baseURL: config.public.apiBase,
        method: 'POST',
        body: formData,
    });
    if (error.value) {
        alert('Lỗi truy vấn AI:' + error.value);
        loadingGenAI.value = false;
        return;
    }

    hasResult.value = true;
    result.value = data.value;
    loadingGenAI.value = false;
};
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