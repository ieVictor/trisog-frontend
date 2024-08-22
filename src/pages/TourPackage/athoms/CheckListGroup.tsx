type CheckListGroupProps = {
  title: string;
  children: React.ReactNode;
}

export default function CheckListGroup(props: CheckListGroupProps) {
  if(props.title) return (
    <div className="flex flex-col gap-4 w-full mb-3">
      <p className="text-sm font-sans font-medium text-gray-900">{props.title}</p>
      {props.children}
    </div>
  )
} 