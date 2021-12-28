import { container } from "tsyringe";
import { useCallback } from "react";
import { GameCommandSender } from "../../Service/GameCommandSender";
import { createCreateGameCommand } from "../../Service/GameCommands/CreateGameCommand";

export const useCreateGame = () => {
  return useCallback((userName: string) => {
    const sender = container.resolve(GameCommandSender);
    return sender.SendGameCommand(createCreateGameCommand(userName));
  }, []);
};
