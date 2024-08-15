import { FaAddressBook } from "react-icons/fa";

export const Header = () => {
  return (
    <header className="flex justify-center items-center gap-6 text-4xl">
      <FaAddressBook color="#212121" />
      <h1 className="text-[#212121]">Phone Book App</h1>
    </header>
  );
};
