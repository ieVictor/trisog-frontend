import { Slider, SliderValue } from "@nextui-org/react";
import Button from "../../../components/Button";
import InputContainer from "../athoms/InputContainer";
import { useState } from "react";

export default function SliderForm() {
  const [sliderValue, setSliderValue] = useState<SliderValue>(50);
  
  return (
    <InputContainer>
      <h6>Filter By</h6>
      <Slider
        size="sm"
        color="danger"
        maxValue={1000}
        aria-label="Price slider selector"
        minValue={0}
        defaultValue={50}
        onChange={(value) => setSliderValue(value)}
        showTooltip
        tooltipValueFormatOptions={{style: "currency", currency: "BRL"}}
        renderThumb={(props) => (
          <div
            {...props}
            className="group p-1 top-1/2 rounded-full cursor-grab data-[dragging=true]:cursor-grabbing"
          >
            <span 
              className="transition-transform bg-rose-500 shadow-small from-secondary-100 to-secondary-500 rounded-full w-5 h-5 block group-data-[dragging=true]:scale-80" 
            />
          </div>
        )}
      />
      <div className="flex flex-row justify-between">
        <span className="font-sans text-base font-normal text-gray-600">$0.00</span>
        <span className="font-bold font-display text-lg text-gray-600" id="price-value">R${sliderValue}.00</span>
      </div>
      <Button text="Submit" onClick={() => {}} type="button"/>
    </InputContainer>
  )
}