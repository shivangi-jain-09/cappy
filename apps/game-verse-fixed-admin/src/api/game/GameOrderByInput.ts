import { SortOrder } from "../../util/SortOrder";

export type GameOrderByInput = {
  createdAt?: SortOrder;
  description?: SortOrder;
  genre?: SortOrder;
  id?: SortOrder;
  releaseDate?: SortOrder;
  title?: SortOrder;
  updatedAt?: SortOrder;
};
