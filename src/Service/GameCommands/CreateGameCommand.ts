import { GameCommand } from "./GameCommand";

interface CreateGameCommandParameters {
  userName: string;
}

export const createCreateGameCommand = (
  userName: string
): GameCommand<CreateGameCommandParameters> => ({
  commandName: "CreateGame",
  parameters: { userName },
});
