import { useState } from "react";
import { FaPhoneAlt, FaSearch, FaUser, FaShoppingCart, FaBars, FaTimes } from "react-icons/fa";
import CircleIcon from "../../ui/CircleIcon";
import logo from "../../../assets/image/logo/logo-1.png"
import { Link } from "react-router-dom";

const Header = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <div className="w-full">
            <div className="bg-primary text-white text-sm text-center py-2 font-quicksand">
                Ưu đãi nhất năm - chọn món nhé
            </div>

            <div className="flex items-center justify-between px-5 py-4 bg-white relative">
                {/* Hamburger icon (mobile) */}
                <div className="flex">
                    <div className="mt-5 md:hidden text-2xl text-text" onClick={() => setMenuOpen(!menuOpen)}>
                        {menuOpen ? <FaTimes /> : <FaBars />}
                    </div>
                    <div className="w-[160px] h-[70px] overflow-hidden">
                        <img src={logo} alt="Logo" className="w-full h-full object-cover" />
                    </div>
                </div>

                <div className="flex  md:hidden gap-4 mt-2">
                    <Link to="#"><CircleIcon icon={<FaUser />} /></Link>
                    <Link to="#"><CircleIcon icon={<FaShoppingCart />} /></Link>
                    <Link to="#"><CircleIcon icon={<FaSearch />} /></Link>
                </div>
               
                {/* Menu (desktop) */}
                <nav className="hidden md:flex gap-6 text-text font-oswald text-[13px]">
                    <Link to="/" className="hover:text-primary">TRANG CHỦ</Link>
                    <Link to="/menu" className="hover:text-primary">THỰC ĐƠN</Link>
                    <Link to="/about" className="hover:text-primary">GIỚI THIỆU</Link>
                    <Link to="/contact" className="hover:text-primary">LIÊN HỆ</Link>
                    <Link to="reservation" className="hover:text-primary">ĐẶT BÀN</Link>
                </nav>

                {/* Actions (desktop) */}
                <div className="hidden md:flex items-center gap-4">
                    <div className="flex items-center gap-2 text-text font-quicksand">
                        <FaPhoneAlt className="text-primary w-[30px] h-[30px]" />
                        <div>
                            <span>Liên hệ đặt món</span><br />
                            <span className="text-primary font-bold">0123.456.789</span>
                        </div>
                    </div>
                    <div className="flex items-center gap-2">
                        <Link to="#"><CircleIcon icon={<FaSearch />} /></Link>
                        <Link to="#"><CircleIcon icon={<FaUser />} /></Link>
                        <Link to="#"><CircleIcon icon={<FaShoppingCart />} /></Link>
                    </div>
                    <button className="bg-primary text-white px-4 py-2 rounded-full font-quicksand h-[40px] text-[13px]">
                        ĐẶT MÓN ONLINE
                    </button>
                </div>
                
            </div>
             <div className="md:hidden m-auto w-full px-5 mb-4">
                    <div className="relative w-full ">
                        <input
                            type="text"
                            placeholder="Tìm kiếm..."
                            className="w-full pl-4  py-2 border border-gray-300 rounded-[5px] focus:outline-none "
                        />
                        {/* <!-- Icon kính lúp --> */}
                        <svg
                            className="absolute right-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-black pointer-events-none"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                        >
                            <path
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                stroke-width="2"
                                d="M21 21l-4.35-4.35M17 11a6 6 0 11-12 0 6 6 0 0112 0z"
                            />
                        </svg>
                    </div>

                </div>
            {/* Mobile menu dropdown */}
            {menuOpen && (
                <div className="md:hidden bg-white px-6 pb-4 text-text font-oswald text-[13px] flex flex-col gap-4 border-t">
                    <Link to="#" className="hover:text-primary">TRANG CHỦ</Link>
                    <Link to="#" className="hover:text-primary">THỰC ĐƠN</Link>
                    <Link to="#" className="hover:text-primary">GIỚI THIỆU</Link>
                    <Link to="#" className="hover:text-primary">LIÊN HỆ</Link>

                    <div className="flex items-center gap-2 font-quicksand mt-2">
                        <FaPhoneAlt className="text-primary w-[24px] h-[24px]" />
                        <div>
                            <span>Gọi món: </span>
                            <span className="text-primary font-bold">0123.456.789</span>
                        </div>
                    </div>
                    <button className="bg-primary text-white px-4 py-2 rounded-full font-quicksand h-[40px] text-[13px] mt-2">
                        ĐẶT MÓN ONLINE
                    </button>
                </div>
            )}
        </div>
    );
};

export default Header;
