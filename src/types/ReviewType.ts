export type Review = {
  id: string;
  tourId: string;
  userId: string;
  overview: string;
  creatorName: string;
  creatorEmail: string;

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
    _count: { reviews: number };
  }

  anonymous: boolean;
} 

export type ReviewInsert = {
  tourId: string
  userId: string;
  overview: string;
  services: number;
  locations: number;
  amenities: number;
  prices: number;
  food: number;
  room: number;
}

