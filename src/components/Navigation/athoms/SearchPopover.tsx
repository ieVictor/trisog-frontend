import { Popover, PopoverContent, PopoverTrigger } from '@nextui-org/popover';
import { MagnifyingGlass } from '@phosphor-icons/react';
import { useSearchPopover } from '../hooks/usePopoverSearch';

type SearchPopoverProps = {
  onSubmit: (searchContent: string) => void;
};

export default function SearchPopover(props: SearchPopoverProps) {
  const { state, dispatch } = useSearchPopover();
  return (
    <Popover placement="bottom">
      <PopoverTrigger>
        <MagnifyingGlass size={24} className="cursor-pointer" />
      </PopoverTrigger>
      <PopoverContent>
        <div className="flex flex-row px-1 items-center ">
          <div
            className="flex cursor-pointer justify-center h-fit w-fit p-2 hover-bright bg-transparent hover:bg-white rounded-full items-center"
            onClick={() => {}}
          >
            <MagnifyingGlass
              size={20}
              className=""
              color="gray"
              onClick={() => props.onSubmit(state.searchContent || "")}
            />
          </div>
          <input
            placeholder="Search..."
            value={state.searchContent || ''}
            className="bg-white text-body-s w-full outline-none h-12"
            onSubmit={() => props.onSubmit(state.searchContent || "")}
            onChange={(value) =>
              dispatch({
                type: 'SET_SEARCH_POPOVER',
                payload: value.target.value,
              })
            }
          />
        </div>
      </PopoverContent>
    </Popover>
  );
}
