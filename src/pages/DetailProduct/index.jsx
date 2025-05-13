import Diemtam1 from '../../assets/image/imgs/1_633df950ecd9499e85d4bd0ea6263741_grande.webp'
import Diemtam2 from '../../assets/image/imgs/2_fad2e5c563514574a03ddca3d5084809_grande.webp'
import Diemtam3 from '../../assets/image/imgs/3_5cf534a2ff524c2fa23ab7875647786c_grande.webp'
import Diemtam4 from '../../assets/image/imgs/4_a754f8f183ae410bb9b1cdb23d5df0d3_grande.webp'
import { GrBasket } from "react-icons/gr";
import { useState } from 'react'
import Navigation from "../../components/ui/Navigation";


const DetailProduct = () => {
    const [quantity, setQuantity] = useState(1);

    const increment = () => setQuantity(quantity + 1);
    const decrement = () => setQuantity(quantity > 1 ? quantity - 1 : 1);
    const render = (img, index) => {
        return (
            <img key={index} src={img} alt="thumb" className="w-full rounded-md object-cover" />
        )
    }
    return (
        <>
            <Navigation
                items={[
                    { label: "Trang chủ", href: "/" },
                    { label: "Chi tiết sản phẩm" },
                ]}
            />
            <main className='px-4 md:px-[8%]'>
                <section>
                    <div className='mt-[5%] flex flex-col md:flex-row md:px-[10%]'>
                        <div className="w-full md:w-1/2 flex flex-col md:flex-row gap-4 h-fit">
                            <div className="hidden md:flex flex-col gap-2 w-[20%]">
                                {[Diemtam1, Diemtam2, Diemtam3, Diemtam4].map(render)}
                            </div>
                            <div className="w-full md:w-[80%] flex justify-center">
                                <img src={Diemtam1} alt="main" className="w-[80%] h-auto md:w-[80%] md:h-[90%]" />
                            </div>
                        </div>
                        <div className='w-full md:w-[50%] overflow-y-auto'>
                            <h2 className='py-[3%] border-b border-dashed border-gray-400 w-full font-oswald text-xl text-primary flex items-center'>
                                Bánh Bao Kim Sa
                            </h2>
                            <p className='py-[3%] border-b border-dashed border-gray-400 w-full font-oswald text-lg text-red-600 flex items-center'>
                                0đ
                            </p>
                            <div className='py-[3%] border-b border-dashed border-gray-400 w-full'>
                                <p className='text-sm flex items-center'>Tiêu đề:</p>
                                <div className="space-y-2 mt-[2%]">
                                    <label className="flex items-center gap-2">
                                        <input type="checkbox" className="w-5 h-5 text-white bg-white border border-gray-300 rounded-sm accent-primary cursor-pointer" />
                                        <span className="text-gray-700 text-sm">Chọn món ăn 1</span>
                                        <input type="checkbox" className="w-5 h-5 text-white bg-white border border-gray-300 rounded-sm accent-primary cursor-pointer" />
                                        <span className="text-gray-700 text-sm">Chọn món ăn 2</span>
                                    </label>
                                </div>
                            </div>
                            <div className="py-[3%]">
                                <div className='flex items-center'>
                                    <button onClick={decrement} className="border border-[#D9D9D9] px-[2%] py-[1%] bg-[#D9D9D9]">
                                        <span className="font-semibold">-</span>
                                    </button>
                                    <span className="border border-[#D9D9D9] px-[5%] py-[1%]">{quantity}</span>
                                    <button onClick={increment} className="border border-[#D9D9D9] bg-[#D9D9D9] px-[2%] py-[1%]">
                                        <span className="font-semibold">+</span>
                                    </button>
                                </div>
                                <div className='py-[3%]'>
                                    <p className='font-quicksand'>Ghi chú:</p>
                                    <input type="text" placeholder="Thêm ghi chú" className="mt-[1%] h-[40px] w-[100%] border border-[#D9D9D9] focus:outline-none focus:border-[#D9D9D9] px-[1%] font-quicksand" />
                                    <div className='mt-[3%]'>
                                        <button className='font-oswald h-[50px] w-[100%] bg-primary text-base text-white'>ĐẶT MÓN</button>
                                    </div>
                                </div>
                                <div className='py-[3%]'>
                                    <div>
                                        <p className='text-sm text-primary font-oswald'>Mô tả</p>
                                    </div>
                                    <div className='font-quicksand text-base'>
                                        <p className='mt-[2%]'>
                                            Dinh dưỡng có vai trò quan trọng trong suốt quá trình tăng trưởng và phát triển.
                                        </p>
                                        <p className='mt-[2%]'>
                                            Chuyên gia dinh dưỡng đã có hơn 10 năm thành công với công thức phát triển chiều cao cho trẻ em. Nay phát triển công thức mới, với hệ dưỡng chất thiết yếu và cân đối giúp phát triển chiều cao, tăng cân khỏe mạnh, hỗ trợ phát triển trí não, tăng cường sức đề kháng và hỗ trợ tiêu hóa khỏe mạnh.
                                        </p>
                                        <p className='mt-[2%]'>
                                            FOS/Inulin: là chất xơ hào tan giúp duy trì sự cân bằng các vi khuẩn có lợi ở đường ruột. Ngoài việc giúp tối ưu hóa việc hấp thu các dưỡng chất, FOS/Inulin còn giúp giảm nguy cơ nhiễm trùng đường ruột và tiêu chảy, đồng thời chống táo bón, tăng hấp thu khoáng chất và góp phần làm cho hệ miễn dịch hoạt động tốt hơn.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section>
                    <div className='mt-[2%]'>
                        <h1 className='text-3xl font-bold text-center text-primary'>SẢN PHẨM TƯƠNG TỰ</h1>
                    </div>
                    <div className='grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-[30px] py-[5%]'>
                        <div className='w-full hover:shadow-lg px-[3%] py-[8%] hover:rounded-md'>
                            <img src={Diemtam1} alt="" />
                            <p className='text-[15px] font-quicksand'>Bánh Bao Kim Sa</p>
                            <p className='text-[15px] font-quicksand font-bold py-[2%]'>55,000đ</p>
                            <div className="flex items-center space-x-2">
                                <button className="flex items-center justify-center rounded-full bg-primary w-[40px] h-[40px] text-white">
                                    <GrBasket size={18} />
                                </button>
                                <p className="text-[14px] font-quicksand font-bold text-gray-800">Đặt món</p>
                            </div>
                        </div>
                        <div className='w-full hover:shadow-lg px-[3%] py-[8%] hover:rounded-md'>
                            <img src={Diemtam1} alt="" />
                            <p className='text-[15px] font-quicksand'>Bánh Bao Kim Sa</p>
                            <p className='text-[15px] font-quicksand font-bold py-[3%]'>55,000đ</p>
                            <div className="flex items-center space-x-2">
                                <button className="flex items-center justify-center rounded-full bg-primary w-[40px] h-[40px] text-white">
                                    <GrBasket size={18} />
                                </button>
                                <p className="text-[14px] font-quicksand font-bold text-gray-800">Đặt món</p>
                            </div>
                        </div>
                        <div className='w-full hover:shadow-lg px-[3%] py-[8%] hover:rounded-md'>
                            <img src={Diemtam1} alt="" />
                            <p className='text-[15px] font-quicksand'>Bánh Bao Kim Sa</p>
                            <p className='text-[15px] font-quicksand font-bold py-[3%]'>55,000đ</p>
                            <div className="flex items-center space-x-2">
                                <button className="flex items-center justify-center rounded-full bg-primary w-[40px] h-[40px] text-white">
                                    <GrBasket size={18} />
                                </button>
                                <p className="text-[14px] font-quicksand font-bold text-gray-800">Đặt món</p>
                            </div>
                        </div>
                        <div className='w-full hover:shadow-lg px-[3%] py-[8%] hover:rounded-md'>
                            <img src={Diemtam1} alt="" />
                            <p className='text-[15px] font-quicksand'>Bánh Bao Kim Sa</p>
                            <p className='text-[15px] font-quicksand font-bold py-[3%]'>55,000đ</p>
                            <div className="flex items-center space-x-2">
                                <button className="flex items-center justify-center rounded-full bg-primary w-[40px] h-[40px] text-white">
                                    <GrBasket size={18} />
                                </button>
                                <p className="text-[14px] font-quicksand font-bold text-gray-800">Đặt món</p>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
        </>
    )
}
export default DetailProduct;