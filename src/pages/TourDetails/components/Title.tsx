import { Heart, MapPin, ShareNetwork } from "@phosphor-icons/react";

type TitleProps = {
  children: React.ReactNode
  location: string;
}

export default function Title(props: TitleProps) {
  return (
    <hgroup className="w-full flex flex-col gap-2.5">
      <div className="w-full flex flex-row justify-between">
        <div className="flex flex-row gap-3 items-center">
          <span 
            className="text-body-s text-gray-500 flex flex-row gap-1 items-center"
          >
            <MapPin size={24} color="gray"/>
            {props.location}
          </span>
          <a 
            className="font-sans link cursor-pointer hover-bright text-sm text-rose-400"
            href="#view-on-map"
          >
            View on map
          </a>
        </div>
        <div className="flex flex-row gap-3 items-center">
          <ShareNetwork size={24} />
          <Heart size={24} />
        </div>
      </div>
      <h4 className="text-start font-display font-bold text-3xl">{props.children}</h4>
      <hr/>
    </hgroup>
  )
}