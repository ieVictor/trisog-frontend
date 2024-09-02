import { useReducer } from 'react';

const initialState = {
  searchContent: '' as string | null,
};

type Action = { type: 'SET_SEARCH_POPOVER'; payload: string | null };

function reducer(state: typeof initialState, action: Action) {
  switch (action.type) {
    case 'SET_SEARCH_POPOVER':
      return { ...state, searchContent: action.payload };
    default:
      return state;
  }
}

export function useSearchPopover() {
  const [state, dispatch] = useReducer(reducer, initialState);
  return { state, dispatch };
}
