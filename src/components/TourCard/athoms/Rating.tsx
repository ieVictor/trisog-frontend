import { Star } from '@phosphor-icons/react';

type RatingsProps = {
  rating: number;
}

export default function Rating(props: RatingsProps) {
  return (
    <div className="flex flex-row items-center px-1 py-1 bg-rose-400 text-white rounded">
      <Star size={12} weight='fill' color='white'/>
      <span className="font-sans text-xs">{ props.rating }</span>
    </div>
  )
}