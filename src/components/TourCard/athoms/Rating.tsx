import { Star } from "@phosphor-icons/react";

export default function Rating() {
  return (
    <div className="flex flex-row items-center px-1 py-1 bg-rose-400 text-white rounded">
      <Star size={12}/>
      <span className="font-sans text-xs">4.6</span>
    </div>
  )

}