import { GameEventListener } from "./GameEventListener";
import { useGameStore } from "../../Store/GameStore";
import { injectable, registry } from "tsyringe";
import { GameScreenEnum } from "../../Model/GameScreenEnum";

@injectable()
@registry([{ token: "GameEventListener", useClass: GameStartedListener }])
export class GameStartedListener implements GameEventListener {
  async execute(): Promise<void> {
    useGameStore.getState().setScreen(GameScreenEnum.Game);
  }

  getEventName(): string {
    return "GameStarted";
  }
}
