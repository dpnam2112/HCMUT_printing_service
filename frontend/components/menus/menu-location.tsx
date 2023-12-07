import {
  Button,
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
} from "@radix-ui/themes";

import { CaretSortIcon } from "@radix-ui/react-icons";
import { FC } from "react";
import { Location } from "../../models/types";

type MenuLocationProps = {
  width?: string;
  locations: Location[];
  selectedLocation: Location;
  setSelectedLocation: React.Dispatch<React.SetStateAction<Location>>;
};

const MenuLocation: FC<MenuLocationProps> = ({
  width,
  locations,
  selectedLocation,
  setSelectedLocation,
}) => {
  return (
    <DropdownMenu.Root>
      <DropdownMenu.Trigger className="w-full">
        <Button className={`${width ? "w-full" : "w-3/5"} px-0`}>
          <div className="flex items-center justify-between focus-within:outline-none w-full">
            <span>
              {selectedLocation &&
                `${selectedLocation.campus}, Toà ${selectedLocation.building_name}, phòng ${selectedLocation.room_code} lầu ${selectedLocation.floor}`}
            </span>
            <CaretSortIcon width="22" height="22" />
          </div>
        </Button>
      </DropdownMenu.Trigger>
      <DropdownMenuContent className={width ? width : "w-[340px]"}>
        {locations.map((location, index) => {
          const isSeparator =
            index - 1 >= 0 && locations[index - 1].campus !== location.campus;
          return (
            <>
              {isSeparator && <DropdownMenuSeparator />}

              <DropdownMenuItem
                key={`location_${index}`}
                onSelect={() => {
                  setSelectedLocation(location);
                }}
              >
                {`${location.campus}, Toà ${location.building_name}, phòng ${location.room_code} lầu ${location.floor}`}
              </DropdownMenuItem>
            </>
          );
        })}
      </DropdownMenuContent>
    </DropdownMenu.Root>
  );
};

export default MenuLocation;
