import { inject, singleton } from "tsyringe";
import { SocketServer } from "./SocketServer";
import { GameCommand } from "./GameCommands/GameCommand";

@singleton()
export class GameCommandSender {
  public constructor(
    @inject(SocketServer) private socketServer: SocketServer
  ) {}

  public SendGameCommand<ParameterType, ReturnType>(
    command: GameCommand<ParameterType, ReturnType>
  ): Promise<ReturnType> {
    try {
      return this.socketServer
        .getConnection()
        .invoke(command.commandName, ...Object.values(command.parameters));
    } catch (e) {
      console.error("error", e);
      throw e;
    }
  }
}
