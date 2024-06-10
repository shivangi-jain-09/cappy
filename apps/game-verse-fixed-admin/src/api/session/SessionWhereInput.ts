import { GameWhereUniqueInput } from "../game/GameWhereUniqueInput";
import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";

export type SessionWhereInput = {
  game?: GameWhereUniqueInput;
  id?: StringFilter;
  player?: StringNullableFilter;
  startTime?: DateTimeNullableFilter;
  status?: "Option1";
};
