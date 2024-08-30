import Rating from '../../../components/TourCard/athoms/Rating';

type UserReviewCardProps = {
  user: {
    creatorName: string;
    username: string;
    img: string;
    reviewsCounter: number;
  };
  date: string;
  rating: number;
  anonymous: boolean;
  children: string;
};

const ANONYMOUS_IMG = 'https://i0.wp.com/www.stignatius.co.uk/wp-content/uploads/2020/10/default-user-icon.jpg?w=415&ssl=1';

export default function UserReviewCard(props: UserReviewCardProps) {
  return (
    <div className="flex flex-row gap-4 p-8 w-full border-gray-200 border">
      <img
        src={!props.anonymous ? props.user.img : ANONYMOUS_IMG}
        alt="userImage"
        className="rounded-full w-24 h-24"
      />
      <div className="flex flex-col gap-4">
        <hgroup className="flex flex-col gap-2">
          <span className="text-caption text-gray-400">{props.date}</span>
          <h6 className="text-h6 text-blue-950">{!props.anonymous ? props.user.username : props.user.creatorName}</h6>
          <span className="flex flex-row gap-2 text-body-s text-gray-400">
            <Rating rating={props.rating} />
            {!props.anonymous &&
              props.user.reviewsCounter +
                (props.user.reviewsCounter == 1 ? ' review' : ' reviews')}
          </span>
        </hgroup>
        <p className="text-body text-gray-500 w-full">{props.children}</p>
      </div>
    </div>
  );
}
