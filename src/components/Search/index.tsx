import { DatePicker, Input, Select, SelectItem } from '@nextui-org/react';
import Button from '../Button';
import {
  CalendarBlank,
  CaretDown,
  Flag,
  PaperPlaneTilt,
  Users,
} from '@phosphor-icons/react';
import { useCategories } from '../../hooks/categoriesHooks';
import { useSearch } from './hooks/useSearch';
import { useUser } from '../../hooks/userHooks';
import { toast } from 'react-toastify';
import Login from '../Modal/components/Login';
import handleSubmit from './handlers/handleSubmit';
import useModal from '../../hooks/modalHooks';
import { useNavigate, useSearchParams } from 'react-router-dom';
import { parseAbsolute } from '@internationalized/date';

const INPUT_STYLE = {
  label: 'font-script ',
  inputWrapper:
    'bg-transparent h-full rounded border border-gray-200 data-[hover=true]:bg-white[data-hover="true"]',
  mainWrapper: 'w-full',
  input: 'placeholder:text-gray-400 text-body-s',
};

export default function Search() {
  const [searchParams, setSearchParams] = useSearchParams();
  const { categories } = useCategories();
  const { user } = useUser();
  const { openModal } = useModal();
  const navigate = useNavigate();
  const destination = searchParams.get('destination');
  const typeParam = searchParams.get('type');
  const date = searchParams.get('date');
  const guestsParam = searchParams.get('guests');
  const type = typeParam ? new Set(typeParam.split(',').map(Number)) : new Set<number>();
  const guests = guestsParam ? parseInt(guestsParam, 10) : null;
  const { state, dispatch } = useSearch({destination, type, guests, date});

  const handleClick = () => {
    if (!user) {
      toast.info('Create an account to access this feature!');
      return openModal(<Login />, 'Log in or Sign Up');
    }

    const payload = {
      destination: String(state.destination),
      type: String(Array.from(state.type)[0]),
      date: String(state.date),
      guests: String(state.guests),
    };

    const validation = handleSubmit(state);
    if (!validation) return;

    navigate(`/tours`);
    setSearchParams({ ...payload });
  };

  return (
    <form
      className={`
        absolute flex gap-5 px-6 w-full max-w-[1205px] h-[110px] items-center self-center bg-white -bottom-10
        rounded-xl border-gray-500 shadow-md 
      `}
    >
      <div className="gap-5 flex items-end w-full">
        <Input
          isRequired
          label="Destination"
          value={state.destination || ''}
          defaultValue={destination ? destination : undefined}
          labelPlacement="outside"
          startContent={<PaperPlaneTilt size={18} color="gray" />}
          placeholder="Where to go?"
          className="h-[46px]"
          classNames={INPUT_STYLE}
          onChange={(value) =>
            dispatch({
              type: 'SET_DESTINATION',
              payload: value.target.value,
            })
          }
        />
        {categories && (
          <Select
            label="Type"
            labelPlacement="outside"
            isRequired
            classNames={{
              mainWrapper: 'h-full',
              label: 'font-script',
              trigger: 'bg-transparent border rounded h-full',
            }}
            className="h-[46px]"
            startContent={<Flag size={18} color="gray" />}
            selectorIcon={<CaretDown size={18} color="gray" />}
            placeholder="Activity"
            defaultSelectedKeys={type ? Array.from(type).map(String) : []}
            onSelectionChange={(value) =>
              dispatch({
                type: 'SET_TYPE',
                payload: value as Set<number>,
              })
            }
          >
            {categories.map((category) => (
              <SelectItem value={String(category.id)} key={category.id}>
                {category.name}
              </SelectItem>
            ))}
          </Select>
        )}
        <DatePicker
          granularity="day"
          defaultValue={date ? parseAbsolute(String(date), 'UTC') : undefined}
          dateInputClassNames={{
            label: 'text-start font-script',
            inputWrapper: 'h-[46px] bg-transparent border rounded',
            input: 'text-white fill-white',
          }}
          classNames={{
            selectorButton: 'order-first',
            input: 'placeholder:text-gray-200 text-gray-200',
          }}
          className="w-full"
          label="Date"
          labelPlacement="outside"
          radius="sm"
          isRequired
          onChange={(date) =>
            dispatch({
              type: 'SET_DATE',
              payload: date.toDate().toISOString(),
            })
          }
          selectorIcon={<CalendarBlank size={18} color="#9ba1ad" />}
        />
        <Input
          startContent={<Users size={18} color="gray" />}
          label="Guests"
          value={state.guests ? String(state.guests) : ''}
          defaultValue={guests ? String(guests) : undefined}
          inputMode='numeric'
          isRequired
          labelPlacement="outside"
          classNames={INPUT_STYLE}
          className="h-[46px]"
          placeholder="People"
          type="number"
          onChange={(value) =>
            dispatch({
              type: 'SET_GUESTS',
              payload: Number(value.target.value),
            })
          }
        />
        <Button onClick={handleClick} text="Search" type="button" />
      </div>
    </form>
  );
}
