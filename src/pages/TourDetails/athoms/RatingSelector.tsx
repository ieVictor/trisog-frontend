import { Star } from '@phosphor-icons/react';
import { forwardRef, useImperativeHandle, useRef, useState } from 'react';

type RatingSelectorProps = {
  label?: string;
};

export type RatingSelectorHandle = {
  getValue: () => number;
};

type StarProps = {
  onClick: () => void;
  starId: number;
  ratingCounter: number;
};

function CheckBoxStar(props: StarProps) {
  return (
    <Star
      weight="fill"
      onClick={props.onClick}
      className={
        'transition-all cursor-pointer ' +
        (props.ratingCounter >= props.starId
          ? 'text-rose-500'
          : 'text-gray-400')
      }
    />
  );
}

const RatingSelector = forwardRef<RatingSelectorHandle, RatingSelectorProps>(
  (props: RatingSelectorProps, ref) => {
    const [ratingCounter, setRatingCounter] = useState<number>(0);
    const starRef = useRef(null);

    useImperativeHandle(ref, () => ({
      getValue: () => ratingCounter,
    }));

    return (
      <div className="flex flex-col gap-2" id={props.label + '-stars'}>
        {props.label && (
          <span className="text-body-s text-gray-600">{props.label}</span>
        )}
        <div className="flex flex-row gap-1" ref={starRef}>
          <CheckBoxStar
            onClick={() => setRatingCounter(1)}
            ratingCounter={ratingCounter}
            starId={1}
          />
          <CheckBoxStar
            onClick={() => setRatingCounter(2)}
            ratingCounter={ratingCounter}
            starId={2}
          />
          <CheckBoxStar
            onClick={() => setRatingCounter(3)}
            ratingCounter={ratingCounter}
            starId={3}
          />
          <CheckBoxStar
            onClick={() => setRatingCounter(4)}
            ratingCounter={ratingCounter}
            starId={4}
          />
          <CheckBoxStar
            onClick={() => setRatingCounter(5)}
            ratingCounter={ratingCounter}
            starId={5}
          />
        </div>
      </div>
    );
  }
);

export default RatingSelector;
