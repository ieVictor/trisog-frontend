export type TourInformations = {
  duration: number;
  minAge: number;
  from: number;
  maxPeople: number;
  tourType: string;
};

export type TourReviews = {
  counter: number;
  average: number;
  services: number;
  locations: number;
  amenities: number;
  prices: number;
  food: number;
  room: number;
};

export type TourProps = {
  data: {
    title: string;
    overview: string;
    location: string;
    informations: TourInformations;
    reviews: TourReviews;
  };
};

export type Tour = {
  id: string;
  title: string;
  img: string;
  overview: string;
  country: string;
  city: string;
  latitude: number;
  longitude: number;
  price: number;
  initialDate: string;
  finalDate: string;
  maxPeople: number;
  minAge: number;
  rating: number;
  _count: { reviews: number };
  categories: {
    tourId: string;
    categoryId: number;
    category: {
      id: string;
      name: string;
    };
  }[];
};

export type UniqueTour = {
  id: string;
  title: string;
  img: string;
  overview: string;
  country: string;
  city: string;
  latitude: number;
  longitude: number;
  price: number;
  initialDate: string;
  finalDate: string;
  maxPeople: number;
  minAge: number;
  rating: number;
  _count: { reviews: number };
  ratings: {
    services: number;
    locations: number;
    amenities: number;
    prices: number;
    food: number;
    room: number;
  };
  categories: {
    tourId: string;
    categoryId: number;
    category: {
      id: string;
      name: string;
    };
  }[];
};

export type Ratings = {
  services: number;
  locations: number;
  amenities: number;
  prices: number;
  food: number;
  room: number;
}