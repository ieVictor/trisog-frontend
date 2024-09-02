import { SuitcaseRolling } from '@phosphor-icons/react';
import { useNavigate } from 'react-router-dom';

type TourTypeCardProps = {
  categoryName: string;
  categoryId: number;
  tourCounter: number;
  lowestPrice: number;
};

export default function TourTypeCard(props: TourTypeCardProps) {
  const navigate = useNavigate();
  const handleClick = () => {
    return navigate(`/tours?destination=&type=${props.categoryId}&date=&guests=`);
  };
  return (
    <div
      className="flex flex-col gap-4 px-4 py-6 bg-white border border-gray-300 max-w-[170px] cursor-pointer hover-bright"
      onClick={handleClick}
    >
      <SuitcaseRolling
        size={24}
        color="white"
        className="p-2 size-10 rounded-full bg-red-400"
      />
      <hgroup className="text-start w-full">
        <h6 className="text-blue-950 font-display font-bold text-lg">
          {props.categoryName}
        </h6>
        <span className="text-gray-400 font-sans text-base">
          {props.tourCounter} Tours+
        </span>
      </hgroup>
      <data className="flex flex-row gap-2 items-center">
        <span className="font-sans text-gray-400">From</span>
        <p className="font-script text-rose-400 text-xl flex-1 text-start">
          <strong>${props.lowestPrice}</strong>
        </p>
      </data>
    </div>
  );
}
