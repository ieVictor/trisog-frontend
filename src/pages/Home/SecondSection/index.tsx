import CenteredSubtitle from "../../../components/CenteredSubtitle";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from 'react-slick';
import TourCard from "../../../components/TourCard";
import StatsItem from "./athoms/StatsItem";

export default function SecondSection() {
  return (
    <section className="flex flex-col w-full bg-white  gap-12 px-32 py-32 pt-36 overflow-hidden">
      <div className="flex flex-col self-center">
        <CenteredSubtitle content="Tours"/>
        <h2 className="text-blue-950 font-display text-4xl font-bold">Most Popular Tours</h2>
      </div>
      <div className="w-full h-[520px] ">
        <Slider
          dotsClass="slick-dots -bottom-16 text-rose-500"
          dots
          speed={500}
          slidesToShow={4}
        >
          <TourCard/>
          <TourCard/>
          <TourCard/>
          <TourCard/>
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