import { CaretSortIcon } from "@radix-ui/react-icons";
import {
  Button,
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
} from "@radix-ui/themes";
import { FC } from "react";
import { HISTORY_TIME } from "../../models/constant";

type MenuHistoryTimeProps = {
  historyTime: HISTORY_TIME;
  setSelectedItem: (value: HISTORY_TIME) => void;
};

const MenuHistoryTime: FC<MenuHistoryTimeProps> = ({
  historyTime,
  setSelectedItem,
}) => {
  return (
    <DropdownMenu.Root>
      <DropdownMenu.Trigger className="w-[220px]">
        <Button className={`px-0`}>
          <div className="flex items-center justify-between focus-within:outline-none w-full">
            <span>{historyTime}</span>
            <CaretSortIcon width="22" height="22" />
          </div>
        </Button>
      </DropdownMenu.Trigger>
      <DropdownMenuContent className={"w-[220px]"}>
        <DropdownMenuItem
          onSelect={() => {
            setSelectedItem(HISTORY_TIME.A_WEEK_AGO);
          }}
        >
          {HISTORY_TIME.A_WEEK_AGO}
        </DropdownMenuItem>

        <DropdownMenuItem
          onSelect={() => {
            setSelectedItem(HISTORY_TIME.TWO_WEEKS_AGO);
          }}
        >
          {HISTORY_TIME.TWO_WEEKS_AGO}
        </DropdownMenuItem>

        <DropdownMenuSeparator />

        <DropdownMenuItem
          onSelect={() => {
            setSelectedItem(HISTORY_TIME.A_MONTH_AGO);
          }}
        >
          {HISTORY_TIME.A_MONTH_AGO}
        </DropdownMenuItem>
        <DropdownMenuItem
          onSelect={() => {
            setSelectedItem(HISTORY_TIME.THREE_MONTHS_AGO);
          }}
        >
          {HISTORY_TIME.THREE_MONTHS_AGO}
        </DropdownMenuItem>
        <DropdownMenuItem
          onSelect={() => {
            setSelectedItem(HISTORY_TIME.SIX_MONTHS_AGO);
          }}
        >
          {HISTORY_TIME.SIX_MONTHS_AGO}
        </DropdownMenuItem>
        <DropdownMenuSeparator />
        <DropdownMenuItem
          onSelect={() => {
            setSelectedItem(HISTORY_TIME.ALL);
          }}
        >
          {HISTORY_TIME.ALL}
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu.Root>
  );
};

export default MenuHistoryTime;
