import mongoose from "mongoose";

const productSchema = new mongoose.Schema({
    productId:{
        type:String,
        required:true,
        unique:true
    },
    name:{
        type:String,
        required:true
    },
    description:{
        type:String,
        required:true
    },
    altNames:{
        type:[String],
        default:[]
    },
    price:{
        type:Number,
        required:true
    },
    labelledPrice:{
        type:Number,
    },
    category:{
        type:String,
        default:"others"
    },
    imageUrls:{
        type:[String],
        required:true,
        default:[]
    },
    isVisible:{
        type:Boolean,
        default:true,
        required:true
    },
    brand:{
        type:String,
        default:"Generic"
    },
    model:{
        type:String,
        default:"standard"
    },
    quantity:{
        type:Number,
        default:100
    }

})

const Product =mongoose.model("product",productSchema)

export default Product