import * as React from "react";
import {
  Show,
  SimpleShowLayout,
  ShowProps,
  DateField,
  TextField,
} from "react-admin";

export const LeaderboardShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <DateField source="createdAt" label="Created At" />
        <TextField label="game ID" source="gameId" />
        <TextField label="ID" source="id" />
        <TextField label="score" source="score" />
        <DateField source="updatedAt" label="Updated At" />
        <TextField label="user ID" source="userId" />
      </SimpleShowLayout>
    </Show>
  );
};
