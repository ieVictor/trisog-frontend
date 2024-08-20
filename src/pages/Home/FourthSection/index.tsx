import Slider from 'react-slick'
import PhotoDump from '../../../assets/WatchNow.png'
import CenteredSubtitle from '../../../components/CenteredSubtitle'
import LeftSubtitle from '../../../components/LeftSubtitle'
import CheckMark from './athoms/CheckMark'
import OutlineButton from './athoms/OutlineButton'
import TourTypeCard from './athoms/TourTypeCard'
export default function FourthSection() {
  return (
    <section className="w-full bg-white gap-16 p-32 pt-8 flex flex-col">

      <div className='flex flex-col gap-16 w-full text-start'>
        <div className='flex flex-row justify-between items-center'>
          <img src={PhotoDump} alt='Photographies'/>
          <div className='flex flex-col max-w-[380px] gap-4'>
            <hgroup className='w-full gap-5 flex flex-col items-start'>
              <LeftSubtitle content='Why Choose Us'/>
              <h1 className='text-blue-950 font-display font-bold text-4xl'>Our Experiences Meet High Quality Standards</h1>
            </hgroup>
            <data className='flex flex-col w-full gap-4'>
              <span className='text-gray-600'>Holisticly optimize proactive strategic theme areas rather than effective manufactured products create.</span>
              <div className='flex flex-wrap justify-between gap-4 pr-8'>
                <CheckMark content='Cheap Rates'/>
                <CheckMark content='Cheap Rates'/>
                <CheckMark content='Hand-picked Tour'/>
                <CheckMark content='Private Guide'/>
              </div>
              <OutlineButton/>
            </data>
          </div>
        </div>
        <hr/>
      </div>

      <hgroup className='flex flex-col justify-center gap-2 w-full'>
        <CenteredSubtitle content='Browse By Category'/>
        <h1 className='font-bold font-display text-blue-950 text-4xl'>Pick a Tour Type</h1>
      </hgroup>

      <div className='w-full'>
        <Slider
          dotsClass="slick-dots -bottom-16 text-rose-500"
          dots
          speed={500}
          slidesToShow={6}
        >
          <TourTypeCard/>
          <TourTypeCard/>
          <TourTypeCard/>
          <TourTypeCard/>
          <TourTypeCard/>
          <TourTypeCard/>
        </Slider>
      </div>
    </section>
  )
}