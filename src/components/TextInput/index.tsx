import { DestinationFormIcons, getIcon } from "./helpers";

interface TextInputProps {
  id?: string;
  value?: string;
  defaultValue?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onFocus?: (e: React.FocusEvent<HTMLInputElement>) => void;
  type?: React.HTMLInputTypeAttribute;
  name?: string;
  placeholder?: string;
  label?: string;
  labelStyle: string;
  icon?: DestinationFormIcons;
}

export default function TextInput(props: TextInputProps) {
  return (
    <div className='flex flex-col gap-1 text-sm w-full'>
      {props.label && <label htmlFor={props.id} className={props.labelStyle || "text-body text-blue-950"}>
        {props.label}
      </label>}

      <div className='flex flex-row items-center min-w-[236px] gap-1 p-3 rounded border bg-white border-gray-200 text-gray-400'>
        {props.icon && getIcon(props.icon)}
        <input  
          id={props.id}
          type={props.type || 'text'} 
          defaultValue={props.defaultValue}
          value={props.value}
          placeholder={props.placeholder}
          onChange={props.onChange}
          onFocus={props.onFocus}
          name={props.name}
          className="bg-transparent outline-none focus:text-blue-950"
        />
      </div>
    </div>
  )
}