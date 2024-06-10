import { Game } from "../game/Game";

export type Session = {
  createdAt: Date;
  game?: Game | null;
  id: string;
  player: string | null;
  startTime: Date | null;
  status?: "Option1" | null;
  updatedAt: Date;
};
