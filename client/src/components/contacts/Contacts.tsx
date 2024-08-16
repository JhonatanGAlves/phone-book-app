import { CardContact } from "./CardContact";

interface ContactsProps {
  filteredContacts: ContactsTypes[];
  handleUpdateContact: (value: ContactsTypes) => void;
  handleDeleteContact: (value: string) => void;
}

export const Contacts = ({
  filteredContacts,
  handleUpdateContact,
  handleDeleteContact,
}: ContactsProps) => {
  return (
    <main className="flex flex-col border border-gray-400 border-b-transparent rounded">
      {!filteredContacts.length ? (
        <span className="self-center mt-4">No data found</span>
      ) : (
        filteredContacts.map((contact) => (
          <CardContact
            key={contact.uuid}
            contact={contact}
            handleUpdateContact={handleUpdateContact}
            handleDeleteContact={handleDeleteContact}
          />
        ))
      )}
    </main>
  );
};
