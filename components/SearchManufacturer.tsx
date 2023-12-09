"use client";
import { manufacturers } from "@/constants";
import { SearchManufacturerProps } from "@/types";
import { Combobox, Transition } from "@headlessui/react";
import Image from "next/image";
import { Fragment, useState } from "react";

const SearchManufacturer = ({manufacturer,setManufacturer}: SearchManufacturerProps) => {

  const [query, setQuery] = useState("");
  
  const filteredManufactures: string[] = query === "" ? manufacturers : manufacturers.filter((item) => (
    item.toLowerCase().replace(/\s+/g, "").includes(query.toLowerCase().replace(/\s+/g, ""))
  ))


  return (
    <div className="search-manufacturer">
      <Combobox value={manufacturer} onChange={setManufacturer}>
        <div className="relative w-full">
          
          <Combobox.Button className="absolute top-[14px]">
            <Image
              src="/car-logo.svg"
              alt="car-logo"
              width={20}
              height={20}
              className="ml-4"
            />
          </Combobox.Button>

          <Combobox.Input
            className="search-manufacturer__input"
            placeholder="Volkswagen"
            displayValue={(manufacturer: string) => manufacturer}
            onChange={(e) => setQuery(e.target.value)}
          />

          <Transition
            as={Fragment}
            leave="transition ease-in duration-100"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
            afterLeave={() => setQuery("")}
          >
            <Combobox.Options>

                {
                  filteredManufactures.map((araçListesi) => (
                    <Combobox.Option
                    key={araçListesi}
                    className={({active}) => `relative search-manufacturer__option ${active ? "bg-primary-blue text-white" : "text-gray-900"}`}
                    value={araçListesi}>

                      {araçListesi}
                      
                    </Combobox.Option>
                  ))
                }

            </Combobox.Options>

          </Transition>

        </div>
      </Combobox>
    </div>
  );
};

export default SearchManufacturer;
