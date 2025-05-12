import Diemtam1 from '../../assets/image/imgs/1_633df950ecd9499e85d4bd0ea6263741_grande.webp'
import Diemtam2 from '../../assets/image/imgs/2_fad2e5c563514574a03ddca3d5084809_grande.webp'
import Diemtam3 from '../../assets/image/imgs/3_5cf534a2ff524c2fa23ab7875647786c_grande.webp'
import Diemtam4 from '../../assets/image/imgs/4_a754f8f183ae410bb9b1cdb23d5df0d3_grande.webp'
import Diemtam5 from '../../assets/image/imgs/8_132c77e7f7b84eb093fd590b4ebc8d4d_grande.webp'
import { useState } from 'react'


const DetailProduct = () => {
    const [quantity, setQuantity] = useState(1);

    const increment = () => setQuantity(quantity + 1);
    const decrement = () => setQuantity(quantity > 1 ? quantity - 1 : 1);
    return (
        <main>
            <section>
                <div className='px-[10%] mt-[5%] w-100 flex'>
                    <div className='w-[10%]'>
                        <img src={Diemtam1} alt="" className='w-[80%]' />
                        <img src={Diemtam2} alt="" className='w-[80%]' />
                        <img src={Diemtam3} alt="" className='w-[80%]' />
                        <img src={Diemtam4} alt="" className='w-[80%]' />
                    </div>
                    <div className='w-[40%] flex justify-center'>
                        <img src={Diemtam1} alt="" className='w-[80%] h-[50%]' />
                    </div>
                    <div className='w-[50%]'>
                        <h2 className='py-[3%] border-b border-dashed border-gray-400 w-full font-oswald text-xl text-primary flex items-center'>
                            Bánh Bao Kim Sa
                        </h2>
                        <p className='py-[3%] border-b border-dashed border-gray-400 w-full font-oswald text-lg text-red-600 flex items-center'>
                            0đ
                        </p>
                        <div className='py-[3%] border-b border-dashed border-gray-400 w-full'>
                            <p className='text-sm flex items-center'>Tiêu đề:</p>
                            <div class="space-y-2 mt-[2%]">
                                <label class="flex items-center gap-2">
                                    <input
                                        type="checkbox"
                                        class="w-5 h-5 text-white bg-white border border-gray-300 rounded-sm accent-primary cursor-pointer"
                                    />
                                    <span class="text-gray-700 text-sm">Chọn món ăn 1</span>
                                    <input
                                        type="checkbox"
                                        class="w-5 h-5 text-white bg-white border border-gray-300 rounded-sm accent-primary cursor-pointer"
                                    />
                                    <span class="text-gray-700 text-sm">Chọn món ăn 2</span>
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
                                <input
                                    type="text"
                                    placeholder="Thêm ghi chú"
                                    className="mt-[1%] h-[40px] w-[60%] border border-[#D9D9D9] focus:outline-none focus:border-[#D9D9D9] px-[1%] font-quicksand"
                                />
                                <div className='mt-[3%]'>
                                    <button className='font-oswald h-[50px] w-[60%] bg-primary text-base text-white'>ĐẶT MÓN</button>
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
                <div>
                    <h1 className='text-2xl font-bold text-center text-primary'>SẢN PHẨM TƯƠNG TỰ</h1>
                </div>
                <div className='flex flex-row'>
                    <div className='basis-xl'>01</div>
                    <div>02</div>
                    <div>03</div>
                    <div>04</div>
                </div>
            </section>
        </main>
    )
}
export default DetailProduct;