import StarFilled from '../../../assets/StarFilled.svg'

type RatingsProps = {
  rating: number;
}

export default function Rating(props: RatingsProps) {
  return (
    <div className="flex flex-row items-center px-1 py-1 bg-rose-400 text-white rounded">
      <img src={StarFilled} alt="Rating Star" width={12}/>
      <span className="font-sans text-xs">{ props.rating }</span>
    </div>
  )
}