import Product from "@/models/Product";
import { connectToDB } from "@/utils/dbConnect";



export const GET = async (req)=>{
    try {
        await connectToDB()
        const products =await Product.find({})
        console.log(products);
        return new Response(JSON.stringify(products),{status:201})
    } catch (error) {
        return new Response("Failed to fetch all products",{status:500})
    }
}