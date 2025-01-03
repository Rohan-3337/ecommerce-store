"use client"
import { Category } from "@/lib/types";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { usePathname } from "next/navigation";

interface MainNavProps{
    data:Category[];
}
const MainNav:React.FC<MainNavProps> = ({data}) => {
    const pathname = usePathname();
    const routes = data.map((route:any) =>({
        href:`/category/${route.id}`,
        label:route.name,
        active:pathname===`category/${route.id}`,
    }))
  return (
    <nav className="mx-6 flex items-center space-x-4 lg:space-x-6">
        {
            routes.map((route:any)=>(
                <Link
                 className={cn("text-sm font-medium transition-colors hover:text-black",
                 route.active?"text-black":"text-neutral-500")}
                href={route.href}
                 key={route.href}>
                {route.label}
                </Link>
            ))
        }
    </nav>
  )
}

export default MainNav