import mockupImage from '../../assets/tourCardPlaceholder.png';
import Title from './components/Title';
import TourInformations from './components/TourInformations';
import AverageReview from './components/AverageReview';
import ReviewForm from './components/ReviewForm';
import Footer from '../../components/Footer';
import LeafletMap from '../../components/LeafletMap';
import ReviewsList from './components/ReviewsList';
import UserReviewCard from './components/UserReviewCard';
import userImage from '../../assets/firstSection-bg.jpg'
import AsideForm from './components/AsideForm';
import { TourProps } from '../../types/TourType';


export default function TourDetails(props: TourProps) {
  return (
    <>
      <main className="w-full h-full bg-white py-16 px-32">
        <div className="w-full flex flex-row justify-between">
          <div className="w-full max-w-[774px] flex flex-col gap-7">
            <div className="flex flex-col w-full gap-7">
              <img src={mockupImage} alt="Mockup image" />
              <Title location={props.data.location}>
                {props.data.title} 
              </Title>
              <TourInformations 
                informations={props.data.informations} 
                reviews={props.data.reviews} 
                overview={props.data.overview}
              />
              <LeafletMap />
              <AverageReview reviews={props.data.reviews}/>
              <ReviewsList>
                <UserReviewCard
                  rating={4.6}
                  date="March 20, 2022"
                  user={{
                    firstName: 'Sindy',
                    lastName: 'Simmons',
                    reviewsCounter: 15,
                    img: userImage,
                  }}
                >
                  Objectively productivate just in time information with dynamic
                  channels. Energistcally exploit seamless growth strategies
                  after 24/7 experiences.
                </UserReviewCard>
              </ReviewsList>
              <ReviewForm />
            </div>
          </div>
          <AsideForm 
            maxPeople={props.data.informations.maxPeople} 
            minAge={props.data.informations.minAge}
            valuePerPerson={props.data.informations.from}
          />
        </div>
      </main>
      <Footer />
    </>
  );
}
