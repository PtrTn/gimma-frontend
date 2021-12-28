import React, { useCallback } from "react";
import { useGameStore } from "../Store/GameStore";
import { HomeScreen } from "./Home/HomeScreen";
import { GameScreenEnum } from "../Model/GameScreenEnum";
import { LobbyScreen } from "./Lobby/LobbyScreen";
import { GameScreen } from "./Game/GameScreen";

export const App = () => {
  const activeScreen = useGameStore(useCallback((x) => x.screen, []));
  switch (activeScreen) {
    case GameScreenEnum.Home:
      return <HomeScreen />;
    case GameScreenEnum.Lobby:
      return <LobbyScreen />;
    case GameScreenEnum.Game:
      return <GameScreen />;
    default:
      return <div>Unknown screen</div>;
  }
};
