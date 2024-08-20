import { Clock } from "@phosphor-icons/react";
import Rating from "./athoms/Rating";
import Placeholder from '../../assets/tourCardPlaceholder.png'

export default function TourCard() {
  return (
    <div className="flex flex-col gap-4 bg-gray-100 w-[270px] h-[410px]">
      <img src={Placeholder} alt="Coast" />
      <div className="flex flex-col gap-3 px-4">
        <hgroup className="gap-2.5 w-full text-start">
          <sub className="text-gray-400 font-sans w-full text-xs">Budapest Hungary</sub>
          <h6 className="text-blue-950 font-display text-lg font-bold">Wonders of the West Coast & Kimberley</h6>
        </hgroup>
        <data className="flex flex-col gap-2">
          <div className="flex flex-row justify-between">
            <div className="flex flex-row gap-2 items-center">
              <Rating/>
              <span className="text-gray-400 font-sans text-xs">15 reviews</span>
            </div>
            <div className="flex text-gray-400 flex-row gap-1 items-center">
              <Clock size={16}/>
              <span className="font-sans text-xs">7 days</span>
            </div>
          </div>
          <hr className="w-full text-gray-500"/>
        </data>
        <data className="flex flex-row items-center justify-between">
          <span className="font-sans text-xs text-gray-400">Starting From</span>
          <span className="font-script text-lg text-blue-950">$520</span>
        </data>
      </div>
    </div>
  )
}