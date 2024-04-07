<template>
    <div class="flex items-center">
        <div class="w-1/3 text-gray-600 font-semibold after:content-[':'] uppercase text-sm">Ảnh mô
            tả</div>
        <div class="w-2/3 flex flex-col">
            <div class="py-2 gap-1 flex items-center">
                <img :src="srcImage" class="w-2/3">
                <div class="flex flex-col w-1/3 gap-2">
                    <input type="file" @change="onFileChange">
                    <button class="bg-green-500 text-white rounded">
                        Upload ảnh
                    </button>
                </div>
            </div>
            <div class="flex gap-2">
                <input type="text" v-model="srcImage" placeholder="nhập link ảnh"
                    class="w-full px-2 py-2.5 text-gray-500 border-gray-300 rounded-lg border outline-none  bg-admin placeholder:lowercase focus:border-red-500">
            </div>
        </div>
    </div>
</template>
<script setup>
const srcImage = defineModel('srcImage');
const config = useRuntimeConfig();
const onFileChange = async (e) => {
    // Lấy file được chọn
    const file = e.target.files[0];

    // // Tạo FileReader
    // const reader = new FileReader();

    // // Đọc file và hiển thị ảnh
    // reader.onloadend = async (e) => {
    //     product.value.picture = reader.result;
    // };
    // reader.readAsDataURL(file);

    // Tạo FormData để gửi file
    const formData = new FormData();
    formData.append('image', file);

    await useFetch('/products/upload', {
        baseURL: config.public.apiBase,
        method: 'POST',
        body: formData,
        onResponse: ({ response }) => {
            if (response.ok) {
                const imageURL = response._data.result;
                srcImage.value = config.public.apiBase + '/products/image/' + imageURL;
                alert('Upload ảnh thành công');
            } else {
                alert('Upload ảnh thất bại')
            }
        }
    })
};
</script>