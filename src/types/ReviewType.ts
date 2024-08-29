export type Review = {
  id: string;
  tourId: string;
  userId: string;
  overview: string;

  average: number;
  services: number;
  locations: number;
  amenities: number;
  prices: number;
  food: number;
  room: number;

  createdAt: string;
  user: {
    id: string;
    email: string;
    username: string;
    img: string;
  }
}

