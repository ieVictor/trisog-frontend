import { Star } from "@phosphor-icons/react"

type TourInformationRatingProps = {
  children: React.ReactNode
  reviewsCounter: number
}

export default function TourInformationRating(props: TourInformationRatingProps) {
  return (
    <div className="flex flex-col">
      <p className="text-start font-sans text-sm text-gray-400">
        Reviews
      </p>
      <span 
        className="font-display text-start text-base font-semibold text-blue-950 flex gap-1 items-center"
      >
        <Star weight="fill" size={12} color="#FC5056"/>
        {props.children}
        <small className="text-start text-gray-400 text-sans font-sm font-normal hover-bright">
          <a href="#average-reviews">({props.reviewsCounter} reviews</a>)
        </small>
      </span>
    </div>
  )
}