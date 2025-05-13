import React, { useState } from "react";
import { FaEnvelope, FaFacebookF, FaInstagram, FaYoutube } from "react-icons/fa";
import { IoMailOutline } from "react-icons/io5";
import { GoChevronDown, GoChevronUp } from "react-icons/go";
import { FiMinus } from "react-icons/fi";
import logo from "../../../assets/image/logo/logo-2.jpg"
import { Link } from "react-router-dom";
import footer_bg from "../../../assets/image/footer-bg/home_counters_bkg.png";
import logo_bct from "../../../assets/image/logo/logo_bct_image.png"
import icon_bg_1 from "../../../assets/image/icon/home_counters_1_fa.png"
import icon_bg_2 from "../../../assets/image/icon/home_counters_2_fa.png"
import icon_bg_3 from "../../../assets/image/icon/home_counters_3_fa.png"

const FooterDropdown = ({ title, children }) => {
    const [open, setOpen] = useState(false);

    return (
        <div className="border-b border-gray-200 py-4 md:border-none">
            {/* Mobile header */}
            <button
                className="flex justify-between items-center w-full md:hidden"
                onClick={() => setOpen(!open)}
            >
                <h3 className="font-bold font-oswald text-[15px]">{title}</h3>
                <span className="text-xl">
                    {open ? <FiMinus /> : <GoChevronDown />}
                </span>
            </button>

            {/* Nội dung */}
            <div
                className={`overflow-hidden transition-all duration-300 ease-in-out 
            ${open ? "max-h-96 mt-3" : "max-h-0"}
            md:max-h-full md:mt-0 md:block
          `}
            >
                <h3 className="font-bold font-oswald text-lg hidden md:block mb-5">{title}</h3>
                <ul className="space-y-4 text-[-15px] font-quicksand">{children}</ul>
            </div>
        </div>
    );
};
const Footer = () => {
    return (
        <div>
            <div className="h-auto py-10 lg:h-60 bg-footer-bg bg-cover bg-center bg-[rgba(0,0,0,0.5)] bg-blend-darken flex items-center justify-center text-white">

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
                    <div className="flex flex-col md:flex-row items-start md:items-center gap-3 basis-full md:basis-[65%]">
                        <div className="flex items-center gap-2 shrink-0">
                            <IoMailOutline className="text-xl" />
                            <span className="text-black text-[15px] font-quicksand">ĐĂNG KÝ NHẬN TIN:</span>
                        </div>

                        <div className="flex border rounded-md overflow-hidden h-[40px] w-full md:w-full">
                            <input
                                type="email"
                                placeholder="Nhập email của bạn"
                                className="px-4 text-base outline-none flex-grow lg:w-1/2"
                            />
                            <button className="bg-primary text-white px-6 text-sm hover:bg-green-700 whitespace-nowrap">
                                Đăng ký
                            </button>
                        </div>
                    </div>

                    <div className="flex flex-col md:flex-row md:items-center gap-3">
                        <span className="text-black font-quicksand">KẾT NỐI VỚI CHÚNG TÔI</span>
                        <div className="flex gap-3">
                            <a href="#" className="bg-primary p-2 rounded-sm text-white">
                                <FaFacebookF size={20} />
                            </a>
                            <a href="#" className="bg-primary p-2 rounded-sm text-white">
                                <FaInstagram size={20} />
                            </a>
                            <a href="#" className="bg-primary p-2 rounded-sm text-white">
                                <FaYoutube size={20} />
                            </a>
                        </div>
                    </div>
                </div>

                <hr />

                <div className="container text-[15px] mx-auto px-4  grid grid-cols-1 md:grid-cols-6 gap-6">
                    {/* Phần Logo */}
                    <div className="md:col-span-3 lg:pb-10">
                        <div className="w-[25%]">
                            <img src={logo} alt="Logo" className="w-full h-full object-cover" />
                        </div>
                        <p className="mb-5 text-justify leading-relaxed lg:w-[85%] w-full">
                            Quick Food phục vụ các món ăn truyền thống và sáng tạo của Nhật Bản. Bầu không khí bình dị trong khi thiết kế hiện đại và cao cấp góp phần mang đến trải nghiệm ăn uống thư giãn và thú vị.
                        </p>

                        <img src={logo_bct} alt="Đã thông báo" className="w-[190px] mb-[18px]" />
                    </div>

                    {/* Phần Chính sách */}
                    <FooterDropdown title="CHÍNH SÁCH">
                        <>
                            <li><a href="#">Tìm kiếm</a></li>
                            <li><a href="#">Giới thiệu</a></li>
                            <li><a href="#">Chính sách đổi trả</a></li>
                            <li><a href="#">Chính sách bảo mật</a></li>
                            <li><a href="#">Liên hệ</a></li>
                        </>
                    </FooterDropdown>
                    {/* Phần Menu */}

                    <FooterDropdown title="MENU">
                        <>
                            <li><a href="#">Sản phẩm khuyến mãi</a></li>
                            <li><a href="#">Sản phẩm nổi bật</a></li>
                            <li><a href="#">Tất cả sản phẩm</a></li>
                        </>
                    </FooterDropdown>

                    {/* Phần Về Chúng Tôi */}
                    <FooterDropdown title="VỀ CHÚNG TÔI">
                        <>
                            <li><a href="#">Trang chủ</a></li>
                            <li><a href="#">Thực đơn</a></li>
                            <li><a href="#">Giới thiệu</a></li>
                            <li><a href="#">Liên hệ</a></li>
                        </>
                    </FooterDropdown>

                </div>


                <div className="border-t py-4 text-center text-gray-500">
                    &copy; 2025. Copyright by CozyGroup
                </div>
            </div>
        </div>
    );
}

export default Footer;

