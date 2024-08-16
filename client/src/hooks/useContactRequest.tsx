import { SetStateAction, useEffect, useState } from "react";

import { fetchAllContacts } from "../services/api";

interface UseContactRequestProps {
  allContacts: ContactsTypes[];
  setAllContacts: (value: SetStateAction<ContactsTypes[]>) => void;
}

export const useContactRequest = (): UseContactRequestProps => {
  const [allContacts, setAllContacts] = useState<ContactsTypes[]>([]);

  const getAllContacts = () => {
    fetchAllContacts().then((contacts) => {
      const newAllContacts = contacts.map((contact) => ({
        uuid: contact.id,
        firstName: contact.first_name,
        lastName: contact.last_name,
        phoneNumber: contact.phone_number,
      }));
      setAllContacts(newAllContacts);
    });
  };

  useEffect(() => {
    getAllContacts();
  }, []);

  return { allContacts, setAllContacts };
};
