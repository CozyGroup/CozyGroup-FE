import React, { useState } from "react";
// import chef from "../../assets/image/imgs/chef.png";
import image from "../../assets/image/imgs/collection_banner_image.webp";
import Navigation from "../../components/ui/Navigation";

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
                    <span className="text-gray-800 text-xl ">{isOpen ? "-" : "+"}</span>
                )}
            </div>

            {isOpen && <div className="pl-4 mt-1">{children}</div>}
        </div>
    );
};

const Menu = () => {
    const products = [
        {
            name: "Cơm thêm gạo nhật",
            prices: ["20,000đ"],
            status: "available",
            buttonText: "Đặt món +",
            imageUrl: "https://product.hstatic.net/200000193535/product/product-8_708311e368c641c999acdd42ecc964fb_1024x1024.jpg"
        },
        {
            name: "Mỳ cay truyền thống",
            prices: ["20,000đ", "25,000đ"],
            status: "discount",
            discount: "10%",
            imageUrl: "https://product.hstatic.net/200000193535/product/product-6_64e8980654cf433cbccf04e45bc97086_1024x1024.jpg",
            buttonText: "Đặt món +"
        },
        {
            name: "Trà sữa matcha",
            prices: ["20,000đ"],
            status: "available",
            buttonText: "Đặt món +",
            imageUrl: "https://product.hstatic.net/200000193535/product/product-6_64e8980654cf433cbccf04e45bc97086_1024x1024.jpg"
        },
        {
            name: "Cơm gà xối mỡ",
            prices: ["25,000đ"],
            status: "out-of-stock",
            buttonText: "Hết hàng",
            imageUrl: "https://product.hstatic.net/200000193535/product/product-6_64e8980654cf433cbccf04e45bc97086_1024x1024.jpg"
        },
        {
            name: "Bánh mì chả cá",
            prices: ["10,000đ", "12,000đ"],
            status: "discount",
            discount: "15%",
            imageUrl: "https://product.hstatic.net/200000193535/product/product-6_64e8980654cf433cbccf04e45bc97086_1024x1024.jpg"
        },
        {
            name: "Súp cua",
            prices: ["20,000đ"],
            status: "available",
            buttonText: "Đặt món +",
            imageUrl: "https://product.hstatic.net/200000193535/product/product-6_64e8980654cf433cbccf04e45bc97086_1024x1024.jpg"
        },
        {
            name: "Cơm thêm gạo nhật",
            prices: ["20,000đ"],
            status: "available",
            buttonText: "Đặt món +",
            imageUrl: "https://product.hstatic.net/200000193535/product/product-6_64e8980654cf433cbccf04e45bc97086_1024x1024.jpg"
        },
        {
            name: "Mỳ cay truyền thống",
            prices: ["20,000đ", "25,000đ"],
            status: "discount",
            discount: "10%",
            imageUrl: "https://product.hstatic.net/200000193535/product/product-6_64e8980654cf433cbccf04e45bc97086_1024x1024.jpg",
            buttonText: "Đặt món +"
        },
    ];

    return (
        <>
            <Navigation items={[{ label: 'Trang chủ', href: '/' }, { label: "Thực đơn" }]} />

            <div className="w-full p-6 my-10 text-text flex flex-col lg:flex-row gap-6 font-quicksand">
                <div className="block lg:hidden mb-6 px-4">
                    <details className="border border-gray-300 rounded-md overflow-hidden">
                        <summary className="bg-gray-100 px-4 py-2 font-semibold cursor-pointer">
                            Danh mục trang
                        </summary>
                        <div className="p-4">
                            <MenuItem title="Trang chủ" hasChildren={false} />
                            <MenuItem title="Thực đơn" hasChildren={true}>
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
                            <MenuItem title="Hệ thống cửa hàng" hasChildren={false} />
                            <MenuItem title="Liên hệ" hasChildren={false} />
                        </div>
                    </details>
                    <img
                            src={image}
                            alt="Minh họa menu"
                            className="w-full h-auto object-cover mt-2"
                        />
                </div>
                <div className="w-[280px] flex-col gap-4 mx-6 hidden lg:flex sticky top-24 h-fit">
                    <div className="border border-gray-300 p-4 overflow-y-auto">
                        <h2 className="text-primary font-semibold uppercase text-center text-[16px] border-b border-gray-800 pb-2 mb-3">
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
                    <img src={image} alt="Đầu bếp" className="shadow-md w-full object-cover" />
                </div>

                <div className="flex-1">
                    <h1 className="text-primary font-bold text-[28px] mb-6 text-center">TẤT CẢ SẢN PHẨM</h1>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                        {products.map((product, index) => (
                            <div
                                className={`bg-white p-3 sm:p-5 rounded-lg shadow-sm hover:shadow-md transition-all duration-200 relative border
                                ${product.status === 'out-of-stock' ? 'opacity-70 border-gray-300' : ''}
                                ${product.status === 'discount' ? 'border-red-500' : 'border-gray-200'}`}
                                style={{ minWidth: '180px' }}
                            >
                                {product.status === 'discount' && (
                                    <div className="absolute top-0 right-0 bg-red-500 text-white px-3 py-1 text-sm font-bold transform translate-x-2 -translate-y-2">
                                        {product.discount}
                                    </div>
                                )}

                                <img src={product.imageUrl} alt={product.name} className="w-full h-48 object-cover mb-4 rounded-md" />

                                <h3 className="font-bold text-lg mb-3 text-gray-800">
                                    {product.name}
                                </h3>

                                <div className="flex items-center gap-2 mb-4">
                                    {product.status === 'discount' ? (
                                        <>

                                            <p className="text-[#FF0000] font-semibold">{product.prices[1]}</p>
                                            <p className="line-through text-black text-sm">{product.prices[0]}</p>
                                        </>
                                    ) : (
                                        product.prices.map((price, i) => (
                                            <p key={i} className="text-[#FF0000] font-semibold">{price}</p>
                                        ))
                                    )}
                                </div>

                                <button
                                    className={`w-full py-2 rounded-md font-medium transition-colors
                                    ${product.status === 'available' || product.status === 'discount'
                                            ? 'bg-red-600 text-white hover:bg-red-700'
                                            : 'bg-gray-400 text-white cursor-not-allowed'}`}
                                    disabled={product.status === 'out-of-stock'}
                                >
                                    {product.status === 'out-of-stock' ? 'Hết hàng' : 'Đặt món +'}
                                </button>
                            </div>
                        ))}
                    </div>

                    <div className="text-center mt-10">
                        <button className="border border-red-600 text-red-600 px-8 py-3 rounded-md hover:bg-red-50 transition-colors">
                            Xem thêm sản phẩm
                        </button>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Menu;
