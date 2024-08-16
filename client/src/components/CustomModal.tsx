import { ChangeEvent, useState } from "react";

import * as Dialog from "@radix-ui/react-dialog";
import { FaSave } from "react-icons/fa";
import InputMask from "react-input-mask";

import { ActionButton } from "./ActionButton";

interface CustomModalProps {
  title: string;
  isOpen: boolean;
  setIsOpen: (value: boolean) => void;
  contact?: ContactsTypes;
  handleCreateContact?: (value: ContactsTypes) => void;
}

export const CustomModal = ({
  title,
  isOpen,
  setIsOpen,
  contact,
  handleCreateContact,
}: CustomModalProps) => {
  const [modalObj, setModalObj] = useState<ContactsTypes | undefined>(
    contact ? { ...contact } : undefined
  );

  const handleSubmit = (e: ChangeEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!modalObj) return;

    setModalObj(undefined);
    setIsOpen(false);

    if (handleCreateContact) {
      handleCreateContact(modalObj);
    }
  };

  return (
    <Dialog.Root open={isOpen} onOpenChange={setIsOpen}>
      <Dialog.Portal>
        <Dialog.Overlay className="fixed inset-0 bg-black bg-opacity-30" />
        <Dialog.Content className="fixed top-2/4 left-2/4 -translate-y-2/4 -translate-x-2/4 w-[36rem] bg-white rounded shadow">
          <div className="flex flex-col">
            <form onSubmit={handleSubmit}>
              <header className="p-4 bg-[#F6F6F6]">
                <Dialog.Title className="text-[#212121] font-bold">
                  {title}
                </Dialog.Title>
              </header>
              <div className="p-4">
                <div className="flex flex-col">
                  <label htmlFor="first-name">First Name</label>
                  <input
                    id="first-name"
                    className="outline-none w-72 p-2 border border-gray-400 rounded"
                    type="text"
                    value={modalObj?.firstName ?? ""}
                    onChange={(e: ChangeEvent<HTMLInputElement>) => {
                      setModalObj((prevState) => ({
                        ...prevState,
                        firstName: e.target.value,
                      }));
                    }}
                  />
                </div>
                <div className="flex flex-col my-4">
                  <label htmlFor="last-name">Last Name</label>
                  <input
                    id="last-name"
                    className="outline-none w-72 p-2 border border-gray-400 rounded"
                    type="text"
                    value={modalObj?.lastName ?? ""}
                    onChange={(e: ChangeEvent<HTMLInputElement>) => {
                      setModalObj((prevState) => ({
                        ...prevState,
                        lastName: e.target.value,
                      }));
                    }}
                  />
                </div>
                <div className="flex flex-col mt-4">
                  <label htmlFor="phone-number">Phone Number</label>
                  <InputMask
                    id="phone-number"
                    className="outline-none w-[11.375rem] p-2 border border-gray-400 rounded"
                    mask="+1\ (999) 999 9999"
                    placeholder="+1 (000) 000 0000"
                    value={modalObj?.phoneNumber ?? ""}
                    onChange={(e: ChangeEvent<HTMLInputElement>) => {
                      setModalObj((prevState) => ({
                        ...prevState,
                        phoneNumber: e.target.value,
                      }));
                    }}
                  />
                </div>
              </div>
              <footer className="flex items-center gap-2 p-4 bg-[#F6F6F6]">
                <ActionButton
                  icon={<FaSave color="#f3f4f6" />}
                  text="Save"
                  type="SAVE"
                  style="font-bold text-gray-100"
                  isDisabled={
                    !modalObj?.firstName ||
                    !modalObj?.lastName ||
                    !modalObj?.phoneNumber
                  }
                />
                <ActionButton
                  text="Cancel"
                  type="CANCEL"
                  style="text-[#212121] font-bold"
                  onClick={() => setIsOpen(false)}
                />
              </footer>
            </form>
          </div>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
};
