export type TourInformations = {
  duration: number;
  minAge: number;
  from: number;
  maxPeople: number;
  tourType: string; 
}

export type TourReviews = {
  counter: number
  average: number
  services: number
  locations: number
  amenities: number
  prices: number
  food: number
  room: number
}

export type TourProps = {
  data: {
    title: string;
    overview: string;
    location: string;
    informations: TourInformations
    reviews: TourReviews
  }
}