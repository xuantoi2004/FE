<template>
  <div class="flex bg-sky-600">
    <div class="w-5/6 mx-auto bg-sky-300">
      <!-- <img src="/img/banner/banner-0.jpg" alt="" class="w-full"> -->
    </div>
  </div>
  <div class="bg-white py-4">
    <div class="flex w-5/6 mx-auto justify-between">
      <div class="flex justify-between items-center">
        <NuxtLink to="/">
          <img src="/img/logo_kingshoes.png" class="w-40" alt="">
          <!-- <div class="font-bold text-xl text-gray-800">KingShoes</div> -->
        </NuxtLink>
        <div class="ml-5">
          <div class="group" @mouseenter="isHovering = true" @mouseleave="isHovering = false">
            <div class="flex">
              <IconMenuBlack class="cursor-pointer text-gray-800" />
            </div>
            <div class="absolute bg-white border border-gray-300 rounded-lg shadow-lg"
              :class="{ 'hidden': !isHovering }">
              <!-- Nội dung của dropdown -->
              <AppHeaderMenuCategory />
            </div>
          </div>
        </div>
      </div>
      <div class="rounded-lg border-gray-400 border ps-5 pe-1 flex items-center w-3/6 mx-5">
        <input type="text" placeholder="Tìm kiếm sản phẩm mong muốn.." v-model="searchName"
          class="w-full focus:border-transparent focus:outline-none" autocomplete="false">
        <button @click="searchProduct" class="bg-gray-800 text-amber-400 rounded-lg ms-auto px-5 py-1 hover:bg-gray-500">
          <IconGlass />
        </button>
      </div>
      <div class="flex justify-between items-center px-1 text-sm">
        <div class="flex flex-col items-center text-gray-800 mr-2 cursor-pointer hover:text-amber-400">
          <IconBell />
          <div class="uppercase font-semibold text-sm">Thông báo</div>
        </div>

        <div class="relative">
          <div class="group" @mouseenter="isHoveringCart = false" @mouseleave="isHoveringCart = true">
            <div class="flex flex-col items-center text-gray-800 mr-2 text-sm cursor-pointer hover:text-amber-400">
              <IconCart class="font-semibold" />
              <div class="uppercase text-sm font-semibold">Giỏ hàng</div>
            </div>
            <MiniCart :isHoveringCart="isHoveringCart" class="z-50" />
          </div>


        </div>


        <div class="relative">
          <div class="group" @mouseenter="isHoveringAccount = false" @mouseleave="isHoveringAccount = true">
            <div class="flex flex-col items-center text-gray-800 mr-2 text-sm cursor-pointer hover:text-amber-400">
              <IconUser class="font-semibold" />
              <div class="uppercase font-semibold text-sm">{{ userStore.user.full_name }}</div>
            </div>
            <div v-if="!userStore.user.isLoggin"
              class="flex flex-col absolute bg-white top-full right-0 px-4 py-2 w-60 rounded shadow-sm border"
              :class="{ hidden: isHoveringAccount }">
              <button class="bg-gray-800 text-white px-4 py-2 my-2 rounded-lg text-center font-semibold"
                @click="displayLoginBox">Đăng nhập</button>
              <button @click="displayRegisterBox"
                class="border-2 font-semibold border-gray-800 text-gray-700 px-4 py-2 rounded-lg text-center">Đăng
                ký</button>
            </div>
            <div v-else class="flex flex-col absolute bg-white top-full right-0 px-4 py-2 w-40 rounded shadow-sm border"
              :class="{ hidden: isHoveringAccount }">
              <div>
                <NuxtLink to="/profile">Thông tin cá nhân</NuxtLink>
              </div>
              <div v-if="userStore.user.isAdmin">
                <NuxtLink to="/admin">Quản lý website</NuxtLink>
              </div>
              <div class="border-t">
                <div @click="logout" class="cursor-pointer">Đăng xuất</div>
              </div>
            </div>
          </div>


        </div>
        <!-- <IconLanguage class="text-gray-800 text-sm cursor-pointer" title="Đang phát triển" /> -->
      </div>
    </div>
  </div>


  <div class="w-full h-full fixed top-0 left-0 z-50 bg-gray-800 bg-opacity-50 flex items-center justify-center"
    :class="{ hidden: !isDisplayLoginBox }" @click="closeLoginBox">
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
          <input type="text" name="phone" v-model="payloadLogin.username" class="border rounded-sm px-4 py-2"
            placeholder="Nhập số điện thoại hoặc email">
        </div>
        <div class="flex flex-col mb-4">
          <div>Mật khẩu</div>
          <div class="relative flex flex-col">
            <input class="border rounded-sm px-4 py-2" placeholder="Nhập mật khẩu" :type="passType"
              v-model="payloadLogin.password" @keyup.enter="submitLogin">
            <div class="absolute right-1.5 top-1.5">
              <button title="ẩn/hiện mật khẩu" class="cursor-pointer text-sm text-gray-800 hover:text-amber-400"
                @click="passType == 'text' ? passType = 'password' : passType = 'text'">
                <IconEye />
              </button>
            </div>
          </div>
        </div>
        <div class="text-right mb-4">
          <NuxtLink to="#" class="text-gray-800 text-sm">Quên mật khẩu?</NuxtLink>
        </div>
        <button @click="submitLogin"
          class="px-4 py-2 text-gray-700 bg-gray-200 font-semibold text-center w-3/5 rounded-md mx-auto mb-3 hover:bg-gray-800 hover:text-white">Đăng
          nhập</button>
        <button
          class="px-4 py-2 text-gray-800 bg-white border-gray-800 border-2 font-semibold text-center w-3/5 rounded-md mx-auto mb-3"
          @click="isDisplayLoginBox = false">Bỏ
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
            <input type="text" name="phone_reg" class="border rounded-sm px-4 py-2" placeholder="Nhập số điện thoại"
              v-model="payload.phone">
          </div>
        </div>
        <div class="flex flex-col mb-4">
          <div>Email</div>
          <input type="email" class="border rounded-sm px-4 py-2" placeholder="Nhập email" v-model="payload.email">
        </div>
        <div class="flex flex-col mb-4">
          <div>Mật khẩu</div>
          <div class="flex flex-col">
            <input type="password" class="border rounded-sm px-4 py-2" placeholder="Nhập mật khẩu"
              v-model="payload.password">
          </div>
        </div>
        <div class="flex flex-col mb-4">
          <div>Nhập lại mật khẩu</div>
          <div class="flex flex-col">
            <input type="password" class="border rounded-sm px-4 py-2" placeholder="Nhập mật khẩu"
              v-model="payload.re_password">
          </div>
        </div>
        <button @click="submitRegister"
          class="px-4 py-2 text-gray-700 bg-gray-200 font-semibold text-center w-3/5 rounded-md mx-auto mb-3 hover:bg-gray-800 hover:text-white">Đăng
          ký</button>
        <button
          class="px-4 py-2 text-gray-800 bg-white border-gray-800 border-2 font-semibold text-center w-3/5 rounded-md mx-auto mb-3"
          @click="isDisplayLoginBox = false">Bỏ
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
<style scoped>
@keyframes slideIn {
  0% {
    transform: translateX(100%);
  }

  100% {
    transform: translateX(0);
  }
}

