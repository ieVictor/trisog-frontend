import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Slider from 'react-slick';
import TourCard from '../../../components/TourCard';
import StatsItem from './athoms/StatsItem';
import CenteredTitle from '../../../components/CenteredTitle';
import { useHomeData } from '../../../hooks/useHomeData';

export default function SecondSection() {
  const { tours, usersCounter, reviewsCounter, countriesCounter } = useHomeData();

  return (
    <section className="flex flex-col w-full bg-white  gap-12 px-32 py-32 pt-36 overflow-hidden">
      <CenteredTitle title="Most Popular Tours" subtitle="Tours" />
      <div className="w-full h-[520px] ">
        <Slider
          infinite={false}
          dotsClass="slick-dots -bottom-16 text-rose-500"
          dots
          speed={500}
          slidesToScroll={4}
          slidesToShow={4}
        >
          {tours &&
            tours.tours.map((tour) => (
              <TourCard data={tour} url={`/tours/${tour.id}`} key={tour.id} />
            ))}
        </Slider>
      </div>
      <hr />
      <data className="flex flex-row items-center justify-between">
        {tours && (
          <>
            <StatsItem
              value={String(countriesCounter?.length)}
              description="Total Destination"
            />
            <StatsItem value={tours.total_tours + '+'} description="Travel Packages" />
            <StatsItem value={usersCounter + "k+"} description="Total Travelers" />
            <StatsItem value={reviewsCounter + "k+"} description="Positive Reviews" />
          </>
        )}
      </data>
    </section>
  );
}
