import { SortAscending, SortDescending } from "@phosphor-icons/react";
import { useState } from "react";

type SortButtonProps = {
  onClick: (direction: string) => void;
}

export default function SortButton(props: SortButtonProps) {
  const [direction, setDiretion] = useState<boolean>(true);
  const [value, setValue] = useState<string>('asc');

  const handleClick = () => {
    setDiretion(!direction);
    setValue(value === 'asc' ? 'desc' : 'asc');
    props.onClick(value);
  }

  return (
    <div 
      className="w-fit p-2 hover:bg-gray-200 rounded text-gray-500"
      onClick={handleClick}
    >
      { direction 
        ? <SortAscending size={24}/> 
        : <SortDescending size={24}/>
      }
    </div>
  )
}