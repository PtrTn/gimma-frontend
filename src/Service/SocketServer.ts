import { HubConnection, HubConnectionBuilder } from "@microsoft/signalr";
import { injectAll, singleton } from "tsyringe";
import { GameEventListener } from "./EventListeners/GameEventListener";

// glob import is a vite specific functionality, cast it to any so that the ide doesn't complain
// the modules variable must be defined or else vite throw an error
const modules = (import.meta as any).globEager("./EventListeners/*.ts");

@singleton()
export class SocketServer {
  private connection: HubConnection | undefined;

  constructor(
    @injectAll("GameEventListener") private listeners: GameEventListener[]
  ) {}

  public connect() {
    this.connection = new HubConnectionBuilder()
      .withUrl("https://localhost:7212/game")
      .build();

    this.listeners.forEach((x) => {
      this.connection!.on(x.getEventName(), x.execute.bind(x));
    });

    try {
      this.connection.start();
    } catch (error) {
      console.error(error);
    }
  }

  public getConnection(): HubConnection {
    if (this.connection) {
      return this.connection;
    }
    throw new Error("Connection is not initialized, run connect() first");
  }
}
