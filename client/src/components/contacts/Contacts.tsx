import { CardContact } from "./CardContact";

interface ContactsProps {
  allContacts: ContactsTypes[];
}

export const Contacts = ({ allContacts }: ContactsProps) => {
  return (
    <main className="flex flex-col border border-gray-400 border-b-transparent rounded">
      <CardContact
        uuid={"9a686d6c-ca96-40e7-9acf-68ed9b23dbca"}
        name={"Jhonatan Alves"}
        phoneNumber={"1499143-2333"}
      />
    </main>
  );
};
