import { useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'
const Cart = () => {
    const navigate = useNavigate();
    const routerBack = () => {
        navigate(-1)
    }
    return <div className='flex justify-center'>
        <div className="w-[650px] p-2">
            <div className="flex">
            <button onClick={() => routerBack()} className='text-red-600 text-sm flex-shrink-0'>Trở về</button>
                <div className="text-center text-red-600 text-sm flex-1 font-bold">Giỏ hàng</div>
            </div>
            <div className="w-full flex shadow-md rounded-md py-3 px-2 mt-4 relative">
            <i className="fa-solid fa-x absolute right-0 mr-3 font-bold"></i>
                <img className="h-[13rem] w-[13rem]" src="/cart1.png" alt="" />
                <div className="">
                    <h1 className='text-lg font-semibold'>Samsung Galaxy S22-Đen</h1>
                    <h3 className='text-red-500 font-semibold mt-2'>16.090.000đ<span className='text-gray-400 text-sm ml-2'>21.990.000đ</span><span className="bg-red-600 text-white rounded-md ml-2 text-xs p-2">Giảm 27%</span></h3>
                    <div className="flex font-semibold mt-2"><p>Chọn số lượng:</p><input type="number" min={1} name="" id="" className='w-9 border-2 border-[#ccc] ml-3' /></div>
                    <div className="bg-[#ccc] w-[350px] mt-2 p-2 rounded-md">
                        <p>-Chương trình khuyến mãi:</p>
                        <span>Dịch vụ phòng chờ hạng thương gia tại sân bay</span>
                        <span>Ưu đãi Galaxy gift lên đến 1.700.000đ (VieON VIP HBO GO, Zing MP3, Phúc Long, Galaxy Play)</span>
                    </div>
                </div>
            </div>
            <div className="w-full flex shadow-md rounded-md py-3 px-2 mt-4 relative">
            <i className="fa-solid fa-x absolute right-0 mr-3 font-bold"></i>
                <img className="h-[13rem] w-[13rem]" src="/cart2.png" alt="" />
                <div className="">
                    <h1 className='text-lg font-semibold'>Samsung Galaxy S22-Đen</h1>
                    <h3 className='text-red-500 font-semibold mt-2'>16.090.000đ<span className='text-gray-400 text-sm ml-2'>21.990.000đ</span><span className="bg-red-600 text-white rounded-md ml-2 text-xs p-2">Giảm 10%</span></h3>
                    <div className="flex font-semibold mt-2"><p>Chọn số lượng:</p><input  type="number" min={1} name="" id="" className='w-9 border-2 border-[#ccc] ml-3' /></div>
                </div>
            </div>
            <div className="w-full flex shadow-md rounded-md py-3 px-2 mt-4 relative">
            <i className="fa-solid fa-x absolute right-0 mr-3 font-bold"></i>
                <img className="h-[13rem] w-[13rem]" src="/cart3.png" alt="" />
                <div className="">
                    <h1 className='text-lg font-semibold '>Bao da Samsung Galaxy S22 Clearview - Đen</h1>
                    <h3 className='text-red-500 font-semibold mt-2'>16.090.000đ<span className='text-gray-400 text-sm ml-2'>21.990.000đ</span><span className="bg-red-600 text-white rounded-md ml-2 text-xs p-2">Giảm 0%</span></h3>
                    <div className="flex font-semibold mt-2"><p>Chọn số lượng:</p><input  type="number" min={1} name="" id="" className='w-9 border-2 border-[#ccc] ml-3' /></div>
                </div>
            </div>
            <div className="flex justify-between w-full mt-5">
                <p className='text-sm'>Tổng tiền tạm tính:</p>
                <p className='text-red-500 font-semibold'>17.820.000đ</p>
            </div>
            <button className='bg-[#FF3945] border-2 text-[#FFFFFF] w-full h-12 rounded-md hover:bg-white hover:border-[#FF3945] hover:text-[#FF3945] ease-linear transition-all mt-4'><a href="">Tiến hành đặt hàng</a></button>
            <button className='bg-[#FFFFFF] border-2 border-[#FF3945] text-[#FF3945] w-full h-12 rounded-md hover:text-white hover:bg-red-500 ease-linear transition-all mt-4'><a href="">Chọn thêm sản phẩm khác</a></button>
        </div>
    </div>
}

export default Cart