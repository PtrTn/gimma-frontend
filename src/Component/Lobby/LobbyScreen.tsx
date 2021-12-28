import React, { FC, memo, useCallback } from "react";
import { useGameStore } from "../../Store/GameStore";
import { HostLobby } from "./HostLobby";
import { PlayerLobby } from "./PlayerLobby";

export const LobbyScreen: FC = memo(() => {
  const isHost = useGameStore(useCallback((x) => x.isHost, []));
  if (isHost) {
    return <HostLobby />;
  }
  return <PlayerLobby />;
});
