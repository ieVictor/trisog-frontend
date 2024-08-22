import { MagnifyingGlass } from "@phosphor-icons/react";

interface SearchInput {
  id?: string;
  value?: string;
  defaultValue?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onFocus?: (e: React.FocusEvent<HTMLInputElement>) => void;
  type?: React.HTMLInputTypeAttribute;
  name?: string;
  placeholder?: string;
  label?: string;
}

export default function SearchInput(props: SearchInput) {
  return (
    <div className='flex flex-col gap-1 text-sm'>
      {props.label && <label htmlFor={props.id} className="text-blue-950 font-script self-start font-medium text-sm">
        {props.label}
      </label>}

      <div className='flex flex-row items-center min-w-[214px] gap-1 p-3 rounded-lg  bg-white text-gray-400'>
        <input  
          id={props.id}
          type={props.type || 'text'} 
          defaultValue={props.defaultValue}
          value={props.value}
          placeholder={props.placeholder}
          onChange={props.onChange}
          onFocus={props.onFocus}
          name={props.name}
          className="bg-transparent outline-none w-full font-sans font-normal text-base"
        />
        <MagnifyingGlass size={24}/> 
      </div>
    </div>
  )
}