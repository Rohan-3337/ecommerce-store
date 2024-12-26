import {Category} from "@/lib/types"

const url =`${process.env.NEXT_PUBLIC_API_URL}/categories`;


const getCategory = async(id:string): Promise<Category> =>{
    const URL  = `${url}/${id}`;
    const res = await fetch(URL);
    
    return  await res.json();

}
export default getCategory;