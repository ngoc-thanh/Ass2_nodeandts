import instance from "."
import { ICategory } from "../model"
// const getData = JSON.parse(localStorage.getItem("users") as string);
export const getAllCategory = () => {
    return instance.get("/category")
}
export const getOneCategory = (id: string) => {
    return instance.get(`/category/${id}`)
}

export const addCategory = (category: ICategory) => {
    return instance.post(`/category`, category)
}
export const updateCategory = (id: string, category: ICategory) => {
    return instance.patch(`/category/${id}`, category)
}
export const deleteCategory = (id: string) => {
    return instance.delete(`/category/${id}`)
   
}

// import instance from ".";
// import { ICategory } from "../model"
// const getData = JSON.parse(localStorage.getItem("users") as string);


// export const getAllCategory = () => {
//     return instance.get("/category")
// }
// export const getOneCategory = (id: string) => {
//     return instance.get(`/category/${id}`)
// }
// export const addCategory = (category: ICategory) => {
//     return instance.post(`/category`, category, {
//         headers: {
//             Authorization: `Bearer ${getData && getData.accessToken.toString()}`
//         }
//     })
// }
// export const updateCategory = (id: string, category: ICategory) => {
//     return instance.put(`/category/${id}`, category, {
//         headers: {
//             Authorization: `Bearer ${getData && getData.accessToken.toString()}`
//         }
//     })
// }
// export const deleteCategory = (id: string) => {
//     return instance.delete(`/category/${id}`, {
//         headers: {
//             Authorization: `Bearer ${getData && getData.accessToken.toString()}`
//         }
//     })
// }