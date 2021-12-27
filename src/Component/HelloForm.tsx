import {FC, useState} from "react";
import {Input} from "./Input";
import {Button} from "./Button";
import {HubConnectionBuilder} from '@microsoft/signalr';

let connection = new HubConnectionBuilder()
    .withUrl("https://localhost:7212/chatHub")
    .build();

connection.on("send", data => {
    console.log(data);
});

connection.start()
    .then(() => connection.invoke("send", "Hello"));


export const HelloForm: FC = () => {
    const [inputValue, setInputValue ] = useState<string>("");
    return (
        <>
            <Input value={inputValue} onValue={setInputValue}/>
            <Button onClick={() => {
                connection.invoke("SendMessage", "hoi", inputValue??'nothing')
            }}
             />
        </>
    );
};
