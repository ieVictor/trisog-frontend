export type AverageColors =
  | 'bg-rose-500'
  | 'bg-rose-400'
  | 'bg-gray-400'

export type AverageTexts =
  | "Bad"
  | "Ok"
  | "Nice"
  | "Good"
  | "Excellent"
  | "Perfect"
  | "-"

const AVERAGE_DISPLAY_COLORS: Record<number, AverageColors> = {
  5: "bg-rose-500",
  4: "bg-rose-500",
  3: "bg-gray-400",
  2: "bg-gray-400",
  1: "bg-gray-400",
  0: "bg-gray-400"
}

const AVERAGE_DISPLAY_TEXTS: Record<number, AverageTexts> = {
  5: "Perfect",
  4: "Excellent",
  3: "Good",
  2: "Nice",
  1: "Ok",
  0: "Bad"
}


export function getTextByAverage(Average: number, Counter: number): AverageTexts {
  if (!Counter) return "-"
  return AVERAGE_DISPLAY_TEXTS[Average]
}

export function getColorByAverage(Average: number): AverageColors {
  return AVERAGE_DISPLAY_COLORS[Average];
}