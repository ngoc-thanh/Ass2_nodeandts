import { useEffect, useState } from "react"
import { ICategory, IProduct, addProductSchema, formAdd, updateSchema } from "../model"
import { useForm } from "react-hook-form"
import { yupResolver } from "@hookform/resolvers/yup"
import { addProduct } from "../api/product"
import { useNavigate } from "react-router-dom"
import { getAllCategory } from "../api/category"
import axios from "axios"
const AdminAdd = () => {
    const [category, setCategory] = useState<ICategory[]>([])
    const fetchCategory = async () => {
        try {
            const { data } = await getAllCategory()
            setCategory(data)
        } catch (error) {
            console.log(error);
        }
    }
    const navigate = useNavigate()
    const {
        register,
        handleSubmit,
        formState: { errors }
    } = useForm<formAdd>({
        resolver: yupResolver(addProductSchema)
    })
    const onSubmitForm = async (product: formAdd) => {
        console.log(product);
        await addProduct(product);
        // console.log(data);
        navigate("/admin")

    }
  

    useEffect(() => {
        fetchCategory()
    }, [])
    return <form onSubmit={handleSubmit(onSubmitForm)} className="grow p-5 bg-[#F1F3F4] flex">
        <div className="w-[40%]">
            <h1 className="text-2xl text-[#5F5E61] font-bold">Cập nhật sản phẩm</h1>
            <div
                className="group flex flex-col justify-between rounded-lg bg-transparent p-4 shadow-md transition-shadow hover:shadow-lg sm:p-6 lg:p-8 w-[400px] mt-10 min-h-[350px]"
            >
                <div className="flex flex-col justify-center items-center">
                    <img src="" className="w-[250px] object-cover" alt="" />
                    <input type="file" {...register("images")} />
                    <p className="text-red-600">
                        {errors.images && errors.images.message}
                    </p>
                    <h1 className="text-2xl text-[#5F5E61] font-semibold text-center mt-3">Them anh</h1>
                </div>
                <div className="mt-4 border-t-2 border-gray-300 pt-4">
                    <textarea
                        className="w-full rounded-lg text-sm font-medium text-gray-500 border-1 p-3 bg-transparent"
                        placeholder="Mô tả ngắn:"
                        cols={30}
                        rows={4}
                        {...register("description_small", { required: true })}
                    ></textarea>
                    <p className="text-red-600">
                        {errors.description_small && errors.description_small.message}
                    </p>
                </div>
            </div>
        </div>
        <div className="w-[60%]">
            <section className="bg-gray-100">
                <div className="mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 gap-x-16 gap-y-8 lg:grid-cols-5">
                        <div className="rounded-lg bg-transparent p-8 shadow-md lg:col-span-3 lg:p-12 w-[650px]">
                            <h1 className="text-2xl text-[#5F5E61] font-semibold mb-8">Thông tin sản phẩm</h1>
                            <div className="space-y-4">
                                <div>
                                    <label className="text-[12px]">Tên sản phẩm</label>
                                    <input
                                        className="w-full rounded-lg border-gray-200 border-1 p-3 text-sm bg-transparent"
                                        placeholder="Tên sản phẩm"
                                        {...register("name", { required: true })}
                                    />
                                    <p className="text-red-600">
                                        {errors.name && errors.name.message}
                                    </p>
                                </div>

                                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                                    <div>
                                        <label className="text-[12px]">Giá gốc</label>
                                        <input
                                            className="w-full rounded-lg border-gray-200 border-1 p-3 text-sm bg-transparent"
                                            placeholder="Giá gốc"
                                            type="number"
                                            {...register("original_price", { required: true })}
                                            min={0}
                                        />
                                        <p className="text-red-600">
                                            {errors.original_price && errors.original_price.message}
                                        </p>
                                    </div>

                                    <div>
                                        <label className="text-[12px]">Giá khuyễn mãi</label>
                                        <input
                                            className="w-full rounded-lg border-gray-200 border-1 p-3 text-sm bg-transparent"
                                            placeholder="Giá khuyến mãi"
                                            {...register("price", { required: true })}
                                            type="number"
                                            min={0}
                                        />
                                        <p className="text-red-600">
                                            {errors.price && errors.price.message}
                                        </p>
                                    </div>
                                </div>
                                <select className="w-full rounded-lg border-gray-200 border-1 p-3 text-sm bg-transparent"
                                    {...register("categoryId")}
                                    defaultValue={category.length > 0 ? category[0]?._id : ""}
                                >
                                    {category && category.map((item, index) =>
                                        <option value={item._id} key={index}>
                                            {item.name}
                                        </option>
                                    )}
                                </select>
                                {errors.categoryId && errors.categoryId.message}
                                <div>
                                    <label className="sr-only">Đặc điểm nổi bật</label>

                                    <textarea
                                        className="w-full rounded-lg border-gray-200 border-1 p-3 text-sm bg-transparent"
                                        placeholder="Thông số kĩ thuật"
                                        cols={30}
                                        rows={4}
                                        {...register("specifications")}
                                    ></textarea>
                                    {errors.specifications && errors.specifications.message}
                                </div>
                                <div>
                                    <label className="sr-only">Mô tả</label>

                                    <textarea
                                        className="w-full rounded-lg border-gray-200 border-1 p-3 text-sm bg-transparent"
                                        placeholder="Mô tả"
                                        cols={30}
                                        rows={4}
                                        {...register("description")}
                                    ></textarea>
                                    {errors.description && errors.description.message}
                                </div>

                                <div className="mt-4">
                                    <button
                                        className="inline-block w-full rounded-lg bg-[#00B0D7] px-5 py-3 font-medium text-white sm:w-auto"
                                    >
                                        Thêm sản phẩm
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div >
    </form >
}

export default AdminAdd
