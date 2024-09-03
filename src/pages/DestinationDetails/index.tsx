import { useEffect, useState } from 'react';
import { Country } from '../../types/CountryType';
import countryService from '../../services/api/countryService';
import { useParams } from 'react-router-dom';
import { MapContainer, TileLayer } from 'react-leaflet';
import { PaginationTourResponse } from '../../types/TourType';
import { fetchData as fetchTours } from '../../utils/fetchToursData';
import Slider from 'react-slick';
import TourCard from '../../components/TourCard';
import Footer from '../../components/Footer';

export default function DestinationDetails() {
  const [data, setData] = useState<Country | null>(null);
  const [relatedTours, setRelatedTours] =
    useState<PaginationTourResponse | null>(null);
  const { id } = useParams();

  useEffect(() => {
    async function fetchData() {
      try {
        if (id) {
          const response = await countryService.getCountryById(id);
          const tours = await fetchTours(
            undefined,
            undefined,
            undefined,
            8,
            undefined,
            undefined,
            undefined,
            [id],
            undefined,
            undefined,
            undefined
          );
          if (response) setData(response.data);
          if (tours) setRelatedTours(tours);
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
        <main className="w-full h-full bg-white flex flex-col">
          <section
            style={{
              backgroundImage: `url(https://firebasestorage.googleapis.com/v0/b/trisog-compass.appspot.com/o/destinationSection-bg.png?alt=media&token=384fbd00-615d-43d2-b9d7-774e4d484b47)`,
            }}
            className={
              'w-full h-72 bg-cover bg-center ' +
              ' flex flex-col text-center justify-center gap-4 relative text-white'
            }
          >
            <h1 className="font-bold font-display text-5xl">{data.name}</h1>
            <span className="font-normal text-base font-display">
              Home / Destination{' '}
              <strong className="text-rose-400">{data.name}</strong>
            </span>
          </section>
          <div className="flex flex-row px-32 py-20 gap-7 w-full">
            <div className="max-w-[770px] w-full flex flex-col gap-8">
              <img
                src={data.img}
                alt={data.title}
                className="h-[400px] object-cover w-full"
              />
              <div className="w-full flex flex-row justify-between overflow-hidden">
                <img
                  className="w-full max-w-[170px] object-cover"
                  src="https://firebasestorage.googleapis.com/v0/b/trisog-compass.appspot.com/o/1654074194_UkVisa.jpg?alt=media&token=5a1c63b9-ddb8-4249-ba4c-63009be928d6"
                  alt="Uk"
                />
                <img
                  className="w-full max-w-[170px] object-cover"
                  src="https://firebasestorage.googleapis.com/v0/b/trisog-compass.appspot.com/o/5c0a411b2600005e048482fe.jpeg?alt=media&token=d285f385-f960-4d32-8f50-cd4cc9701958"
                  alt="Uk"
                />
                <img
                  className="w-full max-w-[170px] h-[170px] object-cover"
                  src="https://firebasestorage.googleapis.com/v0/b/trisog-compass.appspot.com/o/photo-1486299267070-83823f5448dd.avif?alt=media&token=ccdd9820-87f5-4ee5-a24b-5df7fb43e43c"
                  alt="Uk"
                />
                <div className="relative max-w-[170px] h-[170px] flex items-center justify-center">
                  <div className="absolute flex flex-col items-center z-20">
                    <span className="font-script text-white text-2xl">12+</span>
                    <span className="text-body-s text-white text-base">
                      More photo
                    </span>
                  </div>
                  <img
                    className="w-full h-full object-cover filter: brightness-50"
                    src="https://firebasestorage.googleapis.com/v0/b/trisog-compass.appspot.com/o/anthony-delanoix-CFi7_hCXecU-unsplash-scaled-e1699257657324.webp?alt=media&token=d2888955-bdeb-4951-adb4-a1c28ecb4b55"
                    alt="Uk"
                  />
                </div>
              </div>
              <div className="flex flex-col gap-4">
                <h5 className="text-h5">About {data.isoCode}</h5>
                <span className="text-body text-gray-500">{data.overview}</span>
              </div>
              <div className="flex flex-col gap-4">
                <h5 className="text-h5">Basic information</h5>
                <div className="flex flex-col bg-gray-200 p-10 gap-5">
                  <span className="flex flex-row">
                    <span className="text-gray-500 w-60">Country</span>
                    <span className="text-action">{data.name}</span>
                  </span>
                  <span className="flex flex-row">
                    <span className="text-gray-500 w-60">Language</span>
                    <span className="text-action">{data.language}</span>
                  </span>
                  <span className="flex flex-row">
                    <span className="text-gray-500 w-60">Currency</span>
                    <span className="text-action">{data.currency}</span>
                  </span>
                  <span className="flex flex-row">
                    <span className="text-gray-500 w-60">Area</span>
                    <span className="text-action">
                      {data.area.toLocaleString()} Square miles
                    </span>
                  </span>
                  <span className="flex flex-row">
                    <span className="text-gray-500 w-60">Population</span>
                    <span className="text-action">
                      {data.population.toLocaleString()} persons
                    </span>
                  </span>
                  <span className="flex flex-row">
                    <span className="text-gray-500 w-60">Time zone</span>
                    <span
                      className="text-action overflow-hidden"
                      title={data.timeZone}
                    >
                      {data.timeZone.split(' ')[0]}
                    </span>
                  </span>
                  <span className="flex flex-row">
                    <span className="text-gray-500 w-60">Time zone</span>
                    <span className="text-action overflow-hidden">
                      {data.timeToTravel}
                    </span>
                  </span>
                </div>
              </div>
            </div>
            <div className="flex flex-col w-full max-w-[369px] gap-7">
              <MapContainer
                center={[data.latitude, data.longitude]}
                zoom={10}
                scrollWheelZoom={false}
                style={{ width: '100%', height: 240 }}
              >
                <TileLayer
                  attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                  url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
              </MapContainer>
              <div className="bg-gray-100 w-full h-full max-h-[360px] flex flex-col px-7 py-8 gap-4">
                <h6 className="text-h6">Weather</h6>
                <div className="flex flex-col gap-7">
                  <span className="text-body text-gray-500 flex flex-row gap-12 border-b border-gray-400">
                    <span>Jan - Feb</span>
                    <span>12oc - 18oc</span>
                  </span>
                  <span className="text-body text-gray-500 flex flex-row gap-12 border-b border-gray-400">
                    <span>Mar - Apr</span>
                    <span>12oc - 18oc</span>
                  </span>
                  <span className="text-body text-gray-500 flex flex-row gap-12 border-b border-gray-400">
                    <span>Jul - Aug</span>
                    <span>12oc - 18oc</span>
                  </span>
                  <span className="text-body text-gray-500 flex flex-row gap-12 border-b border-gray-400">
                    <span>Sep - Oct</span>
                    <span>12oc - 18oc</span>
                  </span>
                  <span className="text-body text-gray-500 flex flex-row gap-12 border-b border-gray-400">
                    <span>Nov - Dec</span>
                    <span>12oc - 18oc</span>
                  </span>
                </div>
              </div>
            </div>
          </div>
            {relatedTours && (
              <div className="w-full flex flex-col items-center gap-14 px-32">
                <h3 className="text-h3 self-start">You may also like...</h3>
                <div className="w-full h-[520px] ">
                  <Slider
                    infinite={false}
                    dotsClass="slick-dots -bottom-16 text-rose-500"
                    dots
                    speed={500}
                    slidesToShow={4}
                  >
                    {relatedTours.tours.map((tour) =>
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
        <Footer/>
      </>
    )
  );
}
