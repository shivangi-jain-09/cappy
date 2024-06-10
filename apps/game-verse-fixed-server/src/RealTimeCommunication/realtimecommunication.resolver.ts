import * as graphql from "@nestjs/graphql";
import { SessionInput } from "../realTimeCommunication/SessionInput";
import { SessionResponse } from "../realTimeCommunication/SessionResponse";
import { RealTimeCommunicationService } from "./realtimecommunication.service";

export class RealTimeCommunicationResolver {
  constructor(protected readonly service: RealTimeCommunicationService) {}

  @graphql.Mutation(() => SessionResponse)
  async EndSession(
    @graphql.Args()
    args: SessionInput
  ): Promise<SessionResponse> {
    return this.service.EndSession(args);
  }

  @graphql.Mutation(() => SessionResponse)
  async StartSession(
    @graphql.Args()
    args: SessionInput
  ): Promise<SessionResponse> {
    return this.service.StartSession(args);
  }
}
