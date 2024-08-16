import { CardContact } from "./CardContact";

interface ContactsProps {
  allContacts: ContactsTypes[];
  handleUpdateContact: (value: ContactsTypes) => void;
}

export const Contacts = ({
  allContacts,
  handleUpdateContact,
}: ContactsProps) => {
  return (
    <main className="flex flex-col border border-gray-400 border-b-transparent rounded">
      {allContacts.map((contact) => (
        <CardContact
          key={contact.uuid}
          contact={contact}
          handleUpdateContact={handleUpdateContact}
        />
      ))}
    </main>
  );
};
