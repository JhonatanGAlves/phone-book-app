import { FaPhoneAlt, FaEdit, FaTrashAlt } from "react-icons/fa";

import { ActionButton } from "../ActionButton";
import { CustomModal } from "../CustomModal";
import { useState } from "react";

interface CardContactProps {
  contact: ContactsTypes;
  handleUpdateContact: (value: ContactsTypes) => void;
}

export const CardContact = ({
  contact,
  handleUpdateContact,
}: CardContactProps) => {
  const [isEditModalOpen, setIsEditModalOpen] = useState<boolean>(false);

  return (
    <div className="flex justify-between p-4 border-b border-gray-400 rounded-tl rounded-tr bg-white hover:bg-blue-100">
      <div className="flex flex-col gap-2">
        <span className="text-lg text-[#212121]">{`${contact.firstName} ${
          contact?.lastName ?? ""
        }`}</span>
        <div className="flex items-center gap-1">
          <FaPhoneAlt color="#9ca3af" />
          <span className="text-sm text-gray-400">{contact.phoneNumber}</span>
        </div>
      </div>
      <div className="flex gap-2">
        <ActionButton
          icon={<FaEdit color="#212121" />}
          text="Edit"
          type="EDIT"
          style="text-[#212121] font-bold"
          onClick={() => setIsEditModalOpen(true)}
        />
        <ActionButton
          icon={<FaTrashAlt color="#f3f4f6" />}
          type="REMOVE"
        />
      </div>
      <CustomModal
        title="Edit Contact"
        isOpen={isEditModalOpen}
        setIsOpen={setIsEditModalOpen}
        contact={contact}
        handleUpdateContact={handleUpdateContact}
      />
    </div>
  );
};
