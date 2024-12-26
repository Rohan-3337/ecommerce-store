import { Product } from "@/lib/types";
import toast from "react-hot-toast";
import {create} from "zustand"
import { persist,createJSONStorage } from "zustand/middleware";

interface CartStore{
    items: Product[];
    addItem: (product: Product) => void;
    removeItem: (id:string)=> void;
    removeAllItems: () => void;
}

const useCart =create(
    persist<CartStore>((set, get) => ({
    items:[],
    addItem: (product: Product) =>{
        const currentItems = get().items;
        const existingItems = currentItems.find(item => item.id ===product.id);
        if(existingItems){
            return toast("Product already added in your cart");
        }
        set({items:[...get().items,product]});
        toast.success("Product added in your cart");
    },
    removeItem:(id:string)=>{
        set({items:[...get().items.filter(item => item.id !==id)]});
        toast.success("Product removed from your cart");
    },
    removeAllItems:()=> {
        set({items:[]});
    },
}), {
    name: "cart-storage",
    storage: createJSONStorage(() => localStorage)
})
);
export default useCart;