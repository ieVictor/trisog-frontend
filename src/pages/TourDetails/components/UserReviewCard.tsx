import Rating from "../../../components/TourCard/athoms/Rating";

type UserReviewCardProps = {
  user: {
    username: string
    img?: string;
    reviewsCounter?: number;
  } 
  date: string
  rating: number
  children: string 
}
export default function UserReviewCard(props: UserReviewCardProps) {
  return (
    <div className="flex flex-row gap-4 p-8 w-full border-gray-200 border">
      <img src={props.user.img} alt="userImage" className="rounded-full w-24 h-24"/>
      <div className="flex flex-col gap-4">
        <hgroup className="flex flex-col gap-2">
          <span 
            className="text-caption text-gray-400"
          >
            {props.date}
          </span>
          <h6 className="text-h6 text-blue-950">
            {props.user.username}
          </h6>
          <span className="flex flex-row gap-2 text-body-s text-gray-400">
            <Rating rating={props.rating}/>
            {props.user.reviewsCounter + " reviews"} 
          </span>
        </hgroup>
        <p className="text-body text-gray-500 w-full">
          {props.children}
        </p>
      </div>
    </div>
  )
}