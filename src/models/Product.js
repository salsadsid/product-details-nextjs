import { Schema, model, models } from "mongoose";

const productSchema = new Schema({
  name: String,
  description: String,
  price: String,
  images: [
    {
      type: String,
    },
  ],
  category: {
    type: String,
    enum: ["men", "women", "baby"],
  },
  colors:[
    {
        type:String,
    }
  ],
  sizes:[
    {
        type:String
    }
  ],
  reviews:[
    {
        username:String,
        rating:Number,
        comment:String,
    }
  ]
});

const Product = models.Product || model("Product", productSchema);

export default Product;
