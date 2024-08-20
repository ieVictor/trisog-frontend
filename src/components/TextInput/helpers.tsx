import { CalendarBlank, Flag, PaperPlaneTilt, Users } from "@phosphor-icons/react";
import { ReactElement } from "react";

export type DestinationFormIcons =
  | 'plane'
  | 'flag'
  | 'date'
  | 'guests'

const FORM_ICONS: Record<DestinationFormIcons, ReactElement> = {
  plane: <PaperPlaneTilt size={18}/>,
  flag: <Flag size={18}/>,
  date: <CalendarBlank size={18}/>,
  guests: <Users size={18}/>,
}

export function getIcon(IconName: DestinationFormIcons): ReactElement {
  return FORM_ICONS[IconName];
}