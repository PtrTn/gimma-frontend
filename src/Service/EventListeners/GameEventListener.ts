export interface GameEventListener {
  getEventName: () => string;
  execute: (...args: any) => Promise<void>;
}
