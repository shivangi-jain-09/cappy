import { LeaderboardUpdateManyWithoutGamesInput } from "./LeaderboardUpdateManyWithoutGamesInput";
import { SessionUpdateManyWithoutGamesInput } from "./SessionUpdateManyWithoutGamesInput";

export type GameUpdateInput = {
  description?: string | null;
  genre?: "Option1" | null;
  leaderboards?: LeaderboardUpdateManyWithoutGamesInput;
  releaseDate?: Date | null;
  sessions?: SessionUpdateManyWithoutGamesInput;
  title?: string | null;
};
