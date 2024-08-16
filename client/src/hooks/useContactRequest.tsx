import { SetStateAction, useEffect, useState } from "react";

import {
  createContact,
  fetchAllContacts,
} from "../services/api";

interface UseContactRequestProps {
  allContacts: ContactsTypes[];
  setAllContacts: (value: SetStateAction<ContactsTypes[]>) => void;
  handleCreateContact: (value: ContactsTypes) => void;
}

export const useContactRequest = (): UseContactRequestProps => {
  const [allContacts, setAllContacts] = useState<ContactsTypes[]>([]);

  const changeProps = (
    props: AllContactResponse | ContactsTypes
  ): AllContactResponse | ContactsTypes => {
    if ((props as ContactsTypes)?.firstName) {
      return {
        id: (props as ContactsTypes)?.uuid ?? null,
        first_name: (props as ContactsTypes).firstName,
        last_name: (props as ContactsTypes).lastName,
        phone_number: (props as ContactsTypes).phoneNumber,
      };
    }

    return {
      uuid: (props as AllContactResponse).id as string,
      firstName: (props as AllContactResponse).first_name,
      lastName: (props as AllContactResponse).last_name,
      phoneNumber: (props as AllContactResponse).phone_number,
    };
  };

  const getAllContacts = () => {
    fetchAllContacts().then((contacts) => {
      const newAllContacts = contacts.map(
        (contact) => changeProps(contact) as ContactsTypes
      );
      setAllContacts(newAllContacts);
    });
  };

  const handleCreateContact = (currentContact: ContactsTypes) => {
    const changedContact = changeProps(currentContact) as AllContactResponse;
    createContact(changedContact).then((newContact) => {
      if (newContact?.message) return;

      setAllContacts((prevState) => [
        ...prevState,
        changeProps(newContact) as ContactsTypes,
      ]);
    });
  };

  useEffect(() => {
    getAllContacts();
  }, []);

  return {
    allContacts,
    setAllContacts,
    handleCreateContact,
  };
};
