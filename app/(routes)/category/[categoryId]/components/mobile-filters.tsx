"use client"

import Button from "@/components/ui/Button";
import IconButton from "@/components/ui/icon-button";
import { Color, Size } from "@/lib/types"
import { Dialog, DialogPanel } from "@headlessui/react";
import { Plus, X } from "lucide-react";
import { useState } from "react";
import Filter from "./filter";

interface MobileFilterProps{
    sizes: Size[];
    colors:Color[];
    
}
const MobileFilter:React.FC<MobileFilterProps> = ({sizes,colors}) => {
  const [open,setOpen] = useState(false);
  const onOpen = ()=>setOpen(true);
  const onClose = ()=>setOpen(false);
  return (
    <>
    <Button className="flex  gap-x-2  items-center lg:hidden" onClick={onOpen}>
      Filter
      <Plus size={20}/>
    </Button>
    <Dialog open={open}  onClose={onClose} className={" relative z-40 lg:hidden"}>
        <div className="fixed inset-0 bg-black bg-opacity-25">
          <DialogPanel className={" relative ml-auto flex h-full w-full max-w-xs flex-col overflow-y-auto bg-white py-4 pb-6 shadow-xl"}>
            <div className="flex items-center justify-end px-4">
                <IconButton icon={<X size={15}/>} onClick={onClose} />
            </div>
            <div className="p-4">
            <Filter valueKey="sizeId" name="Sizes" data={sizes} />
            <Filter valueKey="colorId" name="Colors" data={colors} />
            </div>
          </DialogPanel>
        </div>
    </Dialog>
    </>
  )
}

export default MobileFilter