import { Heart } from "@phosphor-icons/react";
import { useState } from "react";

export default function HeartButton() {
  const [heartFill, setHeartFill] = useState<boolean>(false);
  return (
    <button 
      className={`
        flex absolute right-3 top-3 items-center p-2 rounded-full text-black bg-white border border-transparent
        ${!heartFill && 'transition-colors  hover:bg-rose-400 hover:text-white'}
        ${heartFill && 'transition-colors hover:border hover:border-rose-400'}
      `}
      type="button"
      onClick={() => setHeartFill(!heartFill)}
    >
      { heartFill ? <Heart size={16} weight="fill" color="#fb7185"/> : <Heart size={16}/> }
    </button>
  )
}