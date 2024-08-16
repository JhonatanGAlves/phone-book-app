import { CardContact } from "./CardContact";

interface ContactsProps {
  allContacts: ContactsTypes[];
}

export const Contacts = ({ allContacts }: ContactsProps) => {
  return (
    <main className="flex flex-col border border-gray-400 border-b-transparent rounded">
      {allContacts.map((contact) => (
        <CardContact
          key={contact.uuid}
          uuid={contact.uuid}
          firstName={contact.firstName}
          lastName={contact.lastName}
          phoneNumber={contact.phoneNumber}
        />
      ))}
    </main>
  );
};
