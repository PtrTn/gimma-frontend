import { GameCommand } from "./GameCommand";

interface StartGameCommandParameters {}

export const createStartGameCommand =
  (): GameCommand<StartGameCommandParameters> => ({
    commandName: "StartGame",
    parameters: {},
  });
