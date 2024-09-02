import Title from './components/Title';
import TourInformations from './components/TourInformations';
import AverageReview from './components/AverageReview';
import ReviewForm from './components/ReviewForm';
import Footer from '../../components/Footer';
import ReviewsList from './components/ReviewsList';
import UserReviewCard from './components/UserReviewCard';
import AsideForm from './components/AsideForm';
import { Tour, UniqueTour } from '../../types/TourType';
import { useEffect, useRef, useState } from 'react';
import tourService from '../../services/api/tourService';
import { toast } from 'react-toastify';
import { Review } from '../../types/ReviewType';
import reviewService from '../../services/api/reviewService';
import { calculateDurationInDays, formatDate } from '../../utils/formatDate';
import { Image, VideoCamera } from '@phosphor-icons/react';
import Slider from 'react-slick';
import TourCard from '../../components/TourCard';
import { useParams } from 'react-router';
import { MapContainer, TileLayer } from 'react-leaflet';
import { Map } from 'leaflet';

export default function TourDetails() {
  const [data, setData] = useState<UniqueTour | null>(null);
  const [reviewData, setReviewData] = useState<Review[] | null>(null);
  const [relatedTours, setRelatedTours] = useState<Tour[] | null>(null);
  const { id } = useParams();
  const mapRef = useRef<Map>(null);

  async function onFormSubmit() {
    try {
      if (id) {
        const response = await reviewService.getReviewsByTourId(id);
        if (response) {
          if (response.status !== 200) {
            toast.warning('Reviews request Error');
            return;
          }
          setReviewData(response.data);
        }
      }
    } catch (error) {
      console.error(error);
    }
  }

  useEffect(() => {
    async function fetchData() {
      try {
        if (id) {
          const response = await tourService.getTourById(id);
          const reviewResponse = await reviewService.getReviewsByTourId(id);
          if (response && reviewResponse) {
            if (response.status !== 200 && reviewResponse.status !== 200)
              return toast.warning('Request Error!');
            const relatedTours = await tourService.getToursByCategory(
              response.data.categories[0].categoryId
            );
            if (mapRef.current) {
              mapRef.current.setView(
                [response.data.latitude, response.data.longitude],
                15
              );
            }
            if (relatedTours) setRelatedTours(relatedTours.data);
            setData(response.data);
            setReviewData(reviewResponse.data);
          }
        }
      } catch (error) {
        console.error(error);
      }
    }
    fetchData();
  }, [id]);

  return (
    data && (
      <>
        <main className="w-full h-full bg-white py-16 px-32 flex flex-col gap-28">
          <div className="w-full flex flex-row justify-between">
            <div className="w-full max-w-[774px] flex flex-col gap-7">
              <div className="flex flex-col w-full gap-7">
                <div className="w-full h-fit relative">
                  <img
                    src={data.img}
                    alt={data.title}
                    className="h-[400px] object-cover w-full"
                  />
                  <div className="flex flex-row gap-3 items-center absolute bottom-4 right-4">
                    <button
                      className={
                        'flex flex-row gap-1 px-3 py-1 items-center bg-slate-50' +
                        ' rounded-lg border border-gray-400 text-blue-900 hover-bright'
                      }
                      type="button"
                    >
                      <span className="text-action">Video</span>
                      <VideoCamera size={18} />
                    </button>
                    <button
                      className={
                        'flex flex-row gap-1 px-3 py-1 items-center bg-slate-50 ' +
                        ' rounded-lg border border-gray-400 text-blue-900 hover-bright'
                      }
                      type="button"
                    >
                      <span className="text-action">Gallery</span>
                      <Image size={18} />
                    </button>
                  </div>
                </div>
                <Title location={`${data.country}, ${data.city}`}>
                  {data.title}
                </Title>
                <TourInformations
                  informations={{
                    duration: calculateDurationInDays(
                      data.initialDate,
                      data.finalDate
                    ),
                    from: data.price,
                    maxPeople: data.maxPeople,
                    minAge: data.minAge,
                    tourType: data.categories
                      .map((category) => category.category.name)
                      .join(','),
                  }}
                  reviews={{
                    counter: data._count.reviews,
                    average: data.rating,
                  }}
                  overview={data.overview}
                />
                <div className="w-full flex flex-col h-fit gap-3">
                  <h5 className="text-h5 text-blue-950" id="view-on-map">
                    Map
                  </h5>
                  <MapContainer
                    center={[data.latitude, data.longitude]}
                    zoom={15}
                    scrollWheelZoom={false}
                    style={{ width: '100%', height: 380 }}
                    ref={mapRef}
                  >
                    <TileLayer
                      attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                      url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                    />
                  </MapContainer>
                </div>
                <AverageReview
                  ratings={data.ratings}
                  average={data.rating}
                  reviewsCounter={data._count.reviews}
                />
                {reviewData && (
                  <>
                    <ReviewsList>
                      {reviewData.map((review) => (
                        <UserReviewCard
                          key={review.id}
                          rating={review.average}
                          date={formatDate(review.createdAt)}
                          user={{
                            creatorName: review.creatorName,
                            username: review.user.username,
                            img: review.user.img,
                            reviewsCounter: review.user._count.reviews,
                          }}
                          anonymous={review.anonymous}
                        >
                          {review.overview}
                        </UserReviewCard>
                      ))}
                    </ReviewsList>
                  </>
                )}
                <ReviewForm tourId={data.id} onSubmit={onFormSubmit} />
              </div>
            </div>
            <AsideForm
              date={{
                initialDate: data.initialDate,
                finalDate: data.finalDate,
              }}
              maxPeople={data.maxPeople}
              minAge={data.minAge}
              valuePerPerson={data.price}
            />
          </div>
          {relatedTours && (
            <div className="w-full flex flex-col items-center gap-14">
              <h3 className="text-h3 ">You may also like...</h3>
              <div className="w-full h-[520px] ">
                <Slider
                  infinite={false}
                  dotsClass="slick-dots -bottom-16 text-rose-500"
                  dots
                  speed={500}
                  slidesToShow={4}
                >
                  {relatedTours.map((tour) =>
                    tour.id !== data.id ? (
                      <TourCard
                        data={tour}
                        url={`/tours/${tour.id}`}
                        key={tour.id}
                      />
                    ) : null
                  )}
                </Slider>
              </div>
            </div>
          )}
        </main>
        <Footer />
      </>
    )
  );
}
