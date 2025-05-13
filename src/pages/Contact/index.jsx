import React, { useState } from "react";
import Navigation from "../../components/ui/Navigation";

const Contact = () => {
    const [selected, setSelected] = useState("");
    return (
        <>
            <Navigation items={[
                { label: 'Trang chủ', href: '/' },
                { label: "Liên hệ" }
            ]} />
            <div className="w-full lg:px-[30px] flex flex-col lg:flex-row">
                <div className="w-full lg:w-1/2 px-[15px]">
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3929.4204947420635!2d105.75565247527679!3d9.982081490122432!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31a08906415c355f%3A0x416815a99ebd841e!2zVHLGsOG7nW5nIENhbyDEkeG6s25nIEZQVCBQb2x5dGVjaG5pYw!5e0!3m2!1svi!2s!4v1746926810532!5m2!1svi!2s" className="w-full h-[300px] lg:h-[1105px]" ></iframe>
                </div>
                <div className="w-full lg:w-1/2 px-[20px] lg:px-[60px] py-[30] lg:py-[50px]">
                    <h1 className="text-primary font-oswald text-[28px] tracking-[0.8px] font-normal">Liên hệ</h1>
                    <div className="mt-[30px] mb-[40px] w-[50px] h-[4px] bg-primary"></div>
                    <ul className="space-y-6">
                        <li>
                            <p className="text-[#666666] font-quicksand">Địa chỉ chúng tôi</p>
                            <p className="text-[#333333] font-quicksand"><strong>Đ. Số 22, Thường Thạnh, Cái Răng, Cần Thơ, Việt Nam</strong></p>
                        </li>
                        <li>
                            <p className="text-[#666666] font-quicksand">Email chúng tôi</p>
                            <p className="text-[#333333] font-quicksand"><strong>CozyGroup@gmail.com</strong></p>
                        </li>
                        <li>
                            <p className="text-[#666666 font-quicksand]">Điện thoại</p>
                            <p className="text-[#333333] font-quicksand"><strong>0123456789</strong></p>
                        </li>
                        <li>
                            <p className="text-[#666666] font-quicksand">Thời gian làm việc</p>
                            <p className="text-[#333333] font-quicksand"><strong>Thứ 2 đến Thứ 6 từ 8h đến 18h; Thứ 7 và Chủ nhật từ 8h00 đến 17h00</strong></p>
                        </li>
                    </ul>
                    <h2 className="text-primary mt-[35px] mb-[30px] text-[24px] font-oswald tracking-[0.8px] font-normal">Gửi thắc mắc cho chúng tôi</h2>
                    <div className="mt-[30px] mb-[40px] w-[30px] h-[3px] bg-primary"></div>
                    <form className="flex flex-col gap-4">
                        <input type="text" placeholder="Tên của bạn" className="border border-[#e7e7e7]-300 h-[45px] font-medium bg-[#fbfbfb] text-[#333333] px-5" />
                        <div className="flex flex-col lg:flex-row gap-4">
                            <input type="email" placeholder="Email của bạn" className="w-full lg:w-1/2 border border-[#e7e7e7]-300 h-[45px] font-medium bg-[#fbfbfb] text-[#333333] px-5" />
                            <input type="text" placeholder="Số điện thoại của bạn" className="w-full lg:w-1/2 border border-[#e7e7e7]-300 h-[45px] font-medium bg-[#fbfbfb] text-[#333333] px-5" />
                        </div>
                        <select
                            value={selected}
                            onChange={(e) => setSelected(e.target.value)}
                            className={`border border-[#e7e7e7] bg-[#fbfbfb] p-5 font-medium w-full ${selected === "" ? "text-gray-400" : "text-[#333333]"
                                }`}
                        >
                            <option value="" disabled hidden>
                                Chọn lý do liên hệ
                            </option>
                            <option value="1">Chất lượng món ăn</option>
                            <option value="2">Dịch vụ phục vụ</option>
                            <option value="3">Không gian / trải nghiệm</option>
                            <option value="4">Đơn hàng bị thiếu / sai món</option>
                            <option value="5">Thái độ nhân viên</option>
                            <option value="6">Giao hàng chậm</option>
                            <option value="7">Hợp tác kinh doanh / nhượng quyền</option>
                        </select>
                        <textarea rows={5} placeholder="Nội dung" className="border border-[#e7e7e7]-300 font-medium bg-[#fbfbfb] text-[#333333] p-5"></textarea>
                        <p className="font-quicksand text-[#333333] font-normal">This site is protected by reCAPTCHA and the Google Privacy Policy and Terms of Service apply.</p>
                        <button type="submit" className="bg-[#096743] text-white rounded-[30px] px-[50px] py-[11px] text-[14px] max-w-[220px] font-normal font-oswald tracking-[0.8px] inline-block hover:bg-[#FF0000] focus:bg-[#FF0000] active:bg-[#FF0000] focus:outline-none focus:shadow-none mb-[50px] lg:mb-0"
                        >GỬI CHO CHÚNG TÔI</button>
                    </form>
                </div>
            </div>
        </>
    )

}
export default Contact;