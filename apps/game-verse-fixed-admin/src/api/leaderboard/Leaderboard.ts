import { Game } from "../game/Game";
import { User } from "../user/User";

export type Leaderboard = {
  createdAt: Date;
  game?: Game | null;
  id: string;
  score: number | null;
  updatedAt: Date;
  user?: User | null;
};
