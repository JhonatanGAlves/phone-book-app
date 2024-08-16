import { ReactNode } from "react";

interface ActionButtonProps {
  icon: ReactNode;
  text: string;
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
      className={`flex items-center gap-1 py-4 ${!text ? "px-4" : "px-6"} ${
        type === "ADD"
          ? "border-[#347BF6] bg-[#347BF6]"
          : type === "REMOVE"
          ? "border-[#CB444A] bg-[#CB444A]"
          : "border-gray-400 bg-transparent"
      } border rounded text-base text-gray-100 hover:opacity-80 transition-all ${style}`}
    >
      {icon}

      {text && <span>{text}</span>}
    </button>
  );
};
