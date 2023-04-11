import { Link, Outlet, useNavigate } from "react-router-dom"
import { useEffect, useState } from "react"
import { ICategory, IUser, formSignup } from "../../model"
import { getAllCategory } from "../../api/category"

const AdminLayout = () => {
    const [category, setCategory] = useState<ICategory[]>([])
    const [user, setUser] = useState<IUser>({} as IUser)
    const navigate = useNavigate();
    const userData = JSON.parse(localStorage.getItem("users") as string)
    const fetchCategory = async () => {
        const { data } = await getAllCategory();
        setCategory(data)
    }
    const showProducts = (id: string) => {
        if (id) {
            console.log(id);
        }
    }
    useEffect(() => {
        if (!userData) {
            navigate("/")
        }
        if (userData) {
            if (userData.role !== 'admin') {
                navigate("/")
            }
        }
    }, [navigate])
    const logout = () => {
        localStorage.clear()
        alert("Bạn đã đăng xuất")
        navigate("/")
    }
    useEffect(() => {
        fetchCategory()
        setUser(userData)
    }, [])
    return <div className="">
        <header className='bg-[#00B0D7] '>
            <div className="container mx-auto flex items-center gap-4 p-5">
                <img className='w-[50px]' src="/logo.png" alt="" />
                <h2 className="text-white text-lg">Dash Board</h2>
                <div className="input-icon flex grow ">
                    <span className=" flex justify-center items-center p-1 bg-white rounded-l-lg">
                        <i className="fa-solid fa-magnifying-glass"></i>
                    </span>
                    <input className=' w-1/2 rounded-r-lg focus:outline-none' type="text" placeholder='Tìm kiếm' />
                    <h1 className="text-right flex-1 text-white text-lg ">Xin chào! {user && user.name}</h1>
                </div>
            </div>
        </header>
        <div className=" flex h-auto">
            <aside className="min-w-[180px] min-h-screen p-6  h-100vh float-left flex-1">
                <ul>
                    <li>
                        <a href="/admin" className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700">
                            <i className="fa-solid fa-bars text-[24px] text-[#9297A2]"></i>
                            <span className="ml-3">Dashboard</span>
                        </a>

                    </li>
                    <li>
                        <Link to="/admin/category" className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700">
                            <i className="fa-solid fa-calendar-days text-[24px] text-[#9297A2]"></i>
                            <span className="flex-1 ml-3 whitespace-nowrap">Category</span>
                        </Link>
                    </li>
                    <li className="flex mt-3 cursor-pointer px-2 w-[180px] py-2">
                        <button onClick={() => logout()} className="bg-red-500 text-[#ffffff] px-3 py-2 rounded-lg">Đăng xuất</button>
                    </li>
                </ul>
            </aside>
            <Outlet />
        </div>
    </div>
}

export default AdminLayout
