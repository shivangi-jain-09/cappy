import { GameWhereUniqueInput } from "../game/GameWhereUniqueInput";

export type SessionCreateInput = {
  game?: GameWhereUniqueInput | null;
  player?: string | null;
  startTime?: Date | null;
  status?: "Option1" | null;
};
