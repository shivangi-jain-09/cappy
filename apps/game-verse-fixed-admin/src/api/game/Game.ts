import { Leaderboard } from "../leaderboard/Leaderboard";
import { Session } from "../session/Session";

export type Game = {
  createdAt: Date;
  description: string | null;
  genre?: "Option1" | null;
  id: string;
  leaderboards?: Array<Leaderboard>;
  releaseDate: Date | null;
  sessions?: Array<Session>;
  title: string | null;
  updatedAt: Date;
};
