import TourInformationItem from "../athoms/TourInformationItem";
import TourInformationRating from "../athoms/TourInformationRating";

type TourInformationsProps = {
  overview: string;
  informations: {
    duration: number
    from: number
    minAge: number
    maxPeople: number
    tourType: string
  };
  reviews: {
    counter: number
    services: number
    locations: number
    amenities: number
    prices: number
    room: number
    average: number
  }
}

export default function TourInformations(props: TourInformationsProps) {
  return (
    <>
      <div className="w-full flex flex-row gap-11 items-center">
        <TourInformationItem title="From" informationColor="text-rose-500">${props.informations.from}</TourInformationItem>
        <TourInformationItem title="Duration">{props.informations.duration} days</TourInformationItem>
        <TourInformationItem title="Max People">{props.informations.maxPeople}</TourInformationItem>
        <TourInformationItem title="Min Age">{props.informations.minAge}</TourInformationItem>
        <TourInformationItem title="Tour Type">{props.informations.tourType}</TourInformationItem>
        <TourInformationRating reviewsCounter={props.reviews.counter}>{props.reviews.average}</TourInformationRating>
      </div>
      <div className="flex flex-col gap-3">
        <h5 className="text-h5 text-blue-950">Overview</h5>
        <span className="text-body text-gray-500">
          {props.overview}
        </span>
      </div>
    </>
  )
}