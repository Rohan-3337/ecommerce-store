import { Product } from "@/lib/types";
import {create} from "zustand"

interface PreviewModalStore{
    isopen: boolean;
    data?:Product;
    onOpen:(data:Product) => void;
    onClose:()=>void;


}

const usePreviewModalStore =create<PreviewModalStore>((set)=>({
    isopen: false,
    data:undefined,
    onOpen:(data)=>set({data,isopen: true}),
    onClose:()=>set({isopen: false}),
}));

export default usePreviewModalStore;