import { LeaderboardCreateNestedManyWithoutGamesInput } from "./LeaderboardCreateNestedManyWithoutGamesInput";
import { SessionCreateNestedManyWithoutGamesInput } from "./SessionCreateNestedManyWithoutGamesInput";

export type GameCreateInput = {
  description?: string | null;
  genre?: "Option1" | null;
  leaderboards?: LeaderboardCreateNestedManyWithoutGamesInput;
  releaseDate?: Date | null;
  sessions?: SessionCreateNestedManyWithoutGamesInput;
  title?: string | null;
};
