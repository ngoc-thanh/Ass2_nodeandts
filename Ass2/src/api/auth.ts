import instance from ".";
import { formSigin, formSignup } from "../model";

export const signup = (data: formSignup) => {
    return instance.post("/signup", data)
}
export const signin = (data: formSigin) => {
    return instance.post("/signin", data)
}

