import joi from 'joi'
export const userSchema = joi.object({
    userName: joi.string().required().messages({
        "string.empty": "userName khong duoc bo trong",
        "any.required": "Truong userName bat buoc nhap"
    }),
    email: joi.string().email().required().messages({
        "string.empty": "email khong duoc bo trong",
        "any.required": "Truong email bat buoc nhap",
        "string.email": "email khong dung dinh dang",
    }),
    tel: joi.number().required().messages({
        "string.empty": "tel khong duoc bo trong",
        "any.required": "Truong tel bat buoc nhap",
    }),
    password: joi.string().min(6).required().messages({
        "string.empty": "password khong duoc bo trong",
        "string.min": "Mat khau phai tu 6 ki tu tro len",
        "any.required": "password gia bat buoc nhap",
    }),
    confirmPassword: joi.string().valid(joi.ref("password")).required().messages({
        "string.empty": "confirmPassword khong duoc bo trong",
        "any.only": "confirmPassword khong dung",
        "any.required": "confirmPassword gia bat buoc nhap",
    }),
    role: joi.string().required().messages({
        "string.empty": "role khong duoc bo trong",
        "any.required": "Truong role bat buoc nhap"
    })
})

export const signinSchema = joi.object({
    email: joi.string().email().required().messages({
        "string.empty": "email khong duoc bo trong",
        "any.required": "Truong email bat buoc nhap",
        "string.email": "email khong dung dinh dang",
    }),
    password: joi.string().min(6).required().messages({
        "string.empty": "password khong duoc bo trong",
        "string.min": "Mat khau phai tu 6 ki tu tro len",
        "any.required": "password gia bat buoc nhap",
    }),
})
export const signupSchema = joi.object({
    name: joi.string().required().messages({
        "string.empty": 'Trường "tên" không được để trống',
        "any.required": 'Trường "tên" là bắt buộc',
    }),
    email: joi.string().email().required().messages({
        "string.empty": 'Trường "email" không được để trống',
        "string.email": 'Trường "email" không đúng định dạng',
        "any.required": 'Trường "email" là bắt buộc',
    }),
    tel: joi.number().required().messages({
        "string.empty": "tel khong duoc bo trong",
        "any.required": "Truong tel bat buoc nhap",
    }),
    password: joi.string().min(6).required().messages({
        "string.empty": 'Trường "mật khẩu" không được để trống',
        "string.min": 'Trường "mật khẩu" phải có ít nhất 6 ký tự',
        "any.required": "Trường mật khẩu là bắt buộc",
    }),
    confirmPassword: joi.string().valid(joi.ref("password")).required().messages({
        "string.empty": 'Trường "xác nhận mật khẩu" không được để trống',
        "any.required": "Trường xác nhận mật khẩu là bắt buộc",
        "any.only": 'Trường "xác nhận mật khẩu" không khớp',
    }),
})