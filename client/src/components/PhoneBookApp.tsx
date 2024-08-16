import { ChangeEvent, useEffect, useState } from "react";

import { FaPlus, FaSearch } from "react-icons/fa";

import { ActionButton } from "./ActionButton";
import { Contacts } from "./contacts/Contacts";
import { useContactRequest } from "../hooks/useContactRequest";
import { CustomModal } from "./CustomModal";

export const PhoneBookApp = () => {
  const {
    allContacts,
    handleCreateContact,
    handleUpdateContact,
    handleDeleteContact,
  } = useContactRequest();

  const [searchText, setSearchText] = useState<string>("");
  const [isNewModalOpen, setIsNewModalOpen] = useState<boolean>(false);
  const [filteredContacts, setFilteredContacts] =
    useState<ContactsTypes[]>(allContacts);

  useEffect(() => {
    setFilteredContacts(allContacts);
  }, [allContacts]);

  const handleSearch = (text: string) => {
    const newFilteredContacts = allContacts.filter(
      (contact) =>
        contact.firstName.toLowerCase().includes(text.toLowerCase()) ||
        contact.lastName.toLowerCase().includes(text.toLowerCase()) ||
        contact.phoneNumber.toLowerCase().includes(text.toLowerCase())
    );
    setFilteredContacts(newFilteredContacts);
    setSearchText(text);
  };

  const handleAddModalOpen = () => {
    setIsNewModalOpen(true);
  };

  return (
    <section className="flex flex-col gap-6 mt-16">
      <div className="flex justify-between font-semibold">
        <span className="text-3xl text-[#212121]">Contacts</span>
        <ActionButton
          icon={<FaPlus color="#f3f4f6" />}
          text="Add Contact"
          style="font-bold text-gray-100"
          onClick={handleAddModalOpen}
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
      <Contacts
        filteredContacts={filteredContacts}
        handleUpdateContact={handleUpdateContact}
        handleDeleteContact={handleDeleteContact}
      />
      <CustomModal
        title="Add New Contact"
        isOpen={isNewModalOpen}
        setIsOpen={setIsNewModalOpen}
        handleCreateContact={handleCreateContact}
      />
    </section>
  );
};
