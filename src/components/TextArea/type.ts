import { ErrorMessageProps } from "../TextInput/athoms/errorMessage";

export type TextAreaProps = {
  id?: string;
  value?: string;
  required?: boolean
  disabled?: boolean
  defaultValue?: string | null;
  onChange?: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
  onFocus?: (e: React.FocusEvent<HTMLTextAreaElement>) => void;
  onBlur?: (e: React.FocusEvent<HTMLTextAreaElement>) => void | (() => void);
  formControl?: void 
  name?: string;
  placeholder?: string;
  label?: string;
  labelStyle?: string;
  validate?: RegExp;
  errorMessage?: string;
  errorMessageSize?: ErrorMessageProps['size']
}