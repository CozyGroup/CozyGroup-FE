import Diemtam1 from '../../assets/image/imgs/1_633df950ecd9499e85d4bd0ea6263741_grande.webp'
import Diemtam2 from '../../assets/image/imgs/2_fad2e5c563514574a03ddca3d5084809_grande.webp'
import Diemtam3 from '../../assets/image/imgs/3_5cf534a2ff524c2fa23ab7875647786c_grande.webp'
import Diemtam4 from '../../assets/image/imgs/4_a754f8f183ae410bb9b1cdb23d5df0d3_grande.webp'
import Diemtam5 from '../../assets/image/imgs/8_132c77e7f7b84eb093fd590b4ebc8d4d_grande.webp'
import About from '../../assets/image/imgs/home_aboutus_img.jpg'
import { GrAdd } from "react-icons/gr";
import Banner from '../../assets/image/imgs/home_bannerslider_1_picture.webp'

const Home = () => {
    return (
        <>
            <main className="">
                <section>
                    <div className="Banner">
                        <img src={Banner} alt="" />
                    </div>
                </section>
                <section>
                    <div className=''>
                        <div className='hidden md:block'>
                            <h1 className='font-oswald text-4xl text-center text-primary mt-[5%]'>Thực đơn</h1>
                        </div>
                        <div className='Mobile'>
                            <div className='md:hidden bg-[#EDEDED] h-[90px] flex justify-center items-center'>
                                <h1 className='font-oswald text-4xl text-center text-primary'>Thực đơn</h1>
                            </div>

                            <div className='md:hidden text-center h-[65px] overflow-x-auto flex justify-center items-center'>
                                <div className='flex gap-[8%] px-4 w-max'>
                                    <p className='whitespace-nowrap'>Điểm tâm</p>
                                    <p className='whitespace-nowrap'>Cháo - Hủ tiếu - Mì</p>
                                    <p className='whitespace-nowrap'>Cơm</p>
                                    <p className='whitespace-nowrap'>Món chay</p>
                                    <p className='whitespace-nowrap'>Món nước</p>
                                </div>
                            </div>
                        </div>
                        <div className='px-[4%] mt-[2%]'>
                            <div className='flex gap-x-[30px]'>
                                <div className='MenuLeft hidden md:block w-[400px] h-[275px] border-2 rounded-xl px-6 py-3 font-quicksand sticky top-[50px]'>
                                    <div className='h-[40px] border-b border-dashed border-gray-400 w-full my-2 flex items-center hover:text-red-600 hover:border-red-600'>
                                        <p>Điểm tâm</p>
                                    </div>
                                    <div className='h-[40px] border-b border-dashed border-gray-400 w-full my-2 flex items-center hover:text-red-600 hover:border-red-600'>
                                        <p>Cháo - Hủ tiếu - Mì</p>
                                    </div>
                                    <div className='h-[40px] border-b border-dashed border-gray-400 w-full my-2 flex items-center hover:text-red-600 hover:border-red-600'>
                                        <p>Cơm</p>
                                    </div>
                                    <div className='h-[40px] border-b border-dashed border-gray-400 w-full my-2 flex items-center hover:text-red-600 hover:border-red-600'>
                                        <p>Món chay</p>
                                    </div>
                                    <div className='h-[40px] w-full my-2 flex items-center hover:text-red-600'>
                                        <p>Món nước</p>
                                    </div>
                                </div>
                                <div>
                                    <div className='MenuCenter border-2 rounded-xl flex-1 overflow-y-auto md:w-100'>
                                        <div className='px-[15px] pb-[20px] pt-[15px]'>
                                            <p className='font-oswald text-[22px] flex items-center justify-center'>Điểm tâm</p>
                                        </div>
                                        <hr />
                                        <div className='w-full border-b border-dashed border-gray-300 flex items-center px-[3%] py-4 gap-4'>
                                            <img
                                                className='w-[80px] sm:w-[100px] md:w-[120px] h-auto object-cover flex-shrink-0'
                                                src={Diemtam1}
                                                alt="Điểm Tâm 1"
                                            />

                                            <div className='flex flex-col justify-between w-full'>
                                                <p className='font-oswald text-primary text-[15px] hover:text-red-600 truncate'>
                                                    Bánh Bao Kim Sa
                                                </p>

                                                <p className='font-quicksand text-[13px] text-gray-600 mt-1 line-clamp-2'>
                                                    Bánh bao kim sa trứng muối là món ngon dễ làm, hương vị lại cực gây nghiện luôn, mỗi lần mình phải ăn tận 2 cái...
                                                </p>

                                                <div className='flex items-center justify-between mt-3'>
                                                    <p className='font-oswald text-[15px] text-red-500 font-semibold'>55,000đ</p>

                                                    <button className='w-8 h-8 rounded-full bg-primary text-white flex items-center justify-center'>
                                                        <span className=''><GrAdd /></span>
                                                    </button>
                                                </div>
                                            </div>
                                        </div>

                                        <div className='w-full border-b border-dashed border-gray-300 flex items-center px-[3%] py-4 gap-4'>
                                            <img
                                                className='w-[80px] sm:w-[100px] md:w-[120px] h-auto object-cover flex-shrink-0'
                                                src={Diemtam2}
                                                alt="Điểm Tâm 1"
                                            />

                                            <div className='flex flex-col justify-between w-full'>
                                                <p className='font-oswald text-primary text-[15px] hover:text-red-600 truncate'>
                                                    Bánh Bao Kim Sa
                                                </p>

                                                <p className='font-quicksand text-[13px] text-gray-600 mt-1 line-clamp-2'>
                                                    Bánh bao kim sa trứng muối là món ngon dễ làm, hương vị lại cực gây nghiện luôn, mỗi lần mình phải ăn tận 2 cái...
                                                </p>

                                                <div className='flex items-center justify-between mt-3'>
                                                    <p className='font-oswald text-[15px] text-red-500 font-semibold'>55,000đ</p>

                                                    <button className='w-8 h-8 rounded-full bg-primary text-white flex items-center justify-center'>
                                                        <span className=''><GrAdd /></span>
                                                    </button>
                                                </div>
                                            </div>
                                        </div>

                                        <div className='w-full border-b border-dashed border-gray-300 flex items-center px-[3%] py-4 gap-4'>
                                            <img
                                                className='w-[80px] sm:w-[100px] md:w-[120px] h-auto object-cover flex-shrink-0'
                                                src={Diemtam3}
                                                alt="Điểm Tâm 1"
                                            />

                                            <div className='flex flex-col justify-between w-full'>
                                                <p className='font-oswald text-primary text-[15px] hover:text-red-600 truncate'>
                                                    Bánh Bao Kim Sa
                                                </p>

                                                <p className='font-quicksand text-[13px] text-gray-600 mt-1 line-clamp-2'>
                                                    Bánh bao kim sa trứng muối là món ngon dễ làm, hương vị lại cực gây nghiện luôn, mỗi lần mình phải ăn tận 2 cái...
                                                </p>

                                                <div className='flex items-center justify-between mt-3'>
                                                    <p className='font-oswald text-[15px] text-red-500 font-semibold'>55,000đ</p>

                                                    <button className='w-8 h-8 rounded-full bg-primary text-white flex items-center justify-center'>
                                                        <span className=''><GrAdd /></span>
                                                    </button>
                                                </div>
                                            </div>
                                        </div>

                                        <div className='w-full border-b border-dashed border-gray-300 flex items-center px-[3%] py-4 gap-4'>
                                            <img
                                                className='w-[80px] sm:w-[100px] md:w-[120px] h-auto object-cover flex-shrink-0'
                                                src={Diemtam4}
                                                alt="Điểm Tâm 1"
                                            />

                                            <div className='flex flex-col justify-between w-full'>
                                                <p className='font-oswald text-primary text-[15px] hover:text-red-600 truncate'>
                                                    Bánh Bao Kim Sa
                                                </p>

                                                <p className='font-quicksand text-[13px] text-gray-600 mt-1 line-clamp-2'>
                                                    Bánh bao kim sa trứng muối là món ngon dễ làm, hương vị lại cực gây nghiện luôn, mỗi lần mình phải ăn tận 2 cái...
                                                </p>

                                                <div className='flex items-center justify-between mt-3'>
                                                    <p className='font-oswald text-[15px] text-red-500 font-semibold'>55,000đ</p>

                                                    <button className='w-8 h-8 rounded-full bg-primary text-white flex items-center justify-center'>
                                                        <span className=''><GrAdd /></span>
                                                    </button>
                                                </div>
                                            </div>
                                        </div>

                                        <div className='w-full border-b border-dashed border-gray-300 flex items-center px-[3%] py-4 gap-4'>
                                            <img
                                                className='w-[80px] sm:w-[100px] md:w-[120px] h-auto object-cover flex-shrink-0'
                                                src={Diemtam5}
                                                alt="Điểm Tâm 1"
                                            />

                                            <div className='flex flex-col justify-between w-full'>
                                                <p className='font-oswald text-primary text-[15px] hover:text-red-600 truncate'>
                                                    Bánh Bao Kim Sa
                                                </p>

                                                <p className='font-quicksand text-[13px] text-gray-600 mt-1 line-clamp-2'>
                                                    Bánh bao kim sa trứng muối là món ngon dễ làm, hương vị lại cực gây nghiện luôn, mỗi lần mình phải ăn tận 2 cái...
                                                </p>

                                                <div className='flex items-center justify-between mt-3'>
                                                    <p className='font-oswald text-[15px] text-red-500 font-semibold'>55,000đ</p>

                                                    <button className='w-8 h-8 rounded-full bg-primary text-white flex items-center justify-center'>
                                                        <span className=''><GrAdd /></span>
                                                    </button>
                                                </div>
                                            </div>
                                        </div>

                                        <div className='py-5 flex justify-center'>
                                            <button className='font-oswald text-white bg-red-500 hover:bg-red-600 w-[170px] h-[44px] rounded-md'>XEM THÊM</button>
                                        </div>
                                    </div>
                                </div>

                                <div className='PayRight hidden md:block border-2 rounded-xl w-[600px] h-[175px] flex flex-col sticky top-[50px]'>
                                    <div className='h-[70px] bg-white font-quicksand text-[15px] flex items-center justify-center rounded-t-xl border-b-2'>
                                        Giỏ hàng của bạn đang trống
                                    </div>
                                    <div className="relative flex justify-center items-center z-10 -mt-2">
                                        <div className="w-6 h-6 bg-white rotate-45 absolute rounded-sm"></div>
                                        <div className="w-3 h-3 bg-primary rotate-45 absolute rounded-sm"></div>
                                    </div>
                                    <div className='h-[115px] w-full flex flex-col bg-[#f0f0f0f0] px-4 py-2 rounded-b-xl'>
                                        <div className='flex justify-between items-center flex-1'>
                                            <p className='text-[15px] font-quicksand'>Tổng cộng:</p>
                                            <p className='font-quicksand text-red-600 font-semibold text-[20px]'>0đ</p>
                                        </div>
                                        <div className='flex-1 flex items-center justify-center'>
                                            <button className='h-[40px] w-full rounded-md bg-red-500 font-quicksand text-white font-semibold'>
                                                THANH TOÁN
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section className='mt-[5%]'>
                    <div className='min-h-[800px] flex flex-col md:flex-row justify-center items-center gap-[30px] px-[5%] md:px-[5%] py-[5%] bg-[#fcfcfcfc]'>
                        {/* Nội dung chữ */}
                        <div className='w-full md:w-[50%]'>
                            <h2 className='font-oswald text-primary text-[24px] md:text-left'>KHÁM PHÁ</h2>
                            <h4 className='font-oswald text-primary text-[16px] md:text-left'>CÂU CHUYỆN CỦA QUICK DIMSUM</h4>

                            <div className='content mt-8 font-quicksand text-[15px] text-justify'>
                                <p>
                                    Trang giới thiệu giúp khách hàng hiểu rõ hơn về cửa hàng của bạn. Hãy cung cấp thông tin cụ thể về việc kinh doanh, về cửa hàng, thông tin liên hệ. Điều này sẽ giúp khách hàng cảm thấy tin tưởng khi mua hàng trên website của bạn.
                                </p>

                                <p className='mt-6'>Một vài gợi ý cho nội dung trang Giới thiệu:</p>

                                <ul className='list-disc list-inside mt-5 space-y-5'>
                                    <li>Bạn là ai</li>
                                    <li>Giá trị kinh doanh của bạn là gì</li>
                                    <li>Địa chỉ cửa hàng</li>
                                    <li>Bạn đã kinh doanh trong ngành hàng này bao lâu rồi</li>
                                    <li>Bạn kinh doanh ngành hàng online được bao lâu</li>
                                    <li>Đội ngũ của bạn gồm những ai</li>
                                    <li>Thông tin liên hệ</li>
                                    <li>Liên kết đến các trang mạng xã hội (Twitter, Facebook)</li>
                                </ul>

                                <p className='mt-5'>
                                    Bạn có thể chỉnh sửa hoặc xoá bài viết này tại đây hoặc thêm những bài viết mới trong phần quản lý Trang nội dung.
                                </p>
                            </div>
                        </div>

                        {/* Hình ảnh */}
                        <div className='w-full md:w-[50%] flex justify-center items-center mt-8 md:mt-0'>
                            <img src={About} alt="Giới thiệu" className='w-full h-auto rounded-xl' />
                        </div>
                    </div>
                </section>
                <section>
                    <div className='md:hidden'>
                        <p>
                            Món
                        </p>
                        <p>
                            0đ
                        </p>
                        <p>
                            Xem chi tiết
                        </p>
                    </div>
                </section>
            </main>
        </>
    )
}
export default Home;