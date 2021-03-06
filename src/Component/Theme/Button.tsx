import { FC } from "react";

interface Props {
  onClick: () => void;
}

export const Button: FC<Props> = ({ onClick, children }) => {
  return (
    <button
      className="bg-gray-900 hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-400 focus:ring-offset-2 focus:ring-offset-gray-50 text-white font-semibold h-12 px-6 rounded-lg w-full flex items-center justify-center sm:w-auto dark:bg-sky-500 dark:highlight-white/20 dark:hover:bg-sky-400"
      onClick={onClick}
    >
      {children}
    </button>
  );
};
