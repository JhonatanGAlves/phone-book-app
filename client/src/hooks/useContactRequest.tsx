import { SetStateAction, useEffect, useState } from "react";

import {
  createContact,
  deleteContact,
  fetchAllContacts,
  updateContact,
} from "../services/api";

interface UseContactRequestProps {
  allContacts: ContactsTypes[];
  setAllContacts: (value: SetStateAction<ContactsTypes[]>) => void;
  handleCreateContact: (value: ContactsTypes) => void;
  handleUpdateContact: (value: ContactsTypes) => void;
  handleDeleteContact: (value: string) => void;
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

  const handleUpdateContact = (currentContact: ContactsTypes) => {
    const changedContact = changeProps(currentContact) as AllContactResponse;
    const { id, ...noId } = changedContact;
    updateContact(noId, id as string).then(
      (updatedContact: AllContactResponse) => {
        setAllContacts((prevState) => [
          ...prevState.filter((prev) => prev.uuid !== id),
          changeProps(updatedContact) as ContactsTypes,
        ]);
      }
    );
  };

  const handleDeleteContact = (contactId: string) => {
    deleteContact(contactId).then((deletedContact: AllContactResponse) => {
      setAllContacts((prevState) =>
        prevState.filter((prev) => prev.uuid !== deletedContact.id)
      );
    });
  };

  useEffect(() => {
    getAllContacts();
  }, []);

  return {
    allContacts,
    setAllContacts,
    handleCreateContact,
    handleUpdateContact,
    handleDeleteContact,
  };
};
