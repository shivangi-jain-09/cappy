import * as React from "react";
import {
  Create,
  SimpleForm,
  CreateProps,
  TextInput,
  NumberInput,
} from "react-admin";

export const LeaderboardCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput label="game ID" source="gameId" />
        <NumberInput step={1} label="score" source="score" />
        <TextInput label="user ID" source="userId" />
      </SimpleForm>
    </Create>
  );
};
