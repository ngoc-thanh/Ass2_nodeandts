import { useEffect, useState } from "react"
import { ICategory, IProduct, formAdd, formSignup } from "../model"
import { Link, Outlet, useNavigate, useParams } from "react-router-dom"
import { getOne } from "../api/product"
import { getOneCategory } from "../api/category"

const ProductDetail = () => {
    const [product, setProduct] = useState<IProduct>({} as IProduct)
    console.log(product);
    
    const [categoryId, setCategoryId] = useState<ICategory>({} as ICategory)
    console.log(product?.categoryId);
    // console.log(categoryId.products);
    const { id } = useParams();
    const fetchOneProduct = async () => {
        if (id) {
            const { data} = await getOne(id)
            setProduct(data)
        }
    }
    const fetchOneCategory = async () => {
        if (product?.categoryId?._id) {
            const { data: { category } } = await getOneCategory(product.categoryId._id)
            setCategoryId(category)
        }
    }
    useEffect(() => {
        fetchOneProduct();
    }, [])
    useEffect(() => {
        fetchOneCategory();
    }, [product])
    return <>
        {/* router */}
        <div className="border-b-2">
            <ul className="list-none h-8 flex items-center justify-start mx-auto max-w-[1024px] border-[#ccc] w-full text-sm cursor-pointer">
                {/* <li className="mr-6"><a href="">Điện thoại</a></li>
                <li className="mr-6"><a href="">Điện thoại</a></li>
                <li className="mr-6"><a href="">Điện thoại</a></li> */}
            </ul>
        </div>
        {/* product_Name */}
        <div className="border-b-2">
            <h1 className="text-2xl py-2 product_name mx-auto max-w-[1024px]">{product.name}</h1>
        </div>
        <div className='max-w-[1024px] mx-auto'>
            {/* layout */}
            <div className="layout_product flex my-12">
                <div className="w-[30%] ">
                    <img src={product.images} alt="" className="h-[390px] w-[390px] object-cover border-2" />
                    <div className="flex flex-wrap mt-12">
                        <div className="h-16 w-16 rounded-md border-[#ccc] border-2 p-1 mr-3 mt-3 flex flex-col items-center justify-center">
                            <i className="fa fa-star" aria-hidden="true"></i>
                            <p className="text-[10px] text-center ">Tính năng nổi bật</p>
                        </div>
                        <div className="h-16 w-16 rounded-md border-[#ccc] border-2 p-1 mr-3 mt-3">
                            <img src={product.images} className="w-full h-full object-cover" alt="" />
                        </div>
                    </div>
                </div>
                <div className="w-[70%] px-14 flex flex-col">
                    <div className="flex">
                        <div className="text-red-600 text-3xl">{product.original_price}<sup>đ</sup></div>
                        <div className="text-base mt-auto opacity-70 ml-6">${product.price}<sup>đ</sup></div>
                    </div>
                    <div className="mt-10 text-[15px]">
                        {product.description_small}
                    </div>
                    <div className="mt-auto flex">
                        <button className="bg-[#FF3945] border-1 text-[#FFFFFF] w-[240px] h-12 rounded-md hover:bg-white hover:border-[#FF3945] hover:text-[#FF3945] ease-linear transition-all"><Link to="/cart">Mua ngay</Link></button>
                        <div className="w-12 h-12 border-red-600 border-2 ml-5 rounded-md flex justify-center items-center cursor-pointer hover:bg-white group">
                            <Link to="/cart">
                                <svg xmlns="http://www.w3.org/2000/svg" className="ionicon w-6 ease-in-out transition-all hover:scale-75" viewBox="0 0 512 512"><circle cx="176" cy="416" r="16" fill="none" stroke="red" strokeLinecap="round" strokeLinejoin="round" strokeWidth="32" /><circle cx="400" cy="416" r="16" fill="red" stroke="red" strokeLinecap="round" strokeLinejoin="round" strokeWidth="32" /><path fill="none" stroke="red" strokeLinecap="round" strokeLinejoin="round" strokeWidth="32" d="M48 80h64l48 272h256" /><path d="M160 288h249.44a8 8 0 007.85-6.43l28.8-144a8 8 0 00-7.85-9.57H128" fill="none" stroke="red" strokeLinecap="round" strokeLinejoin="round" strokeWidth="32" /></svg>
                            </Link>
                        </div>
                        <span className="w-16 text-sm ml-5 cursor-pointer"><Link to="/cart">Thêm vào giỏ hàng</Link></span>
                    </div>
                </div>
            </div>
            {/* description */}
            <div className="product_description">
                <div className="bg-[#F2F2F2] py-2 px-5">
                    <h1 className="text-red-600 text-center text-lg uppercase">Đặc điểm nổi bật</h1>
                    <ul className="my-3 text-sm">
                        <p dangerouslySetInnerHTML={{ __html: JSON.stringify(product.specifications) }}></p>
                    </ul>
                </div>
            </div>
            <div className="mt-3 text-sm"><span>{product.description}</span></div>
            {/* <h1 className="text-[#000] text-xl pt-5">Sản phẩm liên quan</h1> */}
            <Outlet />
            <div className="grid grid-cols-5 gap-4 mt-4 ">
                {categoryId?.products?.map((productCate, index) =>
                    <div className="mb-14 border-1 rounded-lg overflow-hidden w-[200px]" key={index}>
                        <Link to={`/product/${productCate._id}`} className="block">
                            <img
                                alt="Art"
                                src={productCate.images}
                                className="w-full object-cover hover:scale-110 ease-linear transition-all h-[150px]"
                            />
                            <div className="px-2 py-1">
                                <h3 className="mt-4 text-sm text-gray-900 font-semibold">
                                    {productCate.name}
                                </h3>
                                <div className="mt-2 text-[12px] flex">
                                    <p className="text-red-600 font-bold">{productCate.original_price}₫<span className="text-gray-700 opacity-50 ml-2">{productCate.price} ₫</span></p>
                                </div>
                                <div className="mt-2 text-[12px] flex">
                                    <div className="flex">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="ionicon w-4" viewBox="0 0 512 512"><path d="M480 208H308L256 48l-52 160H32l140 96-54 160 138-100 138 100-54-160z" fill="none" stroke="currentColor" strokeLinejoin="round" strokeWidth="32" /><path d="M256 48v316L118 464l54-160-140-96h172l52-160z" /></svg>
                                        <svg xmlns="http://www.w3.org/2000/svg" className="ionicon w-4" viewBox="0 0 512 512"><path d="M480 208H308L256 48l-52 160H32l140 96-54 160 138-100 138 100-54-160z" fill="none" stroke="currentColor" strokeLinejoin="round" strokeWidth="32" /><path d="M256 48v316L118 464l54-160-140-96h172l52-160z" /></svg>
                                        <svg xmlns="http://www.w3.org/2000/svg" className="ionicon w-4" viewBox="0 0 512 512"><path d="M480 208H308L256 48l-52 160H32l140 96-54 160 138-100 138 100-54-160z" fill="none" stroke="currentColor" strokeLinejoin="round" strokeWidth="32" /><path d="M256 48v316L118 464l54-160-140-96h172l52-160z" /></svg>
                                        <svg xmlns="http://www.w3.org/2000/svg" className="ionicon w-4" viewBox="0 0 512 512"><path d="M480 208H308L256 48l-52 160H32l140 96-54 160 138-100 138 100-54-160z" fill="none" stroke="currentColor" strokeLinejoin="round" strokeWidth="32" /><path d="M256 48v316L118 464l54-160-140-96h172l52-160z" /></svg>
                                    </div>
                                    <span className="text-gray-700 opacity-50 ml-2">10 đánh giá</span>
                                </div>
                            </div>
                        </Link>
                    </div >
                )}
            </div>
            <button className="ml-[50%] translate-x-[-50%] border-[#0A263C] border-1 text-[#0A263C] w-[335px] py-1 block mt-5 mb-[100px] rounded-lg hover:bg-[#0A263C] hover:text-white ease-linear transition-all">Xem thêm</button>
        </div>
    </>
}

export default ProductDetail