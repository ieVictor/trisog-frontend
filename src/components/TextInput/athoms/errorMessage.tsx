import { WarningCircle } from "@phosphor-icons/react";
import { Tooltip } from "@nextui-org/react";

export type ErrorMessageProps = {
  error?: string;
  size?: 'default' | 'small'
}
export function ErrorMessage({error='Error', size='default'}: ErrorMessageProps) {
  if (size === 'default') {
    return (
      <span className="w-max text-caption items-center text-white flex gap-1 absolute right-2 px-1 py-1 bg-rose-500 rounded-lg">
        {error}
        <WarningCircle color="white" size={16}/>
      </span>
    )
  }

  return (
    <span className="w-max text-caption items-center text-white flex gap-1 absolute right-2 px-1 py-1 bg-rose-500 rounded-lg">
      <Tooltip content={error} color="foreground">
        <WarningCircle color="white" size={16}/>
      </Tooltip>
    </span>
  )
}
