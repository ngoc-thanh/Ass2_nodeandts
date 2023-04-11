import { useEffect, useState } from "react"
import { ICategory, IProduct, IUser } from "../model"
import { deleteProduct, getAll } from "../api/product"
import { Link, useNavigate } from "react-router-dom"
import { getAllCategory, getOneCategory } from "../api/category"
const Dashboard = () => {
    const [products, setProducts] = useState<IProduct[]>([])
    const [category, setCategory] = useState<ICategory[]>([])
    const navigate = useNavigate();
    const navigateCate = () => {
        navigate("/admin/category")
    }
    const fetchProductAdmin = async () => {
        const { data } = await getAll();
        setProducts(data)
    }
    const fetchCategory = async () => {
        const { data } = await getAllCategory();
        setCategory(data)
    }
    const removeProduct = async (id: string) => {
        const isConfirm = confirm('Ban co muon xoa san pham nay');
        if (isConfirm) {
            await deleteProduct(id)
            alert('Xoa thanh cong');
            location.href = "/admin"
        }
    }
    useEffect(() => {
        fetchProductAdmin()
        fetchCategory()
    }, [])
    return <div className="h-full w-10/12 p-5 bg-[#F1F3F4]">
        <div className="flex justify-between w-full">
            <h1 className="text-2xl text-[#5F5E61] font-bold">Dashboard</h1>
            <Link to={"/admin/them-san-pham"}>
                <button className="p-3 font-medium text-white transition-all bg-purple-600 rounded-md  hover:bg-purple-700">
                    Add product
                </button>
            </Link>
        </div>
        <div className="flex">
            <h3 className="text-lg text-[#5F5E61] font-semibold">Bộ lọc</h3>
            <div className="flex flex-col ml-10">
                <p className="text-sm mb-2">Danh mục sản phẩm</p>
                <select name="" id="" className="w-[352px] border-1 border-[#ccc] p-2">
                    <option value="" className="p-2">All</option>
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

                        >
                            Ảnh
                        </th>
                        <th
                            className="whitespace-nowrap px-4 py-2 text-left font-medium text-gray-900"
                        >
                            Giá
                        </th>
                        <th
                            className="whitespace-nowrap px-4 py-2 text-left font-medium text-gray-900"
                        >
                            Giá khuyến mãi
                        </th>
                        <th
                            className="whitespace-nowrap px-4 py-2 text-left font-medium text-gray-900"
                            colSpan={2}>
                            Thao tác
                        </th>
                    </tr>
                </thead>
                <tbody className="divide-y divide-gray-300">
                    {products.map((product, index) =>
                        <tr key={index}>
                            <td className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
                                {index + 1}
                            </td>
                            <td className="whitespace-nowrap px-4 py-2 text-gray-700">{product.name}</td>
                            <td className="whitespace-nowrap px-4 py-2 text-gray-700">
                                <img className="w-[70px]" src={product.images} alt="" />
                            </td>
                            <td className="whitespace-nowrap px-4 py-2 text-gray-700">{product.price}</td>
                            <td className="whitespace-nowrap px-4 py-2 text-gray-700">{product.original_price}</td>

                            <td className="whitespace-nowrap px-4 py-2 text-gray-700 w-[65px]"><button onClick={() => removeProduct(product._id)} className="text-white p-4 bg-red-500 rounded-xl">xóa</button></td>
                            <td className="whitespace-nowrap px-4 py-2 text-gray-700 w-[65px]"><button className="text-white p-4 bg-blue-500 rounded-xl"><Link to={`/admin/products/${product._id}`}>Sửa</Link></button></td>
                        </tr>
                    )}
                </tbody>
            </table>
        </div>

    </div>
}

export default Dashboard