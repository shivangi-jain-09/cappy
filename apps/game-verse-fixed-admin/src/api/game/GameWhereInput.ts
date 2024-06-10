import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { LeaderboardListRelationFilter } from "../leaderboard/LeaderboardListRelationFilter";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { SessionListRelationFilter } from "../session/SessionListRelationFilter";

export type GameWhereInput = {
  description?: StringNullableFilter;
  genre?: "Option1";
  id?: StringFilter;
  leaderboards?: LeaderboardListRelationFilter;
  releaseDate?: DateTimeNullableFilter;
  sessions?: SessionListRelationFilter;
  title?: StringNullableFilter;
};
