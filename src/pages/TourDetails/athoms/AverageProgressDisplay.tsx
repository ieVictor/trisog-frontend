import { Progress } from "@nextui-org/react"
import { formatRating } from "../../../utils/formatRating"

type AverageProgressDisplayProps = {
  average: number
  label: string 
}

export default function AverageProgressDisplay(props: AverageProgressDisplayProps) {
  return (
    <div className="flex flex-row gap-3 items-center w-full h-fit">
      <Progress 
        color="danger" 
        size="md"
        id={props.label + "-rating"} 
        label={props.label}
        value={props.average}
        classNames={{ track: "h-2", label: "text-body-s"}}
        maxValue={5} 
        minValue={0}
      />
      <span className="text-body-s text-gray-500 self-end !leading-4 w-[22px]">{formatRating(props.average)}</span>
    </div>
  )
}