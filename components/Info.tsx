"use client"

import { Product } from "@/lib/types"
import Currency from "./ui/currency";
import Button from "./ui/Button";
import { ShoppingCart } from "lucide-react";
import useCart from "@/hooks/use-cart";
import toast from "react-hot-toast";

interface InfoProps{
    data:Product;
}
const Info:React.FC<InfoProps> = ({data}) => {
    const {addItem}= useCart();
    const onAddToCart = ()=>{
        addItem(data);
    }
  return (
    <div>
        <h1 className="text-3xl font-bold text-gray-900">
            {data.name}
        </h1>
        <div className="mt-3 flex items-end">
            <p className="text-2xl text-gray-900">
                <Currency price={data?.price}/>
            </p>
        </div>
        <hr  className="my-4"/>
        <div className="flex items-center gap-x-4">
            <h3 className="font-semibold text-black">
                Size:
            </h3>
            <div>{data?.size?.name}</div>
        </div>
        <div className="flex items-center gap-x-4">
            <h3 className="font-semibold text-black">
                Color:
            </h3>
            <div className="h-6 w-6 rounded-full border border-gray-600" style={{ backgroundColor: data?.color?.value }} />
        </div>
        <div className="mt-10 flex items-center gap-x-3">
                <Button onClick={onAddToCart} className="flex items-center gap-x-2">
                    Add to Cart
                    <ShoppingCart />
                </Button>
            </div>
            
    </div>
  )
}

export default Info