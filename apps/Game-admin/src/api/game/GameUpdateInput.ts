import { InputJsonValue } from "../../types";
import { SessionUpdateManyWithoutGamesInput } from "./SessionUpdateManyWithoutGamesInput";

export type GameUpdateInput = {
  description?: string | null;
  genre?: "Option1" | null;
  leaderboards?: InputJsonValue;
  releaseDate?: Date | null;
  sessions?: SessionUpdateManyWithoutGamesInput;
  title?: string | null;
};
