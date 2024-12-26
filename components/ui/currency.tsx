import { formatter } from "@/lib/utils";
import { useEffect, useState } from "react";


interface CurrencyProps{
    price?:string | number;
}
const Currency = ({price}:CurrencyProps) => {
    const [isMounted,setIsMounted] = useState(false);
    useEffect(()=>{
        setIsMounted(true);
    },[]);
    if(!isMounted){
        return null;
    }

  return (
    <div className="font-semibold">{formatter.format(Number(price)) }</div>
  )
}

export default Currency