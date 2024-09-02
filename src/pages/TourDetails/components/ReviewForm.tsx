import { useRef, useState } from 'react';
import Button from '../../../components/Button';
import TextInput from '../../../components/TextInput';
import RatingSelector, { RatingSelectorHandle } from '../athoms/RatingSelector';
import { getInputValues } from '../helpers/getInputValues';
import { useUser } from '../../../hooks/userHooks';
import reviewService from '../../../services/api/reviewService';
import { toast } from 'react-toastify';
import { Checkbox, Tooltip } from '@nextui-org/react';
import TextArea from '../../../components/TextArea';

type ReviewFormProps = {
  tourId: string;
  onSubmit: () => Promise<void>;
};

export default function ReviewForm(props: ReviewFormProps) {
  const [anonymous, setAnonymous] = useState<boolean>(false);
  const servicesRef = useRef<RatingSelectorHandle>(null);
  const locationsRef = useRef<RatingSelectorHandle>(null);
  const amenitiesRef = useRef<RatingSelectorHandle>(null);
  const pricesRef = useRef<RatingSelectorHandle>(null);
  const roomRef = useRef<RatingSelectorHandle>(null);
  const foodRef = useRef<RatingSelectorHandle>(null)
  const inputsRef = useRef(null);
  const { user } = useUser();

  async function handleSubmit() {
    const inputValues = getInputValues(inputsRef);
    if ( servicesRef.current && locationsRef.current && amenitiesRef.current && pricesRef.current && roomRef.current && foodRef.current) {
      const content = {
        services: servicesRef.current?.getValue(),
        locations: locationsRef.current?.getValue(),
        amenities: amenitiesRef.current?.getValue(),
        prices: pricesRef.current?.getValue(),
        food: foodRef.current?.getValue(),
        room: roomRef.current?.getValue(),
      };
      
      if (inputValues && user) {
        const data = {
          tourId: props.tourId,
          userId: user.uid,
          creatorName: anonymous ? inputValues['username'] : user.displayName,
          creatorEmail: anonymous ? inputValues['email'] : user.email,
          overview: inputValues['overview'],
          ...content
        };
        const response = await reviewService.createReview({...data}, anonymous)
        if (response)
          if (response.status !== 201) return toast.error(response.data.msg);
          await props.onSubmit();
      }
    }
  }

  return (
    <form className="flex flex-col gap-12 p-7 bg-gray-100">
      <div className="flex flex-col gap-5">
        <h6 className="text-h6 text-blue-950">Add a review</h6>
        <div className="flex flex-col gap-5">
          <div className="flex flex-row w-full items-center gap-10">
            <RatingSelector label="Services" ref={servicesRef} />
            <RatingSelector label="Locations" ref={locationsRef} />
            <RatingSelector label="Amenities" ref={amenitiesRef} />
            <RatingSelector label="Prices" ref={pricesRef} />
          </div>
          <div className="flex flex-row w-full items-center gap-10">
            <RatingSelector label="Food" ref={foodRef} />
            <RatingSelector label="Room comfort and quality" ref={roomRef} />
          </div>
        </div>
      </div>

      <div className="flex flex-col w-full gap-4" ref={inputsRef}>
        { anonymous && 
          <div className="flex flex-row w-full gap-4">
            <TextInput
              placeholder="Your name"
              type="text"
              name="username"
              validate={/^[A-Za-zÀ-ÖØ-öø-ÿ'\- ]{2,}$/}
              errorMessage="Invalid Name"
            />
            <TextInput
              placeholder="Email address"
              type="email"
              name="email"
              validate={/^((?!\.)[\w\-_.]*[^.])(@\w+)(\.\w+(\.\w+)?[^.\W])$/gm}
              errorMessage="Invalid Email"
            />
          </div>
        }
        <TextArea 
          validate={/^[A-Za-zÀ-ÖØ-öø-ÿ'\-0-9,. ]{10,}$/}
          errorMessage='Invalid comment'
          name='overview'
          placeholder='Write your comment'
        />
        <div className='flex flex-row justify-between items-center'>
          <Button
            onClick={() => handleSubmit()}
            text="Submit Review"
            type="button"
          />
          <Tooltip showArrow content={"Don't want to show your profile when writing a review? Make an anonymous comment"} delay={2000} placement='bottom-start'>
            <Checkbox radius='sm' size='md' color='danger' classNames={{ label: "text-body-s"}} onClick={() => setAnonymous(!anonymous)}>
              Anonymous
            </Checkbox>
          </Tooltip>
        </div>
      </div>
    </form>
  );
}
