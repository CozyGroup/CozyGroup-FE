import { FaEnvelope, FaFacebookF, FaInstagram, FaYoutube } from "react-icons/fa";
import logo from "../../../assets/image/logo/logo-2.jpg"
import { Link } from "react-router-dom";
import footer_bg from "../../../assets/image/footer-bg/home_counters_bkg.png";
import logo_bct from "../../../assets/image/logo/logo_bct_image.png"
import icon_bg_1 from "../../../assets/image/icon/home_counters_1_fa.png"
import icon_bg_2 from "../../../assets/image/icon/home_counters_2_fa.png"
import icon_bg_3 from "../../../assets/image/icon/home_counters_3_fa.png"
const Footer = () => {
    return (
        <div>
            <div className="h-60 bg-footer-bg bg-cover bg-center bg-[rgba(0,0,0,0.5)] bg-blend-darken flex items-center justify-center text-white">

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-white max-w-7xl mx-auto font-oswald">
                    <div className="flex flex-col items-center">
                        <div className="flex items-center">
                            <div className="mr-4">
                                <img src={icon_bg_1} alt="Icon" className="w-[80px] h-[80px]" />
                            </div>
                            <div>
                                <h2 className="text-[36px]">+ 120</h2>
                                <p className="mt-2">THỰC ĐƠN ĐA DẠNG</p>
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-col items-center">
                        <div className="flex items-center">
                            <div className="mr-4">
                                <img src={icon_bg_2} alt="Icon" className="w-[80px] h-[80px]" />
                            </div>
                            <div>
                                <h2 className="text-[36px]">+ 350 </h2>
                                <p className="mt-2"> KHÁCH HÀNG MỖI NGÀY</p>
                            </div>
                        </div>
                    </div>

                    <div className="flex flex-col items-center">
                        <div className="flex items-center">
                            <div className="mr-4">
                                <img src={icon_bg_3} alt="Icon" className="w-[80px] h-[80px]" />
                            </div>
                            <div>
                                <h2 className="text-[36px]">+ 10 </h2>
                                <p className="mt-2">NĂM KINH NGHIỆM</p>
                            </div>
                        </div>
                    </div>

                </div>
            </div>


            <div className="bg-white border-t text-text text-sm">
                <div className="container mx-auto px-4 py-6 flex flex-wrap justify-between gap-4">
                    <div className="flex items-center gap-2 flex-wrap basis-full md:basis-[65%]">
                        <FaEnvelope className="text-xl text-text" />
                        <span className="text-black font-quicksand me-7">ĐĂNG KÝ NHẬN TIN:</span>
                        <input
                            type="email"
                            placeholder="Nhập email của bạn"
                            className="border rounded px-3 py-1 text-sm w-full md:w-[50%] h-[40px]"
                        />
                        <button className="bg-primary text-white h-[40px] px-4 py-1 rounded hover:bg-green-700">
                            Đăng ký
                        </button>
                    </div>
                    <div className="flex items-center gap-2">
                        <span className="me-5">Kết nối với chúng tôi:</span>
                        <a href="#" className="bg-primary p-2 rounded-md text-white">
                            <FaFacebookF size={20} />
                        </a>
                        <a href="#" className="bg-primary p-2 rounded-md text-white">
                            <FaInstagram size={20} />
                        </a>
                        <a href="#" className="bg-primary p-2 rounded-md text-white">
                            <FaYoutube size={20} />
                        </a>
                    </div>
                </div>

                <hr />

                <div className="container text-[15px] mx-auto px-4  grid grid-cols-1 md:grid-cols-6 gap-6">
                    {/* Phần Logo */}
                    <div className="md:col-span-3 pb-10">
                        <div className="w-[25%]">
                            <img src={logo} alt="Logo" className="w-full h-full object-cover" />
                        </div>
                        <p className=" mb-5 text-justify leading-relaxed w-[85%]">
                            Quick Food phục vụ các món ăn truyền thống và sáng tạo của Nhật Bản. Bầu không khí bình dị trong khi thiết kế hiện đại và cao cấp góp phần mang đến trải nghiệm ăn uống thư giãn và thú vị.
                        </p>

                        <img src={logo_bct} alt="Đã thông báo" className="w-[190px]" />
                    </div>

                    {/* Phần Chính sách */}
                    <div className="md:col-span-1 py-10">
                        <h3 className="font-bold font-oswald mb-5">CHÍNH SÁCH</h3>
                        <ul className="space-y-4">
                            <li><a href="#">Tìm kiếm</a></li>
                            <li><a href="#">Giới thiệu</a></li>
                            <li><a href="#">Chính sách đổi trả</a></li>
                            <li><a href="#">Chính sách bảo mật</a></li>
                            <li><a href="#">Liên hệ</a></li>
                        </ul>
                    </div>

                    {/* Phần Menu */}
                    <div className="md:col-span-1 py-10">
                        <h3 className="font-bold font-oswald mb-5">MENU</h3>
                        <ul className="space-y-4">
                            <li><a href="#">Sản phẩm khuyến mãi</a></li>
                            <li><a href="#">Sản phẩm nổi bật</a></li>
                            <li><a href="#">Tất cả sản phẩm</a></li>
                        </ul>
                    </div>

                    {/* Phần Về Chúng Tôi */}
                    <div className="md:col-span-1 py-10">
                        <h3 className="font-bold font-oswald mb-5">VỀ CHÚNG TÔI</h3>
                        <ul className="space-y-4">
                            <li><a href="#">Trang chủ</a></li>
                            <li><a href="#">Thực đơn</a></li>
                            <li><a href="#">Giới thiệu</a></li>
                            <li><a href="#">Liên hệ</a></li>
                        </ul>
                    </div>
                </div>


                <div className="border-t py-4 text-center text-gray-500">
                    Team CozyCoffee mãi đỉnh
                </div>
            </div>
        </div>
    );
}

export default Footer;

