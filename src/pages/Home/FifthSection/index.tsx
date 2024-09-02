import { Quotes } from '@phosphor-icons/react'
import CenteredTitle from '../../../components/CenteredTitle'
import Slider from 'react-slick'
import { Quotation } from './athoms/Quotation'

export default function FifthSection() {
  return (
    <section className="w-full flex flex-row justify-center gap-36 py-20 bg-gray-100">
      <img src={'https://firebasestorage.googleapis.com/v0/b/trisog-compass.appspot.com/o/PhotoDump.png?alt=media&token=ea4c1fd4-cba3-4263-a55d-590edf829a65'} alt="Photos"/>
      <div className='w-full flex flex-col max-w-[482px] gap-4'>
        <div className='w-full flex flex-col items-center gap-12'>
          <CenteredTitle title='What Travelers Say' subtitle='Testimonials'/>
          <Quotes size={32} className='text-rose-500'/>
        </div>
        <Slider
          infinite={false} 
          dotsClass="slick-dots -bottom-16 text-rose-500"
          dots
          arrows={false}
          speed={500}
          slidesToShow={1}
        >
          <Quotation author='-By Molie Rosa, Photographer'>
           “The UI designs he crafted are top-notch, 
           and the design system he integrated allows for straight forward fixes and bulk 
           updates throughout almost every area of the app.”   
          </Quotation>
          <Quotation author='-By Molie Rosa, Photographer'>
           “The UI designs he crafted are top-notch, 
           and the design system he integrated allows for straight forward fixes and bulk 
           updates throughout almost every area of the app.”   
          </Quotation>
          <Quotation author='-By Molie Rosa, Photographer'>
           “The UI designs he crafted are top-notch, 
           and the design system he integrated allows for straight forward fixes and bulk 
           updates throughout almost every area of the app.”   
          </Quotation>
        </Slider>
      </div>
    </section>
  )
}