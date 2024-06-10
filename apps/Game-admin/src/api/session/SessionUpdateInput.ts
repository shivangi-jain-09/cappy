import { GameWhereUniqueInput } from "../game/GameWhereUniqueInput";

export type SessionUpdateInput = {
  game?: GameWhereUniqueInput | null;
  player?: string | null;
  startTime?: Date | null;
  status?: "Option1" | null;
};
