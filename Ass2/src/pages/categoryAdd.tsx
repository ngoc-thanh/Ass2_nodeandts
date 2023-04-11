import { useEffect, useState } from "react"
import { ICategory, IProduct, IUser, addCategorySchema, addProductSchema, formAdd, updateSchema } from "../model"
import { useForm } from "react-hook-form"
import { yupResolver } from "@hookform/resolvers/yup"
import { addProduct } from "../api/product"
import { useNavigate } from "react-router-dom"
import { addCategory, getAllCategory } from "../api/category"
import axios from "axios"
const CategoryAdd = () => {
    const navigate = useNavigate()
    const {
        register,
        handleSubmit,
        formState: { errors }
    } = useForm<ICategory>({
        resolver: yupResolver(addCategorySchema)
    })
    const onSubmitForm = async (category: ICategory) => {
        try {
            await addCategory(category);
            navigate("/admin/category")
        } catch (error) {
            console.log(error);

        }
    }
    useEffect(() => {
    }, [])
    return <form onSubmit={handleSubmit(onSubmitForm)} className=" p-5 bg-[#F1F3F4] flex">
        
            <h1 className="text-2xl text-[#5F5E61] font-bold">Cập nhật thể loại</h1>
        
        <div className="  ">
            <section className="bg-gray-100">
                <div className="mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 gap-x-16 gap-y-8 lg:grid-cols-5">
                        <div className="rounded-lg bg-transparent p-8 shadow-md lg:col-span-3 lg:p-12 w-[650px]">
                            <h1 className="text-2xl text-[#5F5E61] font-semibold mb-8">Thông tin thể loại</h1>
                            <div className="space-y-4">
                                <div>
                                    <label className="text-[12px]">Tên thể loại</label>
                                    <input
                                        className="w-full rounded-lg border-gray-200 border-1 p-3 text-sm bg-transparent"
                                        placeholder="Tên sản phẩm"
                                        {...register("name", { required: true })}
                                    />
                                    <p className="text-red-600">
                                        {errors.name && errors.name.message}
                                    </p>
                                </div>
                                <div className="mt-4">
                                    <button
                                        className="inline-block w-full rounded-lg bg-purple-600 px-5 py-3 font-medium text-white sm:w-auto"
                                    >
                                        Thêm thể loại
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

export default CategoryAdd