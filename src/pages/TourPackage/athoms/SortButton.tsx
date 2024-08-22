import { SortAscending, SortDescending } from "@phosphor-icons/react";
import { useState } from "react";

export default function SortButton() {
  const [sort, setSort] = useState<boolean>(true);

  return (
    <div 
      className="w-fit p-2 hover:bg-gray-200 rounded text-gray-500"
      onClick={() => setSort(!sort)}
    >
      { sort 
        ? <SortAscending size={24}/> 
        : <SortDescending size={24}/>
      }
    </div>
  )
}