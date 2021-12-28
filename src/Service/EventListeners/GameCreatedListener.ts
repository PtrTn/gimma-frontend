import { GameEventListener } from "./GameEventListener";
import { useGameStore } from "../../Store/GameStore";
import { injectable, registry } from "tsyringe";
import { GameScreenEnum } from "../../Model/GameScreenEnum";

interface EventParams {
  gameId: string;
}

@injectable()
@registry([{ token: "GameEventListener", useClass: GameCreatedListener }])
export class GameCreatedListener implements GameEventListener {
  async execute(params: EventParams): Promise<void> {
    useGameStore.getState().setGameId(params.gameId);
    useGameStore.getState().setIsHost(true);
    useGameStore.getState().setScreen(GameScreenEnum.Lobby);
  }

  getEventName(): string {
    return "GameCreated";
  }
}
