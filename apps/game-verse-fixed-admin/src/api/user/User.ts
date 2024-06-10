import { Leaderboard } from "../leaderboard/Leaderboard";
import { JsonValue } from "type-fest";

export type User = {
  createdAt: Date;
  email: string | null;
  firstName: string | null;
  id: string;
  lastName: string | null;
  leaderboards?: Array<Leaderboard>;
  roles: JsonValue;
  updatedAt: Date;
  username: string;
};
