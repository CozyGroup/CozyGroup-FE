import Navigation from "../../components/ui/Navigation";
import AccountSidebar from "../../components/ui/AccountSidebar";
import { GoArrowDown, GoArrowUp } from "react-icons/go";

const Wallet = () => {
    return (
        <>
            <Navigation items={[
                { label: 'Trang chủ', href: '/' },
                { label: "Tài khoản", href: '/account' },
                { label: "Ví mua hàng", href: '/account/wallet' },
            ]} />
            <div className="w-full lg:px-[60px] px-[20px] lg:py-[50px] py-[30px] flex flex-col lg:flex-row">
                <AccountSidebar />
                <div className="w-full">
                    <h1 className="text-primary font-quicksand text-[19px] font-bold mt-[20px] lg:mt-0">VÍ MUA HÀNG</h1>
                    <div className="rounded-[20px] bg-[#396D44] mt-5">
                        <p className="text-center text-[#ffffff] lg:pt-[23px] pt-[17px] lg:pb-4">Số dư khả dụng</p>
                        <h2 className="text-center text-[#ffffff] lg:pb-[40px] pb-[20px] text-[29px] font-bold">100.000 VNĐ</h2>
                    </div>
                    <h1 className="mt-[22px] font-bold font-quicksand text-[19px] border-b pb-3">LỊCH SỬ GIAO DỊCH</h1>
                    <div className="mt-4 space-y-4">
                        <ul className="space-y-4">
                            <li className="flex flex-col lg:flex-row justify-between items-start py-4 border-b border-gray-100 w-full">
                                <div className="flex items-center w-full">
                                    <div className="rounded-full border border-[#D9D9D9] p-3 mr-4 flex items-center justify-center bg-[#E8F5E9] text-green-500">
                                        <GoArrowUp className="text-lg" />
                                    </div>
                                    <div className="flex-1 min-w-0">
                                        <div className="font-medium flex flex-wrap items-center">
                                            <span className="text-[19px] font-quicksand font-semibold block">
                                                Hoàn tiền vì huỷ đơn hàng #XYZ
                                            </span>
                                        </div>
                                        <div className="text-sm text-gray-500 mt-1 flex flex-wrap items-center gap-2">
                                            <span>22/04/2025 - 09:55</span>
                                        </div>
                                    </div>
                                    <div className="lg:mt-0 lg:ml-4 flex items-center justify-center lg:self-center">
                                        <span className="font-bold text-green-600 text-[20px] lg:text-[25px] font-quicksand whitespace-nowrap text-right">
                                            +299.000 VNĐ
                                        </span>
                                    </div>
                                </div>
                            </li>
                            <li className="flex flex-col lg:flex-row justify-between items-start py-4 border-b border-gray-100 w-full">
                                <div className="flex items-center w-full">
                                    <div className="rounded-full border border-[#D9D9D9] p-3 mr-4 flex items-center justify-center bg-red-100 text-red-600">
                                        <GoArrowDown className="text-lg" />
                                    </div>
                                    <div className="flex-1 min-w-0">
                                        <div className="font-medium flex flex-wrap items-center">
                                            <span className="text-[19px] font-quicksand font-semibold block">
                                                Hoàn tiền vì huỷ đơn hàng #XYZ
                                            </span>
                                        </div>
                                        <div className="text-sm text-gray-500 mt-1 flex flex-wrap items-center gap-2">
                                            <span>22/04/2025 - 09:55</span>
                                        </div>
                                    </div>
                                    <div className="lg:mt-0 lg:ml-4 flex items-center justify-center lg:self-center">
                                        <span className="font-bold text-red-500 text-[20px] lg:text-[25px] font-quicksand whitespace-nowrap text-right">
                                            -299.000 VNĐ
                                        </span>
                                    </div>
                                </div>
                            </li>
                            <li className="flex flex-col lg:flex-row justify-between items-start py-4 border-b border-gray-100 w-full">
                                <div className="flex items-center w-full">
                                    <div className="rounded-full border border-[#D9D9D9] p-3 mr-4 flex items-center justify-center bg-[#E8F5E9] text-green-500">
                                        <GoArrowUp className="text-lg" />
                                    </div>
                                    <div className="flex-1 min-w-0">
                                        <div className="font-medium flex flex-wrap items-center">
                                            <span className="text-[19px] font-quicksand font-semibold block">
                                                Hoàn tiền vì huỷ đơn hàng #XYZ
                                            </span>
                                        </div>
                                        <div className="text-sm text-gray-500 mt-1 flex flex-wrap items-center gap-2">
                                            <span>22/04/2025 - 09:55</span>
                                        </div>
                                    </div>
                                    <div className="lg:mt-0 lg:ml-4 flex items-center justify-center lg:self-center">
                                        <span className="font-bold text-green-600 text-[20px] lg:text-[25px] font-quicksand whitespace-nowrap text-right">
                                            +299.000 VNĐ
                                        </span>
                                    </div>
                                </div>
                            </li>
                            <li className="flex flex-col lg:flex-row justify-between items-start py-4 border-b border-gray-100 w-full">
                                <div className="flex items-center w-full">
                                    <div className="rounded-full border border-[#D9D9D9] p-3 mr-4 flex items-center justify-center bg-red-100 text-red-600">
                                        <GoArrowDown className="text-lg" />
                                    </div>
                                    <div className="flex-1 min-w-0">
                                        <div className="font-medium flex flex-wrap items-center">
                                            <span className="text-[19px] font-quicksand font-semibold block">
                                                Hoàn tiền vì huỷ đơn hàng #XYZ
                                            </span>
                                        </div>
                                        <div className="text-sm text-gray-500 mt-1 flex flex-wrap items-center gap-2">
                                            <span>22/04/2025 - 09:55</span>
                                        </div>
                                    </div>
                                    <div className="lg:mt-0 lg:ml-4 flex items-center justify-center lg:self-center">
                                        <span className="font-bold text-red-500 text-[20px] lg:text-[25px] font-quicksand whitespace-nowrap text-right">
                                            -299.000 VNĐ
                                        </span>
                                    </div>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Wallet;