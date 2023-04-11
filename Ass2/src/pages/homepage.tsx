import { useEffect, useState } from "react"
import Banner from "../components/banner"
import Product from "../components/product"
import { IProduct } from "../model"
import { getAll } from "../api/product"

const HomePage = () => {
    const [products, setProducts] = useState<IProduct[]>([])
    const fetchProducts = async () => {
        const { data } = await getAll();
        setProducts(data)
    }
    useEffect(() => {
        fetchProducts()
    }, [])
    return <div className="container-xxl max-auto">
        <Banner />
        <h1 className="uppercase p-2">Điện thoại nổi bật nhất</h1>
        <div className="grid grid-cols-5 gap-4  text-center ">
            {products.map((product, index) => <Product data={product} key={index} />)}
        </div>
    </div>
}

export default HomePage
