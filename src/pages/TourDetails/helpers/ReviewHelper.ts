export type ReviewType = {
  counter: number
  services: number
  locations: number
  amenities: number
  prices: number
  food: number
  room: number
}

export function calcReview(props: ReviewType) {
  return (
    (props.services +
    props.locations +
    props.amenities +
    props.prices +
    props.food +
    props.room) / 5
  )
}