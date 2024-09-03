import { Clock } from '@phosphor-icons/react';
import Rating from './athoms/Rating';
import HeartButton from './athoms/HeartButton';
import { useNavigate } from 'react-router-dom';
import { useUser } from '../../hooks/userHooks';
import useModal from '../../hooks/modalHooks';
import Login from '../Modal/components/Login';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Tour } from '../../types/TourType';
import { calculateDurationInDays } from '../../utils/formatDate';

type TourCardProps = {
  data: Tour;
  url: string;
  fill?: boolean;
};

export default function TourCard({ data, fill, url }: TourCardProps) {
  const navigate = useNavigate();
  const userHooks = useUser();
  const { openModal } = useModal();
  const handleClick = () => {
    if (!userHooks.user) {
      toast.info('Create an account to access this Tour!');
      return openModal(<Login />, 'Log in or Sign Up');
    }

    return navigate(url);
  };

  return (
    <div
      className={
        'relative flex flex-col gap-4 bg-gray-100 min-h-[401px] pb-4' +
        (fill ? ' w-full' : ' w-[270px]')
      }
    >
      <HeartButton />
      <a onClick={handleClick} className="cursor-pointer">
        <img
          src={data.img}
          alt="Coast"
          className="w-full h-[220px] object-cover"
        />
        <div className="flex flex-col gap-3 px-4">
          <hgroup className="gap-2.5 w-full text-start overflow-hidden">
            <sub className="text-gray-400 text-caption w-full">
              {data.country.name}, {data.city}
            </sub>
            <h6 className="text-blue-950 text-h6 h-14" title={data.title}>
              {data.title}
            </h6>
          </hgroup>
          <data className="flex flex-col gap-2">
            <div className="flex flex-row justify-between">
              <div className="flex flex-row gap-2 items-center">
                <Rating rating={data.rating} />
                <span className="text-gray-400 font-sans text-xs">
                  {data._count.reviews} reviews
                </span>
              </div>
              <div className="flex text-gray-400 flex-row gap-1 items-center">
                <Clock size={16} />
                <span className="font-sans text-xs">
                  {calculateDurationInDays(data.initialDate, data.finalDate)}{' '}
                  days
                </span>
              </div>
            </div>
            <hr className="w-full text-gray-500" />
          </data>
          <data className="flex flex-row items-center justify-between">
            <span className="font-sans text-xs text-gray-400">
              Starting From
            </span>
            <span className="font-script text-lg text-blue-950">
              ${data.price}
            </span>
          </data>
        </div>
      </a>
    </div>
  );
}
