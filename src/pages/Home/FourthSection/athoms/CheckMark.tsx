import { CheckFat } from "@phosphor-icons/react";

type CheckMarkProps = {
  content: string;
}

export default function CheckMark(props: CheckMarkProps) {
  return (
    <div className="flex flex-row items-center gap-1">
      <CheckFat size={24} className="text-rose-400"/>
      <span className="font-display font-bold text-blue-950 text-base">{props.content}</span>
    </div>
  )
}