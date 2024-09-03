import { useNavigate } from "react-router-dom";

type GaleryItemProps = {
  additionalClass?: string;
  id: string;
  img: string;
  country: string
};

export default function GaleryItem(props: GaleryItemProps) {
  const navigate = useNavigate();
  const handleClick = () => {
    if (props.id) navigate(`/destination/${props.id}`)
  }
  return (
    <div
      className={
        'relative flex flex-col bg-cover w-full h-full bg-origin-border cursor-pointer ' +
        (props.additionalClass || '')
      }
      onClick={handleClick}
    >
      <img src={props.img} alt="Destination img" className="absolute w-full h-full object-cover filter: brightness-50"/>
      <div className="absolute left-4 bottom-4">
        <span className="text-white text-sm font-sans">174,688 travelers</span>
        <h6 className="text-white text-xl font-script">{props.country}</h6>
      </div>
    </div>
  );
}
