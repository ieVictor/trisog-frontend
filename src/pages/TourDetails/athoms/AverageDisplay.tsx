import { Star } from "@phosphor-icons/react"
import { getColorByAverage, getTextByAverage } from "../helpers/averageHelper"

type AverageDisplayProps = {
  average: number
}
export default function AverageDisplay(props: AverageDisplayProps) {
  return (
    <div 
      className={
        "flex flex-col gap-1 px-12 py-11 " +
        "w-full h-fit max-w-[185px] " +
        getColorByAverage(Number(props.average.toFixed()))
      }
    >
      <h1 className="text-h1 text-white">
        {props.average}
      </h1>
      <span className="flex items-center gap-1 text-white text-body w-full text-wrap justify-center">
        <Star weight="fill" color="white" size={16}/> 
        {getTextByAverage(Number(props.average.toString().charAt(0)))} 
      </span>
    </div>
  )
}
