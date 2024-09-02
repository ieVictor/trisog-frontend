import { Star } from '@phosphor-icons/react';
import { formatRating } from '../../../utils/formatRating';

type RatingsProps = {
  rating: number;
}

export default function Rating(props: RatingsProps) {
  const handleColor = (rating: number) => rating ? 'bg-rose-400' : 'bg-gray-400';
  return (
    <div 
      className={
        "flex flex-row gap-0.5 min-w-10 justify-center items-center" +
        " px-1 py-1 text-white rounded " +
        handleColor(props.rating)
      }
    >
      <Star size={12} weight='fill' color='white'/>
      <span className="font-sans text-xs">{ props.rating ? formatRating(props.rating) : '-'}</span>
    </div>
  )
}