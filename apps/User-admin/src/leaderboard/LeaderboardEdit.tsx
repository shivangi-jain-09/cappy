import * as React from "react";
import {
  Edit,
  SimpleForm,
  EditProps,
  TextInput,
  NumberInput,
} from "react-admin";

export const LeaderboardEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <TextInput label="game ID" source="gameId" />
        <NumberInput step={1} label="score" source="score" />
        <TextInput label="user ID" source="userId" />
      </SimpleForm>
    </Edit>
  );
};
