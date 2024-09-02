import { toast } from 'react-toastify';

export type stateProps = {
  destination: string | null;
  type: Set<number>;
  date: string | null;
  guests: number | null;
};

export default function handleSubmit(state: stateProps) {
  if (!state.destination || state.destination.length < 0) {
    toast.warning(
      'The destination field must be filled in to perform a search!'
    );
    return;
  }
  if (state.type.size === 0) {
    toast.warning('The type filed must be filled in to perform a search!');
    return;
  }

  if (!state.date) {
    toast.warning('The date field must be filled in to perform a search!');
    return;
  }

  if (!state.guests) {
    toast.warning('The guests field must be filled in to perform a search!');
    return;
  }

  return state;
}
