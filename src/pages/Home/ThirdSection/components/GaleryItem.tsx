type GaleryItemProps = {
  additionalClass?: string; 
}

export default function GaleryItem(props: GaleryItemProps) {
  return (
    <div className={"flex flex-col g-1 p-5 justify-end items-start bg-galeryItem bg-cover w-full h-full " + (props.additionalClass || "")}>
      <span className="text-white text-sm font-sans">174,688 travelers</span>
      <h6 className="text-white text-xl font-script">United Kingdom</h6>
    </div>
  )
}