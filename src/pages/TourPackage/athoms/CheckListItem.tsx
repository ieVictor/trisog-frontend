import CheckBox from "./CheckBox";

type ListItemProps = {
  label: string;
}

export default function CheckListItem(props: ListItemProps) {
  return (
    <div className="flex items-center">
      <CheckBox/>
      <label htmlFor="default-checkbox" className="ms-2 text-sm font-medium text-gray-600">{props.label}</label>
    </div>
  )
}