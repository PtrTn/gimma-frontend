import { container } from "tsyringe";
import { useCallback } from "react";
import { GameCommandSender } from "../../Service/GameCommandSender";
import { createJoinGameCommand } from "../../Service/GameCommands/JoinGameCommand";

export const useJoinGame = () => {
  return useCallback((userName: string, gameId: string) => {
    const sender = container.resolve(GameCommandSender);
    return sender.SendGameCommand(createJoinGameCommand(userName, gameId));
  }, []);
};
