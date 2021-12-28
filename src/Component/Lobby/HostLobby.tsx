import React, { FC, memo, useCallback } from "react";
import { Button } from "../Theme/Button";
import { useStartGame } from "../../Hook/GameCommand/UseStartGame";
import { useGameStore } from "../../Store/GameStore";

export const HostLobby: FC = memo(() => {
  const startGame = useStartGame();
  const gameId = useGameStore(useCallback((state) => state.gameId, []));
  console.log({ gameId });
  return (
    <div>
      <div>Join game id {gameId ?? ""}</div>
      <Button onClick={startGame}>Startgame</Button>
    </div>
  );
});
