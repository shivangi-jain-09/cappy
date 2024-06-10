import * as React from "react";
import { List, Datagrid, ListProps, DateField, TextField } from "react-admin";
import Pagination from "../Components/Pagination";

export const LeaderboardList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      bulkActionButtons={false}
      title={"Leaderboards"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show">
        <DateField source="createdAt" label="Created At" />
        <TextField label="game ID" source="gameId" />
        <TextField label="ID" source="id" />
        <TextField label="score" source="score" />
        <DateField source="updatedAt" label="Updated At" />
        <TextField label="user ID" source="userId" />
      </Datagrid>
    </List>
  );
};
