import { useEffect, useState } from "react"
import { ICategory, IProduct, IUser } from "../model"
import { deleteProduct, getAll } from "../api/product"
import { Link, useNavigate } from "react-router-dom"
import { deleteCategory, getAllCategory, getOneCategory } from "../api/category"
const CategoryFetch = () => {
    const [category, setCategory] = useState<ICategory[]>([])
    const navigate = useNavigate();

    const fetchCategory = async () => {
        try {
            const { data } = await getAllCategory();
            setCategory(data)
        } catch (error) {
            console.log(error);

        }
    }
    const removeCategory = async (id: string) => {
        try {
            const isConfirm = confirm('Ban co muon xoa khong');
            if (isConfirm) {
                await deleteCategory(id)
                alert('Xoa thanh cong');
                 navigate ("/admin/category")
            }
        } catch (error) {
            console.log(error);

        }
    }

    useEffect(() => {
        fetchCategory()
    }, [])
    return <div className="h-full w-10/12 pl-5 py-5 bg-[#F1F3F4]">
        <Link to="/admin">Trở về</Link>
        <div className="flex justify-between w-full">
            <h1 className="text-2xl text-[#5F5E61] font-bold ">Category</h1>
            <Link to="/admin/category/them-the-loai"><button className="p-3 m-4 font-medium text-white transition-all bg-purple-600 rounded-md  hover:bg-purple-700">
                    Add categories
                </button></Link>
        </div>
        <div className="flex">
            <h3 className="text-lg text-[#5F5E61] font-semibold">Bộ lọc</h3>
            <div className="flex flex-col ml-10">
                <p className="text-sm mb-2">Danh mục sản phẩm</p>
                <select className="w-[352px] border-1 border-[#ccc] p-2" defaultValue="">
                    <option value="">All</option>
                    {category && category.map((cate, index) =>
                        <option key={index} value={cate._id} className="p-2">{cate.name}</option>
                    )}
                </select>
            </div>
        </div>
        <div className="overflow-x-auto mt-4">
            <table className="min-w-full divide-y-2 divide-gray-300 text-sm">
                <thead>
                    <tr>
                        <th
                            className="whitespace-nowrap px-4 py-2 text-left font-medium text-gray-900"
                        >
                            #
                        </th>
                        <th
                            className="whitespace-nowrap px-4 py-2 text-left font-medium text-gray-900"
                        >
                            Tên sản phẩm
                        </th>
                        <th
                            className="whitespace-nowrap px-4 py-2 text-left font-medium text-gray-900"
                            colSpan={2}>
                            Thao tác
                        </th>
                    </tr>
                </thead>
                <tbody className="divide-y divide-gray-300">
                    {category.map((category, index) =>
                        <tr key={index}>
                            <td className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
                                {index + 1}
                            </td>
                            <td className="whitespace-nowrap px-4 py-2 text-gray-700">{category.name}</td>

                            <td className="whitespace-nowrap px-4 py-2 text-gray-700 w-[65px]"><button onClick={() => removeCategory(category._id)} className="text-white py-2 px-3 bg-red-500 rounded-md">xóa</button></td>
                            <td className="whitespace-nowrap px-4 py-2 text-gray-700 w-[65px]"><button className=" text-white py-2 px-3 bg-blue-500 rounded-md"><Link to={`/admin/category/${category._id}`}>Sửa</Link></button></td>
                        </tr>
                    )}
                </tbody>
            </table>
        </div>


    </div>
}

export default CategoryFetch
