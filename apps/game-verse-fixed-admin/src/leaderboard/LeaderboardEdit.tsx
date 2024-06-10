import * as React from "react";
import {
  Edit,
  SimpleForm,
  EditProps,
  ReferenceInput,
  SelectInput,
  NumberInput,
} from "react-admin";
import { GameTitle } from "../game/GameTitle";
import { UserTitle } from "../user/UserTitle";

export const LeaderboardEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <ReferenceInput source="game.id" reference="Game" label="game">
          <SelectInput optionText={GameTitle} />
        </ReferenceInput>
        <NumberInput step={1} label="score" source="score" />
        <ReferenceInput source="user.id" reference="User" label="user">
          <SelectInput optionText={UserTitle} />
        </ReferenceInput>
      </SimpleForm>
    </Edit>
  );
};
