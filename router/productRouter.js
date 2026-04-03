import express from "express"
import { createproduct, deleteProduct, getAllProducts, getproductbyId, searchProducts, updateProduct } from "../controllers/productController.js"




const productRouter = express.Router()

productRouter.post("/",createproduct)
productRouter.get("/",getAllProducts)
productRouter.get("/search/:query", searchProducts);
//user engagement







productRouter.delete("/:productId",deleteProduct)
productRouter.put("/:productId",updateProduct)
productRouter.get("/:productId",getproductbyId)


export default productRouter