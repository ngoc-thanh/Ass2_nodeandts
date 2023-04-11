import { yupResolver } from '@hookform/resolvers/yup';
import { formSignup, signupSchema } from '../model';
import { useForm } from 'react-hook-form'
import { signup } from '../api/auth';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
const Signup = () => {
    const navigate = useNavigate()
    const onHandleSubmit = async (data: formSignup) => {
        try {
            const response = await signup(data)
            navigate("/dang-nhap")
            console.log(response);
        } catch (error) {
            console.log(error);
        }
    }
    const {
        register,
        handleSubmit,
        formState: { errors }
    } = useForm<formSignup>({
        resolver: yupResolver(signupSchema)
    })
    return <div className="flex justify-center items-center h-screen bg-[#E5E5E5]">
        <div className="min-w-[60%] min-h-[600px] bg-[#F8F8F8] flex">
            <form onSubmit={handleSubmit(onHandleSubmit)} className='min-w-[60%] flex flex-col justify-center items-center relative'>
                <Link to="/dang-nhap" className="absolute left-0 top-0 pt-2 pl-2">Quay lại</Link>
                <div className="">
                    <div className="text-sm">UserName</div>
                    <input type="text" {...register("name", { required: true })} className="border-1 focus:outline-red-300 ease-linear transition-all w-[400px] py-2 px-2" />
                </div>
                <p className='text-red-600 text-xs'>
                    {errors.name && errors.name.message}
                </p>
                <div className="mt-2">
                    <div className="text-sm">Email</div>
                    <input type="text" {...register("email", { required: true })} className="border-1 focus:outline-red-300 ease-linear transition-all w-[400px] py-2 px-2" />
                </div>
                <p className='text-red-600 text-[10px]'>
                    {errors.email && errors.email.message}
                </p>
                <div className="mt-2">
                    <div className="text-sm">Số điện thoại</div>
                    <input type="text"  {...register("tel", { required: true })} className="border-1 focus:outline-red-300 ease-linear transition-all w-[400px] py-2 px-2" />
                </div>
                <p className='text-red-600 text-[10px]'>
                    {errors.tel && errors.tel.message}
                </p>
                <div className="mt-2">
                    <div className="text-sm">Mật khẩu</div>
                    <input type="text"  {...register("password", { required: true })} className="border-1 focus:outline-red-300 ease-linear transition-all w-[400px] py-2 px-2" />
                </div>
                <p className='text-red-600 text-[10px]'>
                    {errors.password && errors.password.message}
                </p>
                <div className="mt-2">
                    <div className="text-sm">Xác nhận Mật khẩu</div>
                    <input type="text"  {...register("confirmPassword", { required: true })} className="border-1 focus:outline-red-300 ease-linear transition-all w-[400px] py-2 px-2" />
                </div>
                <p className='text-red-600 text-[10px]'>
                    {errors.confirmPassword && errors.confirmPassword.message}
                </p>
                <button className="bg-[#FF424E] text-[#FFFFFF] mt-2 w-[400px] py-2">Đăng kí</button>
                <p className="mt-5">Hoặc đăng nhập bằng</p>
                <div className="flex mt-2">
                    <a href="">
                        <img src="/fb.png" className="w-[48px] h-[48px] rounded-[50%] mr-2" alt="" />
                    </a>
                    <a href="">
                        <img src="gg.png" className="w-[48px] h-[48px] rounded-[50%] ml-2" alt="" />
                    </a>
                </div>
            </form>

            <div className="w-[40%] bg-[#ccc] flex items-center justify-center">
                <img src="/logo.png" alt="" className="w-36 h-32" />
            </div>
        </div>
    </div >
}

export default Signup
