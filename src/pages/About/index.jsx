import React, { useState, useEffect } from "react";
import chef from "../../assets/image/imgs/chef.png";
import Navigation from "../../components/ui/Navigation";
import { HiChevronDown,HiChevronUp } from "react-icons/hi";

const MenuItem = ({ title, hasChildren, children, className = "" }) => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className={`mb-2 ${className}`}>
            <div
                className="flex items-center justify-between cursor-pointer hover:text-red-600 py-1 px-2"
                onClick={() => hasChildren && setIsOpen(!isOpen)}
            >
                <span className="text-[15px]">{title}</span>
                {hasChildren && (
                    <span className="text-gray-800 text-xl">{isOpen ? "-" : "+"}</span>
                )}
            </div>
            {isOpen && <div className="pl-4 mt-1">{children}</div>}
        </div>
    );
};

const About = () => {
    const [showMenu, setShowMenu] = useState(false);
    const [isDesktop, setIsDesktop] = useState(window.innerWidth >= 1024);

    useEffect(() => {
        const handleResize = () => setIsDesktop(window.innerWidth >= 1024);
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    return (
        <>
            <Navigation
                items={[
                    { label: "Trang chủ", href: "/" },
                    { label: "Giới thiệu" },
                ]}
            />
            <div className="text-[15px] font-quicksand min-h-screen bg-white text-text px-4 md:px-20 py-1 flex flex-col lg:flex-row gap-6">
               
                 <div className="w-[280px] hidden lg:block">
                     <div className="border border-gray-300 p-4 overflow-y-auto">
                        <h2 className="text-primary font-semibold uppercase text-center text-[16px] border-b  border-gray-800 pb-2 mb-3">
                            DANH MỤC TRANG
                        </h2>
                        <MenuItem title="Trang chủ" hasChildren={false} className="border-b border-dashed border-gray-700" />
                        <MenuItem title="Thực đơn" hasChildren={true} className="border-b border-dashed border-gray-700">
                            <MenuItem title="Mỳ cay" hasChildren={true}>
                                <MenuItem title="Mỳ cay truyền thống" hasChildren={false} />
                                <MenuItem title="Món thêm của mỳ cay" hasChildren={false} />
                            </MenuItem>
                            <MenuItem title="Món ăn khác" hasChildren={false} />
                            <MenuItem title="Nước uống" hasChildren={true}>
                                <MenuItem title="Trà sữa" hasChildren={false} />
                                <MenuItem title="Nước đóng chai" hasChildren={false} />
                                <MenuItem title="Topping trà sữa" hasChildren={false} />
                            </MenuItem>
                            <MenuItem title="Sản phẩm đóng gói" hasChildren={false} />
                        </MenuItem>
                        <MenuItem title="Hệ thống cửa hàng" hasChildren={false} className="border-b border-dashed border-gray-700" />
                        <MenuItem title="Liên hệ" hasChildren={false} className="border-b border-dashed border-gray-700" />

                    </div>
                    <img
                        src={chef}
                        alt="Đầu bếp"
                        className="shadow-md w-full object-cover"
                    />
                </div>
                {/* Sidebar/Menu */} 
                <div className="w-full lg:w-[280px] flex flex-col gap-4">
                    {/* Toggle button for mobile */}
                    <div className="lg:hidden border border-gray-300">
                        <button
                            onClick={() => setShowMenu(!showMenu)}
                            className="w-full p-3 flex justify-between items-center font-semibold uppercase text-[16px] text-primary"
                        >
                            <h2 className="text-primary font-semibold uppercase text-center text-[16px] ">
                                DANH MỤC TRANG
                            </h2>
                            <span>{showMenu ? <HiChevronUp className="text-xl" /> : <HiChevronDown className="text-xl" /> }</span>
                        </button>
                          <div className="border-b border-gray-800 pb-2 mb-3 mx-3"></div>
                          {/* Menu list, chỉ hiện khi showMenu=true hoặc đang ở desktop */}
                    {(showMenu || isDesktop) && (
                        <div>
                            <MenuItem
                                title="Trang chủ"
                                hasChildren={false}
                                className=""
                            />
                
                            <MenuItem
                                title="Thực đơn"
                                hasChildren={true}
                                className="border-b border-dashed border-gray-700"
                            >
                                <MenuItem title="Mỳ cay" hasChildren={true}>
                                    <MenuItem title="Mỳ cay truyền thống" hasChildren={false} />
                                    <MenuItem title="Món thêm của mỳ cay" hasChildren={false} />
                                </MenuItem>
                                <MenuItem title="Món ăn khác" hasChildren={false} />
                                <MenuItem title="Nước uống" hasChildren={true}>
                                    <MenuItem title="Trà sữa" hasChildren={false} />
                                    <MenuItem title="Nước đóng chai" hasChildren={false} />
                                    <MenuItem title="Topping trà sữa" hasChildren={false} />
                                </MenuItem>
                                <MenuItem title="Sản phẩm đóng gói" hasChildren={false} />
                            </MenuItem>
                            <MenuItem
                                title="Hệ thống cửa hàng"
                                hasChildren={false}
                                className="border-b border-dashed border-gray-700"
                            />
                            <MenuItem
                                title="Liên hệ"
                                hasChildren={false}
                                className="border-b border-dashed border-gray-700"
                            />
                        </div>
                    )}

                    </div>

                  
                    {/* Chef image chỉ hiển thị khi menu đang mở hoặc ở desktop */}
                   
                </div>

                {/* Main Content */}
                <div className="w-full lg:w-4/5">
                    <h1 className="text-primary font-bold text-[28px] mb-4">
                        Giới thiệu
                    </h1>
                    <div className="text-[16px] leading-[2.4]">
                        <p>
                            Cay - không chỉ là vị, mà là trải nghiệm. Bước chân vào CozyGroup,
                            bạn sẽ lập tức cảm nhận được sự khác biệt. Không gian bên trong
                            cuốn hút với thiết kế hiện đại, trẻ trung nhưng vẫn ấm cúng.
                        </p>
                        <p>
                            Cay ở đây không đơn thuần chỉ là vị. Cay là trải nghiệm. Bảng thực
                            đơn với 7 cấp độ cay sẽ thử thách bạn, xem bạn chinh phục được đến
                            đâu.
                        </p>
                        <p>
                            Ngay từ cấp 1 - bạn đã cảm nhận được sự khác biệt. Nước lèo đậm
                            vị, hương thơm đặc trưng của ớt tạo nên “cú nổ” vị giác ngay từ
                            lần đầu.
                        </p>
                        <p>
                            Nếu đủ “dạn dày” để chinh phục cấp cao nhất của Omega – trải
                            nghiệm sẽ mãnh liệt gấp bội. Hương vị cay xé nồng kích thích giác
                            quan, khiến bạn vừa muốn dừng lại, vừa không thể ngừng ăn.
                        </p>
                        <p>
                            Nhưng CozyGroup không chỉ có cay. Món ăn được đầu tư chất lượng:
                            nguyên liệu tươi ngon, chế biến tinh tế, sợi mì dai giòn, nước
                            lèo đậm đà.
                        </p>
                        <p>
                            Dịch vụ là điểm nhấn khác biệt. Nhân viên sẽ trở thành “người cố
                            vấn” đồng hành cùng bạn chinh phục từng cấp độ cay một cách trọn
                            vẹn.
                        </p>
                        <p>
                            CozyGroup là hành trình trải nghiệm đáng nhớ xoay quanh cay – vị
                            của thách thức và khám phá!
                        </p>
                    </div>
                </div>
            </div>
        </>
    );
};

export default About;
