import { ErrorMessageProps } from "./athoms/errorMessage";
import { DestinationFormIcons } from "./helpers";

export type TextInputProps = {
  id?: string;
  value?: string;
  required?: boolean
  disabled?: boolean
  defaultValue?: string | null;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onFocus?: (e: React.FocusEvent<HTMLInputElement>) => void;
  onBlur?: (e: React.FocusEvent<HTMLInputElement>) => void | (() => void);
  formControl?: void 
  type?: React.HTMLInputTypeAttribute;
  name?: string;
  placeholder?: string;
  label?: string;
  labelStyle?: string;
  icon?: DestinationFormIcons;
  validate?: RegExp;
  errorMessage?: string;
  errorMessageSize?: ErrorMessageProps['size']
}