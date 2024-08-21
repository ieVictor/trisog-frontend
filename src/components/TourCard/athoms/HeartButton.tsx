import { Heart } from "@phosphor-icons/react";
import { useState } from "react";

function FilledHeart() {
  return (
    <svg width="16" height="16" viewBox="0 0 32 32" filter="invert(58%) sepia(88%) saturate(1816%) hue-rotate(312deg) brightness(106%) contrast(116%)" xmlns="http://www.w3.org/2000/svg">
      <path d="M22.25 5C19.6688 5 17.4088 6.11 16 7.98625C14.5912 6.11 12.3312 5 9.75 5C7.69528 5.00232 5.72539 5.81958 4.27248 7.27248C2.81958 8.72539 2.00232 10.6953 2 12.75C2 21.5 14.9737 28.5825 15.5262 28.875C15.6719 28.9533 15.8346 28.9943 16 28.9943C16.1654 28.9943 16.3281 28.9533 16.4737 28.875C17.0262 28.5825 30 21.5 30 12.75C29.9977 10.6953 29.1804 8.72539 27.7275 7.27248C26.2746 5.81958 24.3047 5.00232 22.25 5Z" fill="#343330"/>
    </svg>
  )
}

export default function HeartButton() {
  const [heartFill, setHeartFill] = useState<boolean>(false);
  return (
    <button 
      className={`
        flex absolute right-2 top-2 items-center p-2 rounded-full text-black bg-white border border-transparent
        ${!heartFill && 'transition-colors  hover:bg-rose-400 hover:text-white'}
        ${heartFill && 'transition-colors hover:border hover:border-rose-400'}
      `}
      type="button"
      onClick={() => setHeartFill(!heartFill)}
    >
      { heartFill ? <FilledHeart/> : <Heart size={16}/> }
    </button>
  )
}