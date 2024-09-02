import { RefObject } from 'react';

export function getInputValues(divRef: RefObject<HTMLDivElement>) {
  const div = divRef.current;
  if (div) {
    const inputs = div.querySelectorAll('input, textarea');
    const values = Array.from(inputs).reduce((acc, input) => {
      acc[(input as HTMLInputElement).name] = (input as HTMLInputElement).value;
      return acc;
    }, {} as Record<string, string>);
    return values;
  }
  return undefined;
}