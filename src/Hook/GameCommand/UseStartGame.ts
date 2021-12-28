import { container } from "tsyringe";
import { useCallback } from "react";
import { GameCommandSender } from "../../Service/GameCommandSender";
import { createStartGameCommand } from "../../Service/GameCommands/StartGameCommand";

export const useStartGame = () => {
  return useCallback(() => {
    const sender = container.resolve(GameCommandSender);
    return sender.SendGameCommand(createStartGameCommand());
  }, []);
};
