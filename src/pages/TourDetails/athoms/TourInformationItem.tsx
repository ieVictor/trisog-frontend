
type TourInformationItemProps = {
  title: string;
  informationColor?: string;
  children: React.ReactNode
}
export default function TourInformationItem(props: TourInformationItemProps) {
  return (
    <div className="flex flex-col">
      <p className="text-body-s text-gray-400">
        {props.title}
      </p>
      <span 
        className={
          "text-subtitle " 
          + (props.informationColor ? props.informationColor : "text-blue-950")
        }
      >
        {props.children}
      </span>
    </div>
  )
}