.slide-in {
  animation: slideIn 0.3s forwards;
}
</style>
<script setup>
import { ref, computed } from 'vue';
import { useUserStore } from '~/store/user';

const { $objstring } = useNuxtApp();
const router = useRouter();
const config = useRuntimeConfig();

const isHovering = ref(false);
const isHoveringAccount = ref(true);
const isHoveringCart = ref(true);
const isDisplayLoginBox = ref(false);
const isOnLogin = ref(true);
const passType = ref('password');
const userStore = useUserStore()
const searchName = ref('');

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
      'text-gray-800': true,
      'border-b-2': true,
      'border-gray-800': true,
      'pb-2': true,
      'font-semibold': true
    }
  } else {
    return {}
  }
})

const searchProduct = async () => {
  await navigateTo({
    path: '/search',
    query: {
      name: searchName.value
    }
  })
}

const displayLoginBox = () => {
  isDisplayLoginBox.value = true;
  isOnLogin.value = true;
};

const displayRegisterBox = () => {
  isDisplayLoginBox.value = true;
  isOnLogin.value = false;
}

const closeLoginBox = () => {
  isDisplayLoginBox.value = false;
};

const submitLogin = async () => {
  await useFetch('/customers/login', {
    baseURL: config.public.apiBase,
    method: 'POST',
    body: $objstring(payloadLogin.value),
    watch: false,
    async onResponse({ request, response, options }) {
      if (response.ok) {
        const dataUser = response._data.result;

        userStore.addUser(dataUser);
        alert('Đăng nhập thành công');
        closeLoginBox();

      } else {
        alert('Đăng nhập không thành công!')
      }
    },
  })
}

const submitRegister = async () => {
  await useFetch('/customers/register', {
    baseURL: config.public.apiBase,
    method: 'POST',
    body: $objstring(payload.value),
    watch: false,
    async onResponse({ request, response, options }) {
      if (response.ok) {
        const dataUser = response._data.result;

        userStore.addUser(dataUser);
        alert('Đăng ký thành công');
        closeLoginBox();

      } else {
        alert(response._data.message)
      }
    },
  })
}

const logout = async () => {
  userStore.removeUser();
  navigateTo('/');
}

</script>