import express from "express";
import { create,getAll,get,update,remove } from "../controller/products";
import { checkPermission } from "../middlewares/checkPermission";
const router = express.Router();
router.post("/products", checkPermission, create)
router.get("/products",getAll)
router.get("/products/:id",get)
router.patch("/products/:id",checkPermission,update)
router.delete("/products/:id",checkPermission,remove)
export default router