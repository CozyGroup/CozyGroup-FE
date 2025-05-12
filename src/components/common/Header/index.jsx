import { FaPhoneAlt, FaSearch, FaUser, FaShoppingCart } from "react-icons/fa";
import CircleIcon from "../../ui/CircleIcon";
import logo from "../../../assets/image/logo/logo-1.png"
import { Link } from "react-router-dom";

const Header = () => {
    return (
        <div className="w-full">
            <div className="bg-primary text-white text-sm text-center py-2 font-quicksand">
                Ưu đãi nhất năm - chọn món nhé
            </div>

            <div className="flex items-center justify-between px-6 py-4 bg-white">
                <div className="w-[160px] h-[70px] overflow-hidden">
                    <img src={logo} alt="Logo" className="w-full h-full object-cover" />
                </div>

                <nav className="hidden md:flex gap-6 text-text font-oswald text-[13px] ">
                    <Link to="#" className="hover:text-primary">TRANG CHỦ</Link>
                    <Link to="#" className="hover:text-primary">THỰC ĐƠN</Link>
                    <Link to="#" className="hover:text-primary">GIỚI THIỆU</Link>
                    <Link to="#" className="hover:text-primary">LIÊN HỆ</Link>
                    <Link to="reservation" className="hover:text-primary">ĐẶT BÀN</Link>
                </nav>
                <div className="flex items-center gap-4">
                    <div className="flex items-center gap-2 text-text font-quicksand">
                        <FaPhoneAlt className="text-primary w-[30px] h-[30px]" />
                        <div>
                            <span>Liên hệ đặt món</span><br />
                            <span className="text-primary font-bold">
                                0123.456.789
                            </span>
                        </div>

                    </div>
                    <div className="flex items-center gap-2">
                        <Link to="#">
                            <CircleIcon icon={<FaSearch />} />
                        </Link>
                        <Link to="#">
                            <CircleIcon icon={<FaUser />} />
                        </Link>
                        <Link to="#">
                            <CircleIcon icon={<FaShoppingCart />} />
                        </Link>
                    </div>
                    <button className="bg-primary text-white px-4 py-2 rounded-full font-quicksand h-[40px] text-[13px]">
                        ĐẶT MÓN ONLINE
                    </button>
                </div>
            </div>
        </div>
    );
}

export default Header;

