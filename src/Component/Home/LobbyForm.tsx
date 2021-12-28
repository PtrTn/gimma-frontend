import { FC, useState } from "react";
import { Input } from "../Theme/Input";
import { Button } from "../Theme/Button";
import { useTranslation } from "../../Hook/UseTranslation";
import { useJoinGame } from "../../Hook/GameCommand/UseJoinGame";
import { useCreateGame } from "../../Hook/GameCommand/UseCreateGame";
import { FormField } from "../Theme/FormField";
import { Transition } from "@headlessui/react";

export const LobbyForm: FC = () => {
  const [userName, setUserName] = useState<string>("");
  const [gameId, setGameID] = useState<string>("");
  const t = useTranslation();
  const joinGame = useJoinGame();
  const createGame = useCreateGame();
  return (
    <>
      <FormField title={t("UserNameLabel")}>
        <Input
          className="block p-2 w-full text-lg appearance-none focus:outline-none bg-transparent"
          value={userName}
          name="userName"
          onValue={setUserName}
        />
      </FormField>
      <Transition
        show={!!userName}
        enter="transition-opacity duration-300"
        enterFrom="opacity-0"
        enterTo="opacity-100"
        leave="transition-opacity duration-300"
        leaveFrom="opacity-100"
        leaveTo="opacity-0"
      >
        <div className="flex flex-row">
          <Button onClick={() => createGame(userName)}>
            {t("CreateGameButtonText")}
          </Button>

          <div className="m-4 flex-v-center text-center">{t("Or")}</div>

          <FormField>
            <Input
              value={gameId}
              onValue={setGameID}
              placeholder={t("GameIdLabel")}
            />
          </FormField>

          <Button onClick={() => joinGame(userName, gameId)}>
            {t("JoinGameButtonText")}
          </Button>
        </div>
      </Transition>
    </>
  );
};
