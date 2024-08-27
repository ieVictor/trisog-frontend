import Button from "../Button";
import TextInput from "../TextInput";

export default function DestinationForm() {
  const labelStyle = "text-start font-script text-blue-950"
  return (
    <form 
      className={`
        absolute flex gap-5 px-6 h-[110px] items-center self-center bg-white -bottom-10
        rounded-xl border-gray-500 shadow-md
      `}
    >
      <div className="gap-5 flex items-end">
        <TextInput labelStyle={labelStyle} label="Destination" icon="plane" placeholder="Where to go?"/>
        <TextInput labelStyle={labelStyle} label="Type" icon="flag" placeholder="Activity"/>
        <TextInput labelStyle={labelStyle} label="When" icon="date" placeholder="Date" type="date"/>
        <TextInput labelStyle={labelStyle} label="Guests" icon="guests" placeholder="0" type="number"/>
        <Button onClick={() => {}} text="Search" type="button"/>
      </div>
    </form>
  )
}