import { ReactNode } from "react";

interface ActionButtonProps {
  icon: ReactNode;
  text?: string;
  type?: "ADD" | "EDIT" | "REMOVE";
  style?: string;
}

export const ActionButton = ({
  icon,
  text,
  type = "ADD",
  style,
}: ActionButtonProps) => {
  return (
    <button
      className={`flex justify-center items-center gap-1 ${
        !text ? "w-9" : "w-fit px-4"
      } h-9 ${
        type === "ADD"
          ? "border-[#347BF6] bg-[#347BF6]"
          : type === "REMOVE"
          ? "border-[#CB444A] bg-[#CB444A]"
          : "border-gray-400 bg-white"
      } border rounded text-base hover:opacity-80 transition-all ${style}`}
    >
      {icon}
      {text && <span>{text}</span>}
    </button>
  );
};
