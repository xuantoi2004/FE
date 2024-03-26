<template>
    <div class="my-5 p-4 bg-gray-300 rounded bg-opacity-50 flex items-center justify-center"
    :class="{ hidden: !isDisplayLoginBox }">
    <div class="bg-white p-4 mx-auto w-4/12 flex flex-col rounded-md" @click.stop>
      <div class="flex">
        <div class="w-1/2 text-center cursor-pointer" :class="isOnLogin ? onTabStyle : ''" @click="isOnLogin = true">Đăng
          nhập</div>
        <div class="w-1/2 text-center cursor-pointer" :class="isOnLogin ? '' : onTabStyle" @click="isOnLogin = false">Đăng
          ký</div>
      </div>
      <div class="p-4 flex flex-col" :class="{
        hidden: !isOnLogin,
      }">
        <div class="flex flex-col mb-4">
          <div>Số điện thoại/Email</div>
          <input type="text" name="phone" v-model="payloadLogin.username" class="border rounded-sm px-4 py-2" placeholder="Nhập số điện thoại hoặc email">
        </div>
        <div class="flex flex-col mb-4">
          <div>Mật khẩu</div>
          <div class="relative flex flex-col">
            <input class="border rounded-sm px-4 py-2" placeholder="Nhập mật khẩu" :type="passType" v-model="payloadLogin.password" @keyup.enter="submitLogin">
            <div class="absolute right-1.5 top-1.5">
              <button title="ẩn/hiện mật khẩu" class="cursor-pointer text-sm text-orange-600 hover:text-red-700" @click="passType == 'text' ? passType = 'password' : passType = 'text'"><IconEye/></button>
            </div>
          </div>
        </div>
        <div class="text-right mb-4">
          <NuxtLink to="#" class="text-red-700 text-sm">Quên mật khẩu?</NuxtLink>
        </div>
        <button @click="submitLogin" class="px-4 py-2 text-gray-700 bg-gray-200 font-semibold text-center w-3/5 rounded-md mx-auto mb-3 hover:bg-red-700 hover:text-white">Đăng
          nhập</button>
        <button
          class="px-4 py-2 text-red-700 bg-white border-red-700 border-2 font-semibold text-center w-3/5 rounded-md mx-auto mb-3" @click="isDisplayLoginBox = false">Bỏ
          qua</button>
        <button
          class="px-4 py-2 text-white bg-blue-500 font-semibold text-center w-3/5 rounded-md mx-auto mb-3 flex justify-center items-center">
          <IconFacebook class="w-5 mr-2" />
          Đăng nhập bằng Facebook
        </button>
      </div>
      <!-- Register  -->

      <div class="p-4 flex flex-col" :class="{
        hidden: isOnLogin,
        'slide-in': !isOnLogin
      }">
        <div class="flex flex-col mb-4">
          <div>Số điện thoại</div>
          <div class="flex flex-col">
            <input type="text" name="phone_reg" class="border rounded-sm px-4 py-2" placeholder="Nhập số điện thoại" v-model="payload.phone">
          </div>
        </div>
        <div class="flex flex-col mb-4">
          <div>Email</div>
          <input type="email" class="border rounded-sm px-4 py-2" placeholder="Nhập email" v-model="payload.email">
        </div>
        <div class="flex flex-col mb-4">
          <div>Mật khẩu</div>
          <div class="flex flex-col">
            <input type="password" class="border rounded-sm px-4 py-2" placeholder="Nhập mật khẩu" v-model="payload.password">
          </div>
        </div>
        <div class="flex flex-col mb-4">
          <div>Nhập lại mật khẩu</div>
          <div class="flex flex-col">
            <input type="password" class="border rounded-sm px-4 py-2" placeholder="Nhập mật khẩu" v-model="payload.re_password">
          </div>
        </div>
        <button @click="submitRegister" class="px-4 py-2 text-gray-700 bg-gray-200 font-semibold text-center w-3/5 rounded-md mx-auto mb-3 hover:bg-red-700 hover:text-white">Đăng
          ký</button>
        <button
          class="px-4 py-2 text-red-700 bg-white border-red-700 border-2 font-semibold text-center w-3/5 rounded-md mx-auto mb-3" @click="isDisplayLoginBox = false">Bỏ
          qua</button>
        <div class="text-center text-xs mt-4">
          Bằng việc đăng ký, bạn đã đồng ý với HuyHang.com về <br>
          <NuxtLink to="#" class="text-blue-500">Điều khoản dịch vụ</NuxtLink> & <NuxtLink to="#" class="text-blue-500">
            Chính sách bảo mật</NuxtLink>
        </div>
      </div>

    </div>
  </div>
</template>
<script setup>
import { ref, computed } from 'vue';
import { useUserStore } from '~/store/user';

const {$objstring} = useNuxtApp();

const isDisplayLoginBox = ref(true);
const isOnLogin = ref(true);
const passType = ref('password');
const userStore = useUserStore()

const payload = ref({
  phone: '',
  email: '',
  password: '',
  re_password: ''
})

const payloadLogin = ref({
  username: '',
  password: ''
})

const onTabStyle = computed(() => {
  if (isOnLogin) {
    return {
      'text-red-700': true,
      'border-b-2': true,
      'border-red-700': true,
      'pb-2': true,
      'font-semibold': true
    }
  } else {
    return {}
  }
})

const closeLoginBox = () => {
  isDisplayLoginBox.value = false;
};

const submitLogin = async () => {
  await useFetch('http://localhost:3000/api/customers/login',{
    method: 'POST',
    body: $objstring(payloadLogin.value),
    watch: false,
    async onResponse({request, response, options}) {
      if(response.ok){
        const dataUser = response._data.result;

        userStore.addUser(dataUser);
        alert('Login thành công');
        navigateTo('/');
      } else {
        alert(response._data.message)
      }
    },
  })
}

const submitRegister = async () => {
  await useFetch('http://localhost:3000/api/customers/register',{
    method: 'POST',
    body: $objstring(payload.value),
    watch: false,
    async onResponse({request, response, options}) {
      if(response.ok){
        const dataUser = response._data.result;

        userStore.addUser(dataUser);
        alert('Đăng ký thành công');
        navigateTo('/');
      } else {
        alert(response._data.message)
      }
    },
  })
}

</script>