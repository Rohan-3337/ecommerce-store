import { Product } from "@/lib/types";
import qs from "query-string";

const URL = `${process.env.NEXT_PUBLIC_API_URL}/products`;

interface Query {
    categoryId?: string;
    sizeId?: string;
    colorId?: string;
    isFeatured?: boolean;
}

const getProducts = async (query: Query): Promise<Product[]> => {
    const url = qs.stringifyUrl({
        url: URL,
        query: {
            categoryId: query.categoryId,
            sizeId: query.sizeId,
            colorId: query.colorId,
            isFeatured: query.isFeatured
        }
    });
    
    const res = await fetch(url);
    if (!res.ok) {
        throw new Error(`Error fetching products: ${res.statusText}`);
    }

  
    const products = await res.json();
    

    return products;
}

export default getProducts;