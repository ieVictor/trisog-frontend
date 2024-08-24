// type TourDetailsProps = {
//   data: {
//     title: string;
//     overview: string;
//     duration: number;
//     informations: {
//       from: number;
//       maxPeople: number;
//       tourType: string; 
//     };
//     reviews: {
//       services: number
//       locations: number
//       amenities: number
//       prices: number
//       room: number
//     }
//   }
// }

import { TourProps } from "../types/TourType";


export const TourModel: TourProps = {
  data: {
    title:  "Wonders of the West Coast & Kimberly",
    overview: "Istanbul, the vibrant and historic city straddling the continents of Europe and Asia, offers an enchanting blend of cultures, sights, and experiences that captivate every traveler’s heart. As Turkey’s cultural and economic hub. Instabul seamlesly fuses its rich heritage with modernity, creating an unforgettable journey for visitors.",
    location: "Budapest, Hungary",
    informations: {
      duration: 7,
      from: 104,
      minAge: 12,
      maxPeople: 25,
      tourType: "Adventures, Beaches",
    },
    reviews: {
      counter: 15,
      services: 4,
      locations: 3.8,
      amenities: 3,
      prices: 4,
      food: 3.5,
      room: 4.6,
      average: 4.8
    }
  }
}
