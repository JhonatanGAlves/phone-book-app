import { ReactNode } from "react";

interface ActionButtonProps {
  icon?: ReactNode;
  text?: string;
  type?: "ADD" | "EDIT" | "REMOVE" | "SAVE" | "CANCEL";
  style?: string;
  onClick?: () => void;
  isDisabled?: boolean;
}

export const ActionButton = ({
  icon,
  text,
  type = "ADD",
  style,
  onClick,
  isDisabled,
}: ActionButtonProps) => {
  return (
    <button
      className={`flex justify-center items-center gap-1 ${
        !text ? "w-9" : "w-fit px-4"
      } h-9 ${
        type === "EDIT" || type === "CANCEL"
          ? "border-gray-400 bg-white"
          : type === "REMOVE"
          ? "border-[#CB444A] bg-[#CB444A]"
          : "border-[#347BF6] bg-[#347BF6]"
      } border rounded text-base hover:opacity-80 transition-all ${style} disabled:opacity-60 disabled:hover:opacity-60`}
      type={type === "SAVE" ? "submit" : "button"}
      onClick={onClick}
      disabled={isDisabled}
    >
      {icon ?? ""}
      {text && <span>{text}</span>}
    </button>
  );
};
