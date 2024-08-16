import { ChangeEvent, useState } from "react";

import { FaPlus, FaSearch } from "react-icons/fa";

import { ActionButton } from "./ActionButton";
import { Contacts } from "./contacts/Contacts";
import { useContactRequest } from "../hooks/useContactRequest";

export const PhoneBookApp = () => {
  const [searchText, setSearchText] = useState<string>("");
  const { allContacts } = useContactRequest();

  const handleSearch = (text: string) => {
    setSearchText(text);
  };

  return (
    <section className="flex flex-col gap-6 mt-16">
      <div className="flex justify-between font-semibold">
        <span className="text-3xl text-[#212121]">Contacts</span>
        <ActionButton
          icon={<FaPlus color="#f3f4f6" />}
          text="Add Contact"
          style="font-bold text-gray-100"
        />
      </div>
      <div className="flex items-center gap-3 p-3 rounded border border-gray-400 text-[#212121] bg-white">
        <FaSearch color="#374151" />
        <input
          type="search"
          className="w-full outline-none bg-transparent"
          value={searchText}
          onChange={(e: ChangeEvent<HTMLInputElement>) =>
            handleSearch(e.target.value)
          }
          placeholder="Search for contact..."
        />
      </div>
      <Contacts allContacts={allContacts} />
    </section>
  );
};
