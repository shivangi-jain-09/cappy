import { GameWhereUniqueInput } from "../game/GameWhereUniqueInput";
import { StringFilter } from "../../util/StringFilter";
import { IntNullableFilter } from "../../util/IntNullableFilter";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type LeaderboardWhereInput = {
  game?: GameWhereUniqueInput;
  id?: StringFilter;
  score?: IntNullableFilter;
  user?: UserWhereUniqueInput;
};
