import React from "react";
import Navigation from "../../components/ui/Navigation";

const Login = () => {
    return (
        <>
            <Navigation
                items={[
                    { label: "Trang chủ", href: "/" },
                    { label: "Đăng Nhập" },
                ]}
            />

            <div className="min-h-screen bg-[#f7f7f7] flex justify-center items-center py-10 px-4 font-quicksand">
                <div className="bg-white w-full max-w-4xl rounded shadow-2xl flex flex-col md:flex-row overflow-hidden">
                    {/* Form bên trái */}
                    <div className="w-full md:w-1/2 p-8">
                        <h2 className="text-xl mb-6">ĐĂNG NHẬP TÀI KHOẢN</h2>
                        <input
                            type="email"
                            placeholder="Email"
                            className="w-full border border-gray-300 rounded px-4 py-2 mb-4"
                        />
                        <input
                            type="password"
                            placeholder="Mật khẩu"
                            className="w-full border border-gray-300 rounded px-4 py-2 mb-2"
                        />
                        <div className="text-center text-sm text-gray-500 mb-4 cursor-pointer hover:underline">
                            Quên mật khẩu?
                        </div>
                        <button className="w-full border  bg-[#096A4A] text-white py-2 rounded mb-4 transition-all hover:bg-[#FF0000]">
                            Đăng nhập
                        </button>
                        <p className="text-sm text-center mb-4">
                            Nếu chưa có tài khoản ?{" "}
                            <a href="/register" className="underline text-black">
                                Đăng ký tại đây
                            </a>
                        </p>
                        <p className="text-sm text-center text-gray-500 mb-2">Hoặc đăng nhập bằng</p>
                        <div className="flex justify-center">
                            <button className="flex items-center gap-2 bg-[#DB4437] text-white px-4 py-2 rounded hover:opacity-90">
                                <span className="text-white font-bold">G+</span> Google
                            </button>
                        </div>
                    </div>

                    {/* Quyền lợi bên phải */}
                    <div className="w-full md:w-1/2 bg-[#f7f7f7] p-8 border-t md:border-t-0 md:border-l">
                        <h3 className="font-semibold mb-4">Quyền lợi khi đăng ký thành viên</h3>
                        <div className="mt-12">
                            <ul className="text-sm space-y-2 text-black">
                                <li>Vận chuyển siêu tốc</li>
                                <li>Sản phẩm đa dạng</li>
                                <li>Đổi trả dễ dàng</li>
                                <li>Đăng ký tích điểm để được hoàn tiền</li>
                            </ul>
                        </div>
                        <div className="mt-10">
                            <button className="border  bg-[#096A4A] text-white px-6 py-2 rounded transition-all hover:bg-[#FF0000]">
                                Đăng nhập
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Login;
