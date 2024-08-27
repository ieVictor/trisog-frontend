import { Minus, Plus } from "@phosphor-icons/react"
import { useEffect, useState } from "react"

type TicketSelectorProps = {
  label: string
  limit: boolean
  id: string 
  disabled?: boolean
  onChange: () => void
  onClick: () => void
}

export default function TicketSelector(props: TicketSelectorProps) {
  const [counter, setCounter] = useState<number>(0);

  const isActive = () => { 
    if(props.disabled) return !props.disabled;
    return counter > 0 
  };

  useEffect(() => props.onClick, [counter, props.onClick])
  useEffect(() => props.onChange, [counter, props.onChange])

  return (
    <div className="flex flex-row justify-between items-center">
      <span 
        className={"text-body-s text-blue-950" + (props.disabled ? " text-gray-400 line-through" : "")}
      >
        {props.label}
      </span>
      <div className="flex flex-row gap-1 items-center">

        <button 
          type="button" 
          title="Remove"
          onClick={() => {setCounter(counter > 0 ? counter - 1 : 0)}}
          className={
            "flex items-center justify-center size-8 rounded-lg bg-gray-50 border border-gray-400" +
            (!isActive() ? " disabled:bg-zinc-200 cursor-auto text-gray-400" : " hover-bright transition-all")
          }
          disabled={!isActive()}
        >
          <Minus/>
        </button>

        <div 
          className={
            "flex items-center justify-center size-8 rounded-lg bg-gray-50 border border-gray-400" +
            (props.disabled ? " bg-zinc-200 text-gray-400" : "")
          }
        >
          <span className="text-subtitle text-gray-500" id={props.id} data-to="ticketCounter">{counter}</span>
        </div>

        <button 
          type="button" 
          title="Add"
          onClick={() => {setCounter(counter + 1)}}
          className={
            "flex items-center justify-center size-8 rounded-lg bg-gray-50 border border-gray-400 transition-all" +
            " enabled:hover-bright enabled:cursor-pointer" +
            " disabled:bg-zinc-200 text-gray-400"  
          }
          disabled={props.disabled || props.limit}
        >
          <Plus/>
        </button>
      </div>
    </div>
  )
}