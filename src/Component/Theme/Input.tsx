import React, { FC } from "react";

interface Props
  extends React.DetailedHTMLProps<
    React.InputHTMLAttributes<HTMLInputElement>,
    HTMLInputElement
  > {
  onValue: (value: string) => void;
  value: string;
}

export const Input: FC<Props> = ({ onValue, value, ...props }) => {
  return (
    <input
      {...props}
      className={
        "block p-2 w-full text-lg appearance-none focus:outline-none bg-transparent"
      }
      value={value}
      onChange={(event) => onValue(event.target.value)}
    />
  );
};
