import { Injectable } from "@nestjs/common";
import { SessionInput } from "../realTimeCommunication/SessionInput";
import { SessionResponse } from "../realTimeCommunication/SessionResponse";

@Injectable()
export class RealTimeCommunicationService {
  constructor() {}
  async EndSession(args: SessionInput): Promise<SessionResponse> {
    throw new Error("Not implemented");
  }
  async StartSession(args: SessionInput): Promise<SessionResponse> {
    throw new Error("Not implemented");
  }
}
