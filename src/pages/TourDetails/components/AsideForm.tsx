import { DatePicker, Select, SelectItem } from "@nextui-org/react";
import { CalendarBlank } from "@phosphor-icons/react";
import TicketSelector from "../athoms/TicketSelector";
import Button from "../../../components/Button";
import { useCallback, useEffect, useRef, useState } from "react";
import { getTicketValues } from "../helpers/TicketSelectorHelper";
import { parseAbsolute } from "@internationalized/date";

type AsideFormProps = {
  date: {
    initialDate: string;
    finalDate: string;
  }
  valuePerPerson: number;
  maxPeople: number;
  minAge: number;
}

export default function AsideForm(props: AsideFormProps) {
  const personCounter = useRef(null)
  const [daysCounter, setDaysCounter] = useState<number>(0);
  const [date, setDate] = useState<string>("");
  const [total, setTotal] = useState<number>(props.valuePerPerson);
  const [limit, setLimit] = useState<boolean>(false);

  const handleTotal = useCallback(() => {
    const values = getTicketValues(personCounter);
    if (values) {
      const T = ((values["adults"] + values["kids"] + values["children"])) 
      setTotal((T * props.valuePerPerson) * daysCounter);
    } 
  }, [daysCounter, props.valuePerPerson])

  const handleClick = useCallback(() => {
    const values = getTicketValues(personCounter);
    if (values) {
      const T = ((values["adults"] + values["kids"] + values["children"])) 
      if (T < props.maxPeople && limit) (setLimit(!limit));
      if (T === props.maxPeople) setLimit(!limit);
    }
  }, [limit, props.maxPeople])

  const handleSubmit = () => {
    console.log({
      Time: daysCounter,
      Persons: getTicketValues(personCounter),
      Date: date,
      TotalValue: total
    })
  }

  useEffect(() => handleTotal(), [daysCounter, handleTotal])
  return (
    <form className="w-full h-fit flex flex-col max-w-[369px] gap-5 px-7 py-8 bg-gray-200 text-blue-950">
      <h4 className="text-h4 text-blue-950">
        ${props.valuePerPerson} <span className="text-body self-end">/ person</span>
      </h4>
      <hr className="h-0.5" color="#d9d9d9" />
      <DatePicker
        granularity="day"
        dateInputClassNames={{
          label: 'text-subtitle',
          inputWrapper: 'bg-white rounded h-12',
          input: 'text-body-s',
        }}
        minValue={parseAbsolute(props.date.initialDate, 'UTC')}
        maxValue={parseAbsolute(props.date.finalDate, 'UTC')}
        label="Date"
        labelPlacement="outside"
        radius="sm"
        endContent={<CalendarBlank size={24}/>}
        onChange={(v) => setDate(v.toString())}
      />
      <Select 
        label="Time" 
        placeholder="Select" 
        labelPlacement="outside"
        classNames={{
          label: "text-subtitle",
          mainWrapper: "bg-white rounded h-12",
          trigger: "bg-white rounded h-full",
          popoverContent: "rounded-lg"
        }}
        onChange={(v) => setDaysCounter(Number(v.target.value))}
      >
        <SelectItem key={1}>1 day</SelectItem>
        <SelectItem key={2}>2 day</SelectItem>
        <SelectItem key={3}>3 day</SelectItem>
        <SelectItem key={4}>4 day</SelectItem>
        <SelectItem key={5}>5 day</SelectItem>
        <SelectItem key={6}>6 day</SelectItem>
        <SelectItem key={7}>7 day</SelectItem>
      </Select>
      <div className="flex flex-col gap-1 w-full">
        <span className="text-subtitle text-blue-950">Ticket</span>
        <ul className="flex flex-col gap-4" ref={personCounter}>
          <li>
            <TicketSelector 
              limit={limit} 
              label="Adults (18+ years)" 
              id="adults" 
              onClick={handleClick}
              onChange={handleTotal}
            />
          </li>
          <li>
            <TicketSelector 
              limit={limit} 
              label="Kids (12+ years)" 
              id="kids" 
              disabled={props.minAge > 12}
              onClick={handleClick}
              onChange={handleTotal}
            />
          </li>
          <li>
            <TicketSelector 
              limit={limit} 
              label="Children (3+ years)" 
              id="children" 
              disabled={props.minAge > 3}
              onClick={handleClick}
              onChange={handleTotal}
            />
          </li>
        </ul>
      </div>
      <hr className="h-0.5" color="#d9d9d9" />
      <div about="price" className="flex flex-row justify-between items-center">
        <span className="text-body-s text-blue-950">Total</span>
        <h5 className="text-h5 text-rose-500">${total}</h5>
      </div>
      <Button onClick={() => handleSubmit()} text="Book now" type="button" fill/>
    </form>
  )
}