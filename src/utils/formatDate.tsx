import { parseAbsolute } from "@internationalized/date";

export function formatDate(dateString: string) {
  const date = new Date(dateString);
  return date.toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric'})
}

export function calculateDurationInDays(startDateISO: string, endDateISO: string): number {
  return (parseAbsolute(endDateISO, 'UTC').day + 1) - parseAbsolute(startDateISO, 'UTC').day
}