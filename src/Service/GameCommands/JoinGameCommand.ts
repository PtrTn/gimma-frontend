import { GameCommand } from "./GameCommand";

interface JoinGameCommandParameters {
  userName: string;
  gameId: string;
}

export const createJoinGameCommand = (
  userName: string,
  gameId: string
): GameCommand<JoinGameCommandParameters> => ({
  commandName: "JoinGame",
  parameters: { userName, gameId },
});
