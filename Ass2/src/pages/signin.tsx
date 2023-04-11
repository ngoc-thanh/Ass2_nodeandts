import { yupResolver } from '@hookform/resolvers/yup';
import { formSigin, signinSchema } from '../model';
import { useForm } from 'react-hook-form'
import { signin } from '../api/auth';
import { useLocalStorage } from '../hooks';
import { Link, useNavigate } from 'react-router-dom';
const Signin = () => {
    const [user, setUser] = useLocalStorage("users", null)
    const navigate = useNavigate()
    const onHandleSubmit = async (data: formSigin) => {
        try {
            const { data: { accessToken, userCheck } } = await signin(data)
            setUser({
                accessToken,
                ...userCheck
            })
            navigate("/admin")
        } catch (error) {
            console.log(error);
        }
    }
    const {
        register,
        handleSubmit,
        formState: { errors }
    } = useForm<formSigin>({
        resolver: yupResolver(signinSchema)
    })
    return <div className="flex justify-center items-center h-screen bg-[#E5E5E5]">
        <div className="w-[60%] h-[600px] bg-[#F8F8F8] flex">
            <form onSubmit={handleSubmit(onHandleSubmit)} className='w-[60%] flex flex-col justify-center items-center relative'>
                <a href="/" className="absolute left-0 top-0 pt-2 pl-2">Quay lại</a>
                <div className="">
                    <div className="text-sm">Email</div>
                    <input type="text" {...register("email", { required: true })} className="border-1 focus:outline-red-300 ease-linear transition-all w-[300px] py-2 px-2" />
                </div>
                <p className='text-red-600'>
                    {errors.email && errors.email.message}
                </p>
                <div className="mt-2">
                    <div className="text-sm">Mật khẩu</div>
                    <input type="text" {...register("password", { required: true })} className="border-1 focus:outline-red-300 ease-linear transition-all w-[300px] py-2 px-2" />
                </div>
                <p className='text-red-600'>
                    {errors.password && errors.password.message}
                </p>
                <button className="bg-[#FF424E] text-[#FFFFFF] mt-2 w-[300px] py-2">Đăng nhập</button>
                {errors.email || errors.password ? <span>Bạn chưa có tài khoản? <Link to="/dang-ky" className='text-white'>Đăng kí</Link></span> : ""}

                <button className="bg-[#0022ff] text-[#FFFFFF] mt-2 w-[300px] py-2"><Link to="/dang-ky">Đăng kí</Link></button>
                <p className="mt-5">Hoặc đăng nhập bằng</p>
                <div className="flex mt-2">
                    <a href="">
                        <img src="/fb.png" className="w-[58px] h-[58px] rounded-[50%] mr-2" alt="" />
                    </a>
                    <a href="">
                        <img src="/gg.png" className="w-[58px] h-[58px] rounded-[50%] ml-2" alt="" />
                    </a>
                </div>
            </form>
            <div className="w-[40%] bg-[#ccc] flex items-center justify-center">
                <img src="/logo.png" alt="" className="w-36 h-32" />
            </div>
        </div>
    </div>
}

export default Signin
