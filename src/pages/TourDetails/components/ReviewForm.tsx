import { useRef } from "react";
import Button from "../../../components/Button";
import TextInput from "../../../components/TextInput";
import RatingSelector, { RatingSelectorHandle } from "../athoms/RatingSelector";
import { getInputValues } from "../helpers/getInputValues";

export default function ReviewForm() {
  const servicesRef = useRef<RatingSelectorHandle>(null);
  const locationsRef = useRef<RatingSelectorHandle>(null);
  const amenitiesRef = useRef<RatingSelectorHandle>(null);
  const pricesRef = useRef<RatingSelectorHandle>(null);
  const roomRef = useRef<RatingSelectorHandle>(null);
  const inputsRef = useRef(null);

  function handleSubmit() {
    const inputValues = getInputValues(inputsRef);
    const content = {
      ...inputValues,
      services: servicesRef.current?.getValue(),
      locations: locationsRef.current?.getValue(),
      amenities: amenitiesRef.current?.getValue(),
      prices: pricesRef.current?.getValue(),
      room: roomRef.current?.getValue(),
    }

    if(inputValues){
      console.log({
        user: inputValues['username'],
        email: inputValues['email'],
        comment: inputValues['comment'],
        createdAt: new Date(),
        rating: {
          services: content.services,
          locations: content.locations,
          amenities: content.amenities,
          prices: content.prices,
          room: content.room,
        }
      })
    }
  }

  return (
    <form className="flex flex-col gap-12 p-7 bg-gray-100">
      <div className="flex flex-col gap-5">
        <h6 className="text-h6 text-blue-950">Add a review</h6>
        <div className="flex flex-col gap-5">
          <div className="flex flex-row w-full items-center gap-10">
            <RatingSelector label="Services" ref={servicesRef}/>
            <RatingSelector label="Locations" ref={locationsRef}/>
            <RatingSelector label="Amenities" ref={amenitiesRef}/>
            <RatingSelector label="Prices" ref={pricesRef}/>
          </div>
          <RatingSelector label="Room comfort and quality" ref={roomRef}/>
        </div>
      </div>

      <div className="flex flex-col w-full gap-4" ref={inputsRef}>
        <div className="flex flex-row w-full gap-4">
          <TextInput placeholder="Your name" type="text" name="username"/>
          <TextInput placeholder="Email address" type="email" name="email"/>
        </div>
        <textarea 
          className={
            "bg-white p-4 text-gray-400 text-body-s min-h-32" + 
            " rounded resize-none outline-none focus:text-blue-950" 
          }
          placeholder="Write your comment"
          name="comment"
          minLength={10}
        />
        <Button onClick={() => handleSubmit()} text="Submit Review" type="button"/>
      </div>
    </form>
  )
}