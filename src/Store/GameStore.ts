import create from "zustand";
import { GameScreenEnum } from "../Model/GameScreenEnum";

interface GameStoreState {
  screen: GameScreenEnum;
  userName: string | null;
  isHost: boolean;
  gameId: string | null;
  setUserName: (userName: string) => void;
  setIsHost: (isHost: boolean) => void;
  setGameId: (gameId: string) => void;
  setScreen: (screen: GameScreenEnum) => void;
}

export const useGameStore = create<GameStoreState>((set) => ({
  screen: GameScreenEnum.Home,
  userName: null,
  isHost: false,
  gameId: null,
  setUserName: (userName: string) => set({ userName }),
  setIsHost: (isHost: boolean) => set({ isHost }),
  setGameId: (gameId: string) => set({ gameId }),
  setScreen: (screen: GameScreenEnum) => set({ screen }),
}));
