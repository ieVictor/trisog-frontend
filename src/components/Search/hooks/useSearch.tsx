import { useReducer } from "react";

const initialState = {
  destination: null as string | null,
  type: new Set([]) as Set<number>,
  date: null as string | null,
  guests: 0 as number | null,
}

const initialStateFactory = (URLItems: typeof initialState) => {
  return {
    destination:  URLItems?.destination ? URLItems.destination : initialState.destination,
    type: URLItems?.type ? new Set(Array.from(URLItems.type).map(Number)) : initialState.type,
    date: URLItems?.date ? String(URLItems.date) : initialState.date,
    guests: URLItems?.guests ? URLItems.guests : initialState.guests
  }
}

type Action = 
  | { type: 'SET_DESTINATION'; payload: string }
  | { type: 'SET_TYPE'; payload: Set<number> }
  | { type: 'SET_DATE'; payload: string }
  | { type: 'SET_GUESTS'; payload: number };

function reducer(state: typeof initialState, action: Action) {
  switch (action.type) {
    case 'SET_DESTINATION': 
      return { ...state, destination: action.payload }
    case 'SET_TYPE': 
      return { ...state, type: action.payload }
    case 'SET_DATE': 
      return { ...state, date: action.payload }
    case 'SET_GUESTS': 
      return { ...state, guests: action.payload }
    default:
      return state;
  }
}

export function useSearch(URLItems: typeof initialState) {
  const [state, dispatch] = useReducer(reducer, initialStateFactory(URLItems));
  return {state, dispatch};
}