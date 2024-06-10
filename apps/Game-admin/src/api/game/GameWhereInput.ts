import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { JsonFilter } from "../../util/JsonFilter";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { SessionListRelationFilter } from "../session/SessionListRelationFilter";

export type GameWhereInput = {
  description?: StringNullableFilter;
  genre?: "Option1";
  id?: StringFilter;
  leaderboards?: JsonFilter;
  releaseDate?: DateTimeNullableFilter;
  sessions?: SessionListRelationFilter;
  title?: StringNullableFilter;
};
