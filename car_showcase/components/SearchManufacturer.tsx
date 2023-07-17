"use client";
import Image from "next/image";
import { SearchManufacturerProps } from "@/app/types";
import { Combobox, Transition } from "@headlessui/react";
import { useState, Fragment } from "react";
const SearchManufacturer = ({
  manufacturer,
  setManufacturer,
}: SearchManufacturerProps) => {
  const [query, setQuery] = useState("");
  return (
    <div className="search_manufacturer">
      <Combobox>
        <div className="relative w-full">
          <Combobox.Button className="absolute top-[14px]">
            <Image
              src="/car-logo.svg"
              width={20}
              height={20}
              className="ml-4"
              alt="Car logo"
            ></Image>
          </Combobox.Button>
          <Combobox.Input
            className="search-manufacturer_input"
            placeholder="Volkswagen"
            displayValue={(manufacturer: string) => manufacturer}
            onChange={(e) => setQuery(e.target.value)}
          ></Combobox.Input>
          <Transition as={Fragment}></Transition>
        </div>
      </Combobox>
    </div>
  );
};

export default SearchManufacturer;
