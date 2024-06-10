import { GameWhereUniqueInput } from "../game/GameWhereUniqueInput";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type LeaderboardCreateInput = {
  game?: GameWhereUniqueInput | null;
  score?: number | null;
  user?: UserWhereUniqueInput | null;
};
