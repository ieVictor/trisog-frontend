import { useEffect, useMemo, useState } from 'react';
import { getIcon } from './helpers';
import { TextInputProps } from './type';
import { ErrorMessage } from './athoms/errorMessage';

const DEFAULT_STYLE = 'border-gray-200 bg-white text-gray-400';
const ERROR_STYLE = 'border-red-400 bg-red-100 text-black';
const DISABLED_STYLE = 'border-gray-300 bg-gray-200 text-gray-400';

export default function TextInput(props: TextInputProps) {
  const [style, setStyle] = useState<string>(
    props.disabled ? DISABLED_STYLE : DEFAULT_STYLE
  );
  const [value, setValue] = useState<string>(props.defaultValue || '');

  const isInvalid = useMemo(() => {
    if (value === '') return false;
    if (props.validate) return value.match(props.validate) ? false : true;
    return false;
  }, [value, props.validate]);

  useEffect(() => {
    if (props.disabled) return setStyle(DISABLED_STYLE);
    setStyle(isInvalid ? ERROR_STYLE : DEFAULT_STYLE);
  }, [isInvalid, props.disabled]);

  return (
    <div className="flex flex-col gap-1 text-sm w-full">
      {props.label && (
        <label
          htmlFor={props.id}
          className={props.labelStyle || 'text-body text-blue-950'}
        >
          {props.label}
        </label>
      )}

      <div
        className={
          'flex relative flex-row items-center min-w-[236px] gap-1 p-3 rounded border ' +
          style
        }
      >
        {props.icon && getIcon(props.icon)}
        <input
          id={props.id}
          type={props.type || 'text'}
          defaultValue={value}
          value={props.value}
          placeholder={props.placeholder}
          onChange={(e) => setValue(e.target.value)}
          onBlur={props.onBlur}
          onFocus={props.onFocus}
          name={props.name}
          disabled={props.disabled}
          className="bg-transparent outline-none focus:text-blue-950 w-full"
        />
        {isInvalid && (
          <ErrorMessage
            error={props.errorMessage}
            size={props.errorMessageSize}
          />
        )}
      </div>
    </div>
  );
}
