import { Select, SelectItem } from "@nextui-org/react";
import { CaretDown } from "@phosphor-icons/react";
import SortButton from "../athoms/SortButton";

type SearchStatsProps = {
  counter: number;
}

export default function SearchStats(props: SearchStatsProps) {
  return (
    <div className="flex flex-row w-full justify-between">
      <p className="text-gray-500">{props.counter} tours</p>

      <div className="flex flex-row gap-2 w-fit items-center justify-center">
        <p className="text-gray-500 w-max text-nowrap">Sort By</p>
        <SortButton/>
        <Select 
          className="min-w-44" 
          radius="sm"  
          placeholder="Filter by"
          selectorIcon={ <CaretDown size={16} color="gray"/> } 
          variant="bordered"
          aria-label="Select the filter option"
        >
          <SelectItem key={"title"}>Title</SelectItem>
          <SelectItem key={"price"}>Price</SelectItem>
          <SelectItem key={"rating"}>Rating</SelectItem>
        </Select>
      </div>
    </div>

  )
}