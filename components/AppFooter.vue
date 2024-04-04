<template>
    <div class="footer-fj mt-5"></div>
    <div class="bg-green-600 py-5 px-4 text-white">
        <div class="flex w-5/6 mx-auto">
            <div class="w-1/3">
                <div class="font-bold mb-4 uppercase">
                    Chính sách
                </div>
                <ul class="footer-ul">
                    <li>Chính sách bảo mật thông tin</li>
                    <li>Quy định và hình thức thanh toán</li>
                    <li>Chính sách thành viên Fuji</li>
                    <li>Chính sách đổi trả</li>
                    <li>Chính sách vận chuyển</li>
                    <li>Câu hỏi thường gặp</li>
                    <li>Liên hệ</li>
                </ul>
            </div>
            <div class="w-1/3">
                <div class="font-bold mb-4 uppercase">
                    Hỗ trợ mua hàng
                </div>
                <ul class="footer-ul">
                    <li>Hệ thống cửa hàng</li>
                    <li>Hướng dẫn mua hàng</li>
                    <li>Hóa đơn VAT</li>
                    <li>
                        <img src="/img/logocongthuong.png" class="w-48" alt="">
                    </li>
                </ul>
            </div>
            <div class="w-1/3">
                <div class="font-bold mb-4 uppercase">
                    CÔNG TY CP XUẤT NHẬP KHẨU FUJI
                </div>
                <ul>
                    <li>Trụ sở: 352 Giải Phóng, Phương Liệt, Thanh Xuân, Hà Nội</li>
                    <li>Hotline: 1900 2268 - 0989 96 69 96</li>
                    <li>Website: www.hoaquafuji.com</li>
                    <li>Giấy CNĐKKD: 0107875928 do Sở Kế hoạch và Đầu tư TP Hà Nội cấp ngày 09/06/2017</li>
                </ul>
            </div>
        </div>
    </div>
    <div class="bg-green-500 p-4 text-white">
        <div class="w-5/6 mx-auto">
            © {{ new Date().getFullYear() }} Hệ thống hoa quả sạch Fuji Fruit
        </div>
    </div>

</template>
<style>
.footer-ul li:hover {
    color: orange;
}

.footer-fj {
    width: 100%;
    height: 13px;
    background: url('/img/border-top-footer.png') repeat-x;
    top: -13px;
}
</style>