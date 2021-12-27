import React, {FC} from "react";

interface Props {
    onValue: (value: string) => void;
    value: string;
    placeHolder?: string
}

export const Input: FC<Props> = ({onValue,value,placeHolder}) => {
    return (
        <input value={value} onChange={(event) =>onValue(event.target.value)} placeholder={placeHolder}/>
);
};
