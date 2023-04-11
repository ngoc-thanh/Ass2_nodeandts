import User from "../model/user";
import { signinSchema, signupSchema } from "../schemas/user";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

export const signup = async (req, res) => {
    try {
        // validate đầu vào
        const { error } = signupSchema.validate(req.body, { abortEarly: false });
        if (error) {
            const errors = error.details.map((err) => err.message);

            return res.status(400).json({
                messages: errors,
            });
        }
        const userEmail = await User.findOne({ email: req.body.email })
        if (userEmail) {
            return res.status(400).json({
                messages: "Email da ton tai hay nhap email khac"
            })
        }
        // Mã hóa mật khẩu

        const hashedPassword = await bcrypt.hash(req.body.password, 6);

        const user = await User.create({
            ...req.body,
            password: hashedPassword,
        });

        const token = jwt.sign({ id: user._id }, "banThayDat", { expiresIn: "1d" });
        user.password = undefined;
        return res.status(201).json({
            message: "Tạo tài khoản thành công",
            accessToken: token,
            user,
        });
    } catch (error) { }
};
// B1: Kiểm tra thông tin req.body có hợp lệ hay không
// B2: Kiểm tra email đã tồn tại hay chưa?
// B2.1: Mã hóa mật khẩu trước khi tạo user mới
// B3: Tạo user mới
// B4: Tạo token mới chứa id của user
// B5: Trả về client

export const signin = async (req, res) => {
    try {
        const { error } = signinSchema.validate(req.body, { abortEarly: false });
        if (error) {
            const errors = error.details.map((err) => err.message);

            return res.status(400).json({
                messages: errors,
            });
        }

        const userCheck = await User.findOne({ email: req.body.email });
        if (!userCheck) {
            return res.status(400).json({
                messages: "Email không tồn tại",
            });
        }

        const passwordCheck = await bcrypt.compare(req.body.password, userCheck.password);
        if (!passwordCheck) {
            return res.status(400).json({
                messages: "Sai mật khẩu",
            });
        }
        const token = jwt.sign({ id: userCheck._id }, "banThayDat", { expiresIn: "1d" });
        userCheck.password = undefined;
        return res.status(200).json({
            message: "Đăng nhập thành công",
            accessToken: token,
            userCheck,
        });
    } catch (error) { }
};
// Đăng nhập
// B1: Kiểm tra thông tin req.body có hợp lệ hay không
// B2: Kiểm tra email đã tồn tại hay chưa?
// B2.1: So sánh password client với password trong db
// B3: Tạo token mới chứa id của user
// B4: Trả về client
