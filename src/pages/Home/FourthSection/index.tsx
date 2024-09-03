import Slider from 'react-slick';
import LeftSubtitle from '../../../components/LeftSubtitle';
import CheckMark from './athoms/CheckMark';
import OutlineButton from './athoms/OutlineButton';
import TourTypeCard from './athoms/TourTypeCard';
import CenteredTitle from '../../../components/CenteredTitle';
import { useHomeData } from '../../../hooks/useHomeData';
export default function FourthSection() {
  const { categories } = useHomeData();

  return (
    <section className="w-full bg-white gap-16 p-32 pt-8 flex flex-col">
      <div className="flex flex-col gap-16 w-full text-start">
        <div className="flex flex-row justify-between items-center">
          <img src={'https://firebasestorage.googleapis.com/v0/b/trisog-compass.appspot.com/o/WatchNow.png?alt=media&token=a8cecf5f-3fe0-4ae7-a892-878d66afdf6b'} alt="Photographies" />
          <div className="flex flex-col max-w-[380px] gap-4">
            <hgroup className="w-full gap-5 flex flex-col items-start">
              <LeftSubtitle content="Why Choose Us" />
              <h1 className="text-blue-950 font-display font-bold text-4xl">
                Our Experiences Meet High Quality Standards
              </h1>
            </hgroup>
            <data className="flex flex-col w-full gap-11">
              <span className="text-gray-600">
                Holisticly optimize proactive strategic theme areas rather than
                effective manufactured products create.
              </span>
              <div className="flex flex-wrap justify-between gap-4 pr-8">
                <CheckMark content="Cheap Rates" />
                <CheckMark content="Cheap Rates" />
                <CheckMark content="Hand-picked Tour" />
                <CheckMark content="Private Guide" />
              </div>
              <OutlineButton />
            </data>
          </div>
        </div>
        <hr />
      </div>
      <CenteredTitle title="Pick a Tour Type" subtitle="Browse By Category" />
      <div className="w-full">
        <Slider
          infinite={false}
          dotsClass="slick-dots -bottom-16 text-rose-500"
          dots
          speed={500}
          slidesToShow={6}
        >
          {categories &&
            categories.map((category) => (
              <TourTypeCard
                key={category.id}
                categoryId={category.id}
                categoryName={category.name}
                lowestPrice={category.lowestPrice ? category.lowestPrice : 0}
                tourCounter={category.tourCount ? category.tourCount : 0}
              />
            ))}
        </Slider>
      </div>
    </section>
  );
}
