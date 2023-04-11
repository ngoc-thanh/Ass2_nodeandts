
import product from "../model/products";
import Product from "../model/products";
import Category from "../model/category";
// import joi from "joi";
// const productSchema = joi.object({
//     name: joi.string().required(),
//     age: joi.number().required()
// })
export const create = async (req, res) => {
    try {
        const product = await Product.create(req.body);
        if (!product) {
            return res.status(400).json({
                message: "Không thể tạo sản phẩm",
            });
        }

        await Category.findByIdAndUpdate(product.categoryId, {
            $addToSet: {
                products: product._id,
            },
        });

        return res.status(201).json({
            message: "Product created",
            data: product,
        });
    } catch (error) {
        return res.status(500).json({
            message: error,
        });
    }
}
export const getAll = async (req, res) => {
    
    try {
        const products = await Product.find().populate("categoryId");
        if (products === 0) {
            return res.status(400).json({
                message: "Khong co san pham nao"
            })
        }
        return res.status(201).json(products)
    } catch (error) {
        return res.status(500).json({
            message: error
        })
    }
}
export const get = async (req, res) => {
    try {
        const product = await Product.findById(req.params.id)
        if (!product) {
            return res.status(400).json({
                message: "Khong tim thay san pham"
            })
        }
        return res.status(201).json(product)
    } catch (error) {
        return res.status(500).json({
            message: error
        })
    }
}

export const update = async (req, res) => {
    try {
        const product = await Product.findByIdAndUpdate(req.params.id, req.body, { new: true })
        if (!product) {
            return res.status(400).json({
                message: "Cap nhat that bai"
            })
        }
        return res.status(201).json({
            message: "Cap nhat thanh cong",
            product
        })
    } catch (error) {
        return res.status(500).json({
            message: error
        })
    }
}
export const remove = async (req, res) => {
    try {
        const product = await Product.findByIdAndDelete(req.params.id)
        return res.status(201).json({
            message: "Xoa thanh cong",
            product
        })
    } catch (error) {
        return res.status(500).json({
            message: error
        })
    }
}