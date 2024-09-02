type GaleryItemProps = {
  additionalClass?: string; 
}

export default function GaleryItem(props: GaleryItemProps) {
  return (
    <div className={"flex flex-col g-1 p-5 justify-end items-start bg-[url('https://firebasestorage.googleapis.com/v0/b/trisog-compass.appspot.com/o/tourCardPlaceholder.png?alt=media&token=5f773863-50f0-43a1-be30-b1b366ac145b')] bg-cover w-full h-full " + (props.additionalClass || "")}>
      <span className="text-white text-sm font-sans">174,688 travelers</span>
      <h6 className="text-white text-xl font-script">United Kingdom</h6>
    </div>
  )
}