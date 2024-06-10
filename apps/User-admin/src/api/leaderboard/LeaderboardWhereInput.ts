import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { IntNullableFilter } from "../../util/IntNullableFilter";

export type LeaderboardWhereInput = {
  gameId?: StringNullableFilter;
  id?: StringFilter;
  score?: IntNullableFilter;
  userId?: StringNullableFilter;
};
