import { MagnifyingGlass } from '@phosphor-icons/react';
import { useState } from 'react';

interface SearchInput {
  id?: string;
  value?: string;
  defaultValue?: string;
  onFocus?: (e: React.FocusEvent<HTMLInputElement>) => void;
  type?: React.HTMLInputTypeAttribute;
  name?: string;
  placeholder?: string;
  label?: string;
  onSubmit: (value: string) => void
}

export default function SearchInput(props: SearchInput) {
  const [value, setValue] = useState<string>('');
  return (
    <div className="flex flex-col gap-1 text-sm">
      {props.label && (
        <label
          htmlFor={props.id}
          className="text-blue-950 font-script self-start font-medium text-sm"
        >
          {props.label}
        </label>
      )}

      <div className="flex flex-row items-center min-w-[214px] gap-1 p-3 rounded-lg  bg-white text-gray-400 relative">
        <input
          id={props.id}
          type={props.type || 'text'}
          defaultValue={props.defaultValue}
          value={props.value}
          placeholder={props.placeholder}
          onChange={e => setValue(e.target.value)}
          onSubmit={() => props.onSubmit(value)}
          onFocus={props.onFocus}
          name={props.name}
          className="bg-transparent outline-none w-full font-sans font-normal text-base"
        />
        <div
          className="flex cursor-pointer justify-center h-fit w-fit p-2 absolute right-2 hover-bright bg-transparent hover:bg-white rounded-full items-center"
          onClick={() => {}}
        >
          <MagnifyingGlass size={24} className="" color="gray" onClick={() => props.onSubmit(value)}/>
        </div>
      </div>
    </div>
  );
}
