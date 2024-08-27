import { RefObject } from "react";

export function getTicketValues(ulRef: RefObject<HTMLUListElement>){
  const list = ulRef.current;
  if (list) {
    const inputs = list.querySelectorAll('[data-to="ticketCounter"]');
    const values = Array.from(inputs).reduce((acc, input) => {
      acc[(input as HTMLSpanElement).id] = Number((input as HTMLSpanElement).innerText);
      return acc
    }, {} as Record<string, number>);
    return values
  }
}