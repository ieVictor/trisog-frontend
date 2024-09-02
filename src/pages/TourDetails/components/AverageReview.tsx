import { Ratings } from '../../../types/TourType';
import AverageDisplay from '../athoms/AverageDisplay';
import AverageProgressDisplay from '../athoms/AverageProgressDisplay';

type AverageReviewProps = {
  average: number;
  ratings: Ratings;
  reviewsCounter: number;
};

export default function AverageReview(props: AverageReviewProps) {
  return (
    <div className="flex flex-col gap-3">
      <h5 className="text-h5 text-blue-950" id="average-reviews">
        Average Reviews
      </h5>
      <div className="bg-gray-100 flex flex-row gap-8 px-6 py-7 w-full relative">
        <AverageDisplay
          average={Math.floor(props.average * 10) / 10}
          counter={props.reviewsCounter}
        />
        <div className="grid grid-rows-2 grid-cols-2 w-full gap-x-8 gap-y-5 h-fit">
          <AverageProgressDisplay
            average={props.ratings.services}
            label="Services"
          />
          <AverageProgressDisplay
            average={props.ratings.prices}
            label="Prices"
          />
          <AverageProgressDisplay
            average={props.ratings.locations}
            label="Locations"
          />
          <AverageProgressDisplay average={props.ratings.food} label="Food" />
          <AverageProgressDisplay
            average={props.ratings.amenities}
            label="Amenities"
          />
          <AverageProgressDisplay
            average={props.ratings.room}
            label="Room comfort and quality"
          />
        </div>
        {!props.reviewsCounter && (
          <span className="absolute right-6 bottom-7 text-caption">
            No data yet.{' '}
            <strong className="text-rose-500 hover-bright cursor-pointer">Add a review!</strong>
          </span>
        )}
      </div>
    </div>
  );
}
