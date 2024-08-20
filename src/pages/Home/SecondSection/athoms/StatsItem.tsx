type StatsItemProps = {
  value: string;
  description: string;
}

export default function StatsItem(props: StatsItemProps) {
  return (
    <div className="gap-2 flex flex-row items-center justify-center">
      <h6 className="text-start text-4xl font-script text-blue-950">{props.value}</h6>
      <span className="font-sans text-sm text-gray-500">{props.description}</span>
    </div>
  )
}