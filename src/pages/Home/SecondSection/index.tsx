import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from 'react-slick';
import TourCard from "../../../components/TourCard";
import StatsItem from "./athoms/StatsItem";
import CenteredTitle from "../../../components/CenteredTitle";
import { useEffect, useState } from "react";
import { Tour } from "../../../types/TourType";
import tourService from "../../../services/api/tourService";
import { toast } from "react-toastify";

export default function SecondSection() {
  const [data, setData] = useState<Tour[] | null>(null);

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await tourService.getTours();
        if (response) {
          if (response.status !== 200) return toast.warning('Request Error!');
          setData(response.data);
        } 
      } catch (error) { console.log(error) };
    }
    fetchData();
  }, []) 

  return (
    <section className="flex flex-col w-full bg-white  gap-12 px-32 py-32 pt-36 overflow-hidden">
      <CenteredTitle title="Most Popular Tours" subtitle="Tours"/>
      <div className="w-full h-[520px] ">
        <Slider
          infinite={false}
          dotsClass="slick-dots -bottom-16 text-rose-500"
          dots
          speed={500}
          slidesToShow={4}
        >
          {
            data && data.map(tour => (
              <TourCard data={tour} url={`/tours/${tour.id}`} key={tour.id}/>
            ))
          }
        </Slider>
      </div>
      <hr/>
      <data className="flex flex-row items-center justify-between">
        <StatsItem value="120+" description="Total Destination"/>
        <StatsItem value="500+" description="Travel Package"/>
        <StatsItem value="12k+" description="Total Travelers"/>
        <StatsItem value="7k+" description="Positive Reviews"/>
      </data>
    </section>
  )
}