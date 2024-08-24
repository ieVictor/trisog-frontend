import { TourReviews } from "../../../types/TourType";
import AverageDisplay from "../athoms/AverageDisplay";
import AverageProgressDisplay from "../athoms/AverageProgressDisplay";

type AverageReviewProps = {
  reviews: TourReviews
}

export default function AverageReview(props: AverageReviewProps) {
  return (
    <div className="flex flex-col gap-3">
      <h5 className="text-h5 text-blue-950" id="average-reviews">Average Reviews</h5>
      <div 
        className="bg-gray-100 flex flex-row gap-8 px-6 py-7 w-full"
      >
        <AverageDisplay average={props.reviews.average}/>
        <div className="grid grid-rows-2 grid-cols-2 w-full gap-x-8 gap-y-5 h-fit">
          <AverageProgressDisplay average={props.reviews.services} label="Services"/>
          <AverageProgressDisplay average={props.reviews.prices} label="Prices"/>
          <AverageProgressDisplay average={props.reviews.locations} label="Locations"/>
          <AverageProgressDisplay average={props.reviews.food} label="Food"/>
          <AverageProgressDisplay average={props.reviews.amenities} label="Amenities"/>
          <AverageProgressDisplay average={props.reviews.room} label="Room comfort and quality"/>
        </div>
      </div>
    </div>
  )

}