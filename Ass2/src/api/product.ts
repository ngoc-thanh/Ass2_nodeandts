import instance from ".";

import { formAdd, formUpdate } from "../model"

const getData = JSON.parse(localStorage.getItem("users") as string);

export const getAll = () => {
    return instance.get("/products")
}
export const getOne = (id: string) => {
    return instance.get("/products/" + id)
}
export const addProduct = (product: formAdd) => {
    return instance.post(`/products`, product, {
        headers: {
            Authorization: `Bearer ${getData && getData.accessToken.toString()}`
        }
    })
}
export const updateProduct = (id: string, product: formUpdate) => {
    return instance.patch(`/products/${id}`, product, {
        headers: {
            Authorization: `Bearer ${getData && getData.accessToken.toString()}`
        }
    })
}
export const deleteProduct = (id: string) => {
    return instance.delete(`/products/${id}`, {
        headers: {
            Authorization: `Bearer ${getData && getData.accessToken.toString()}`
        }
    })
}