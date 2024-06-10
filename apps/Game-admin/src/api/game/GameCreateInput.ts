import { InputJsonValue } from "../../types";
import { SessionCreateNestedManyWithoutGamesInput } from "./SessionCreateNestedManyWithoutGamesInput";

export type GameCreateInput = {
  description?: string | null;
  genre?: "Option1" | null;
  leaderboards?: InputJsonValue;
  releaseDate?: Date | null;
  sessions?: SessionCreateNestedManyWithoutGamesInput;
  title?: string | null;
};
