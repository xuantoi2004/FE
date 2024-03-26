<template>
    <div class="bg-gray-800 px-5 py-4 w-5/6 mx-auto mt-5 rounded-t-lg">
        <div class="flex justify-center items-center">
            <div class="flex w-2/6 items-center">
                <IconLetter class="text-white me-1" />
                <div class="text-white text-xl uppercase">Đăng ký nhận khuyến mãi</div>
            </div>
            <div class="p-1 bg-white rounded-md w-3/6 flex">
                <input type="text" placeholder="Nhập địa chỉ email của bạn"
                    class="pl-4 w-5/6 h-auto focus:border-transparent focus:outline-none">
                <button class="bg-amber-300 text-black uppercase text-sm rounded-md py-2 px-5 w-1/6 hover:bg-gray-800 hover:text-amber-400">Đăng ký</button>
            </div>
        </div>
    </div>
    <div class="bg-white w-5/6 mx-auto flex pt-5 px-4">
        <div class="w-2/6 mr-2">
            <img src="img/logo_ks_footer.png" class="w-40" alt="">
            <!-- <div class="text-gray-800 font-bold text-xl">HUYHANG</div> -->
            <div class="mt-4">
                <p>
                    KINGSHOES.VN Trang Thông Tin Chính Thức.
                </p>
                <p class="mt-2">
                    Cửa Hàng KING SHOES là một trong những nơi sưu tầm có khối lượng giày hiếm siêu khủng. Có những mẫu
                    giày cực kì hype được giới sưu tầm săn lùng, thậm chí bạn sẽ bắt gặp nhiều mẫu lạ mới mà hiếm shop
                    nào có. Có những mẫu chỉ có độc nhất 1 đôi. Ngoài ra những mẫu đang rất HOT trên thị trường sneaker
                    về liên tục nên các bạn cứ yên tâm không sợ hết hàng.
                </p>
            </div>
            <img src="/img/logocongthuong.png" class="w-2/6 mt-4" alt="">
        </div>
        <div class="w-4/6 border-l border-gray-400 pl-4">
            <div class="flex">
                <div class="w-2/6">
                    <div class="font-bold mb-4">
                        DỊCH VỤ
                    </div>
                    <ul>
                        <li>Điều khoản sử dụng</li>
                        <li>Chính sách bảo mật thông tin cá nhân</li>
                        <li>Chính sách bảo mật thanh toán</li>
                        <li>
                            <NuxtLink to="/about">
                                Giới thiệu
                            </NuxtLink>
                        </li>
                        <li>Hệ thống trung tâm - nhà sách</li>
                    </ul>
                </div>
                <div class="w-2/6">
                    <div class="font-bold mb-4">
                        HỖ TRỢ
                    </div>
                    <ul>
                        <li>Chính sách đổi - trả - hoàn tiền</li>
                        <li>Chính sách bảo hành - bồi hoàn</li>
                        <li>Chính sách vận chuyển</li>
                        <li>Chính sách khách sỉ</li>
                        <li>Phương thức thanh toán và xuất HĐ</li>
                    </ul>
                </div>
                <div class="w-2/6">
                    <div class="font-bold mb-4">
                        TÀI KHOẢN CỦA TÔI
                    </div>
                    <ul>
                        <li>Đăng nhập/Tạo mới tài khoản</li>
                        <li>Thay đổi địa chỉ khách hàng</li>
                        <li>Chi tiết tài khoản</li>
                        <li>Lịch sử mua hàng</li>
                    </ul>
                </div>
            </div>
            <div class="mt-4">
                <div class="font-bold mb-4">
                    LIÊN HỆ
                </div>
                <div class="flex">
                    <div class="w-2/6 flex">
                        <IconMapPin class="mr-2" />
                        Tân Lập, TP Thái Nguyên
                    </div>
                    <div class="w-2/6 flex">
                        <IconLetter class="mr-2" />
                        cskh.kingshoes.vn@gmail.com
                    </div>
                    <div class="w-2/6 flex">
                        <IconPhone class="mr-2" />
                        0902.368.001
                    </div>
                </div>
            </div>
            <div class="mt-4">
                <div class="flex">
                    <div class="w-1/5">
                        <img src="/img/transport/vnpost1.png" class="max-h-28" alt="">
                    </div>
                    <div class="w-1/5">
                        <img src="/img/transport/ahamove_logo3.png" class="max-h-28" alt="">
                    </div>
                    <div class="w-1/5">
                        <img src="/img/transport/icon_giao_hang_nhanh1.png" class="max-h-28" alt="">
                    </div>
                    <div class="w-1/5">
                        <img src="/img/transport/icon_snappy1.png" class="max-h-28" alt="">
                    </div>
                    <div class="w-1/5">
                        <img src="/img/transport/Logo_ninjavan.png" class="max-h-28" alt="">
                    </div>
                </div>
                <div class="flex">
                    <div class="w-1/5">
                        <img src="/img/payment/vnpay_logo.png" class="max-h-28" alt="">
                    </div>
                    <div class="w-1/5">
                        <img src="/img/payment/ZaloPay-logo-130x83.png" class="max-h-28" alt="">
                    </div>
                    <div class="w-1/5">
                        <img src="/img/payment/momopay.png" class="max-h-28" alt="">
                    </div>
                    <div class="w-1/5">
                        <img src="/img/payment/shopeepay_logo.png" class="max-h-28" alt="">
                    </div>
                    <div class="w-1/5">
                        <img src="/img/payment/logo_moca_120.jpg" class="max-h-28" alt="">
                    </div>
                </div>
            </div>
        </div>

    </div>
    <div class="text-gray-300 w-5/6 mx-auto bg-white text-center pt-5">
        Giấy chứng nhận Đăng ký Kinh doanh số 0304132047 do Sở Kế hoạch và Đầu tư Việt Nam cấp ngày 20/12/2005,
        đăng ký thay đổi lần thứ 10, ngày 20/05/2022.
    </div>
</template>