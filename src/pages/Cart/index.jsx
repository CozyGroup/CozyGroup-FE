import Navigation from "../../components/ui/Navigation";
import React, { useState } from "react";
import { FaTrashAlt, FaArrowLeft } from "react-icons/fa";
import { GoX } from "react-icons/go";
import { HiArrowNarrowRight } from "react-icons/hi";
import product from "../../assets/image/product/product-1.png";

const Cart = () => {
    const [quantity, setQuantity] = useState(1);
    const price = 25000;
    
    const increment = () => setQuantity(quantity + 1);
    const decrement = () => setQuantity(quantity > 1 ? quantity - 1 : 1);

    return (
        <>
            <Navigation items={[
                { label: 'Trang chủ', href: '/' },
                { label: 'Giỏ hàng' }
            ]} />
            <div className="text-[15px] font-quicksand min-h-screen bg-white text-text px-4 md:px-20 py-10">
                <h1 className="text-[30px] font-bold font-oswald text-center text-primary mb-2">
                    Giỏ hàng của bạn
                </h1>
                <p className="text-center mb-3">
                    Có {quantity} sản phẩm trong giỏ hàng của bạn
                </p>
                <div className="w-20 border-b-2  border-[#515151] mx-auto mb-12" />

                <div className="grid md:grid-cols-3 gap-8">
                    <div className="md:col-span-2 space-y-4">
                        <div className="flex items-center justify-between border-b border-dashed border-[#BFBFBF] pb-4">
                            <div className="flex items-center gap-4">
                                <img
                                    src={product}
                                    alt="Coke Zero"
                                    className="w-16"
                                />
                                <div>
                                    <h2 className="text-[20px] font-oswald text-primary hover:text-button_hover">
                                        COKE ZERO 330ML
                                    </h2>
                                    <p>{price.toLocaleString()}₫</p>
                                    <div className="flex items-center mt-1">
                                        <button onClick={decrement} className="border px-2">
                                            <span className="font-semibold">-</span>
                                        </button>
                                        <span className="bg-[#D9D9D9] border border-[#D9D9D9] px-4">{quantity}</span>
                                        <button onClick={increment} className="border px-2">
                                            <span className="font-semibold">+</span>
                                        </button>
                                    </div>
                                </div>
                            </div>
                            <div className="flex flex-col items-end space-y-1">
                                <button className="text-xl hover:text-button_hover">
                                    <GoX />
                                </button>
                                <span>{(price * quantity).toLocaleString()}₫</span>
                            </div>
                        </div>

                        {/* Notes */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-6">
                            {/* Ghi chú đơn hàng */}
                            <div>
                                <h3 className="font-bold mb-2">Ghi chú đơn hàng</h3>
                                <textarea
                                    rows="5"
                                    placeholder="Ghi chú"
                                    className="w-full p-2 bg-[#D9D9D9] outline-none border-none focus:ring-0"
                                ></textarea>
                            </div>

                            {/* Chính sách mua hàng */}
                            <div className="hidden md:block">
                                <h3 className="font-bold mb-2">Chính sách mua hàng</h3>
                                <ul className="space-y-1 list-disc list-inside">
                                    <li> Sản phẩm được đổi 1 lần duy nhất, không hỗ trợ trả.</li>
                                    <li>Sản phẩm còn đủ tem mác, chưa qua sử dụng.</li>
                                    <li>Sản phẩm nguyên giá được đổi trong 30 ngày trên toàn hệ thống.</li>
                                    <li>
                                        Sản phẩm sale chỉ hỗ trợ đổi size (nếu cửa hàng còn) trong 7 ngày trên toàn hệ thống.
                                    </li>
                                </ul>
                            </div>
                        </div>

                    </div>

                    {/* Order Summary */}
                    <div className="border p-6 rounded-lg">
                        <h3 className="font-bold text-[20px] font-oswald text-primary mb-4 pb-3 border-b border-dashed border-[#BFBFBF]">
                            Thông tin đơn hàng
                        </h3>
                        <div className="flex justify-between mb-2 border-b border-dashed border-[#BFBFBF] pb-3">
                            <span>Tổng tiền:</span>
                            <span className="text-primary font-bold">
                                {(price * quantity).toLocaleString()}₫
                            </span>
                        </div>
                        <p className="mb-4">
                            Phí vận chuyển sẽ được tính ở trang thanh toán.<br />
                            Bạn cũng có thể nhập mã giảm giá ở trang thanh toán.
                        </p>

                        <button className="w-full bg-button text-white py-2 rounded hover:bg-button_hover mb-3">
                            THANH TOÁN
                        </button>

                        <button className="w-full flex justify-center items-center text-primary hover:text-button_hover">
                            <FaArrowLeft className="mr-2" /> Tiếp tục mua hàng
                        </button>
                    </div>
                </div>

                {/* Chính sách - chỉ hiện ở mobile */}
                <div className="block md:hidden mt-8">
                    <h3 className="font-bold mb-2">Chính sách mua hàng</h3>
                    <ul className="space-y-1 list-disc list-inside">
                        <li>Sản phẩm được đổi 1 lần duy nhất, không hỗ trợ trả.</li>
                        <li>Sản phẩm còn đủ tem mác, chưa qua sử dụng.</li>
                        <li>Sản phẩm nguyên giá được đổi trong 30 ngày trên toàn hệ thống.</li>
                        <li>
                            Sản phẩm sale chỉ hỗ trợ đổi size (nếu cửa hàng còn) trong 7 ngày trên toàn hệ thống.
                        </li>
                    </ul>
                </div>
            </div>
        </>
    );
};

export default Cart;
