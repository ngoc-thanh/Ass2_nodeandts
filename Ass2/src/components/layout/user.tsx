import { useEffect, useState } from 'react'
import { Outlet, useNavigate } from 'react-router-dom'
import { Link } from 'react-router-dom'
import { formSignup } from '../../model'
const UserLayout = () => {
    const [user, setUser] = useState<formSignup>({} as formSignup)

    const navigate = useNavigate()
    const logout = () => {
        alert("Dang xuat thanh cong")
        localStorage.clear();
    }
    const routeAdmin = () => {
        if (user.role !== "admin") {
            alert("Ban khong co quyen vao admin")
            return
        }
        navigate("/admin")
    }
    useEffect(() => {
        const getData = localStorage.getItem("users")
        if (getData) {
            const dataObject = JSON.parse(getData)
            setUser(dataObject)
        }
    }, [])
    return <>
        {/*Header*/}
        <header className='bg-red-500'>
            <div className="container mx-auto flex items-center gap-4 p-2">
                <img className='w-[50px]' src="/logo.png" alt="" />
                <div className="input-icon flex grow ">
                    <span className=" flex justify-center items-center p-1 bg-white rounded-l-lg">
                        <i className="fa-solid fa-magnifying-glass"></i>
                    </span>
                    <input className='grow rounded-r-lg focus:outline-none' type="text" placeholder='Tìm kiếm' />
                </div>
                {user.name ?
                    <div className='text-[#ffffff] ml-[100px] flex items-center'>
                        <img onClick={() => routeAdmin()} src="https://img.icons8.com/carbon-copy/256/user.png" className='w-[32px] bg-[#ffffff] rounded-[50%] mr-4 cursor-pointer' alt="" />
                        {user.name}


                        <button className='ml-[20px] bg-[#000] py-2 px-4' onClick={() => logout()}>Đăng xuất</button>
                    </div>
                    :
                    <Link to="/dang-nhap" className='ml-[100px] bg-[#fff] py-2 px-4'>Đăng nhập</Link>
                }
            </div>
        </header>
        {/*Content*/}
        <Outlet />
        {/*Footer */}
        <footer className=''>
            <div className="grid grid-cols-4 gap-5 my-10 py-10 max-w-[1024px] mx-auto">
                <div className="min-w-[250px]">
                    <h1 className='font-semibold text-xl'>Tìm cửa hàng</h1>
                    <ul className='list-none'>
                        <li className='text-sm mt-2'>Tìm cửa hàng gần nhất</li>
                        <li className='text-sm mt-2'>Mua hàng từ xa</li>
                        <li className='text-red-600 text-sm mt-2'>Gặp trực tiếp cửa hàng gần nhất (Zalo hoặc gọi điện)</li>
                    </ul>
                    <h1 className='font-semibold my-10'>Phương thức thanh toán</h1>
                    <ul className="flex items-center justify-center grid-cols-5 gap-2 ">
                        <li><img src="/citi.png" className="w-10 h-6" alt="" /></li>
                        <li><img src="/moca.png" className="w-13 h-6" alt="" /></li>
                        <li><img src="/redivo.png" className="w-13 h-6" alt="" /></li>
                        <li><img src="/vnpay.png" className="w-13 h-6" alt="" /></li>
                    </ul>
                    <ul className="list-none flex ml-[-16px]">
                        <li className='ml-5'><img src="/vp.png" alt="" className='w-[100px] h-[25px] object-cover' /></li>
                    </ul>
                </div>
                <div className="min-w-[250px]">
                    <ul className='list-none text-[14px] mt-[-4px]'>
                        <li className='mt-2'>Gọi mua hàng: <span>0967***(10h-12h)</span></li>
                        <li className='mt-2'>Gọi khiếu nại: <span>0967***(10h-12h)</span></li>
                        <li className='mt-2'>Gọi bảo hành: <span>0967***(10h-12h)</span></li>
                    </ul>
                    <ul className='list-none text-[14px] my-3'>
                        <h1 className='font-semibold text-lg'>Đối tác dịch vụ bảo hành</h1>
                        <li className='mt-2'>Điện thoại - máy tính</li>
                    </ul>
                    <h1 className='font-semibold text-[15px]'>Trung tâm bảo hành uỷ quyền Apple</h1>
                    <img src="/dthoaivui.png" className='w-[230px] h-10 mt-3' alt="" />
                </div>
                <div className="min-w-[250px]">
                    <ul className='list-none text-[14px] mt-[-4px]'>
                        <li className='mt-2'>Mua hàng và thanh toán Online</li>
                        <li className='mt-2'>Mua hàng trả góp Online</li>
                        <li className='mt-2'>Tra thông tin đơn hàng</li>
                        <li className='mt-2'>Tra điểm Smember</li>
                        <li className='mt-2'>Tra thông tin bảo hành</li>
                        <li className='mt-2'>Tra cứu hoá đơn VAT điện tử</li>
                        <li className='mt-2'>Trung tâm bảo hành chính hãng</li>
                        <li className='mt-2'>Quy định về việc sao lưu dữ liệu</li>
                        <li className='mt-2 text-red-600'>Dịch vụ bảo hành điện thoại</li>
                    </ul>
                    <ul className='list-none text-[14px] my-3'>
                        <h1 className='font-semibold text-xl'>Đối tác dịch vụ bảo hành</h1>
                        <li className='mt-2'>Điện thoại - máy tính</li>
                    </ul>
                </div>
                <div className="min-w-[250px]">
                    <ul className='list-none text-[14px] mt-[-4px]'>
                        <li className='mt-2'>Quy chế hoạt động</li>
                        <li className='mt-2'>Chính sách Bảo hành</li>
                        <li className='mt-2'>Liên hệ hợp tác kinh doanh</li>
                        <li className='mt-2'>Khách hàng doanh nghiệp (B2B)</li>
                        <li className='mt-2 text-red-600'>Ưu đãi thanh toán</li>
                        <li className='mt-2'>Tuyển dụng</li>
                    </ul>
                    <ul className='list-none text-[14px] my-3'>
                        <h1 className='font-semibold text-xl'>Đối tác dịch vụ bảo hành</h1>
                        <li className='mt-2'>Điện thoại - máy tính</li>
                    </ul>
                </div>
            </div>
            <div className="bg-[#F8F8F8]">
                <div className="grid grid-cols-3 gap-8 py-10 max-w-[1024px] mx-auto">
                    <div className="min-w-[250px]">
                        <ul className='list-none text-[14px] mt-[-4px]'>
                            <li className='mt-2 text-[10px]'>
                                <span>Điện thoại iPhone 13 - </span>
                                <span>Điện thoại iPhone 12 - </span>
                                <span>Điện thoại iPhone 11</span>
                            </li>
                            <li className='mt-2 text-[10px]'>
                                <span>Điện thoại iPhone 13 Pro Max - </span>
                                <span>Điện thoại iPhone 11 Pro Max</span>
                            </li>
                            <li className='mt-2 text-[10px]'>
                                <span>iPhone cũ giá rẻ - </span>
                                <span>iPhone 13 cũ - </span>
                                <span>iPhone 12 cũ - </span>
                                <span>iPhone 11 cũ</span>
                            </li>
                        </ul>
                    </div>
                    <div className="min-w-[250px]">
                        <ul className='list-none text-[14px] mt-[-4px]'>
                            <li className='mt-2 text-[10px]'>
                                <span>Điện thoại iPhone 13 - </span>
                                <span>Điện thoại iPhone 12 - </span>
                                <span>Điện thoại iPhone 11</span>
                            </li>
                            <li className='mt-2 text-[10px]'>
                                <span>Điện thoại iPhone 13 Pro Max - </span>
                                <span>Điện thoại iPhone 11 Pro Max</span>
                            </li>
                            <li className='mt-2 text-[10px]'>
                                <span>iPhone cũ giá rẻ - </span>
                                <span>iPhone 13 cũ - </span>
                                <span>iPhone 12 cũ - </span>
                                <span>iPhone 11 cũ</span>
                            </li>
                        </ul>
                    </div>
                    <div className="min-w-[250px]">
                        <ul className='list-none text-[14px] mt-[-4px]'>
                            <li className='mt-2 text-[10px]'>
                                <span>Điện thoại iPhone 13 - </span>
                                <span>Điện thoại iPhone 12 - </span>
                                <span>Điện thoại iPhone 11</span>
                            </li>
                            <li className='mt-2 text-[10px]'>
                                <span>Điện thoại iPhone 13 Pro Max - </span>
                                <span>Điện thoại iPhone 11 Pro Max</span>
                            </li>
                            <li className='mt-2 text-[10px]'>
                                <span>iPhone cũ giá rẻ - </span>
                                <span>iPhone 13 cũ - </span>
                                <span>iPhone 12 cũ - </span>
                                <span>iPhone 11 cũ</span>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="">
                    <p className='text-[10px] text-[#333] text-center font-bold opacity-40'>Công ty TNHH Thương mại và dịch vụ kỹ thuật DIỆU PHÚC - GPĐKKD: 0316172372 do sở KH & ĐT TP. HCM cấp ngày 02/03/2020. Địa chỉ: 350-352 Võ Văn Kiệt, Phường Cô Giang, Quận 1, Thành phố Hồ Chí Minh, Việt Nam. Điện thoại: 028.7108.9666.</p>
                </div>
            </div>
        </footer >
    </>
}

export default UserLayout