import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as errors from "../errors";
import { RealTimeCommunicationService } from "./realtimecommunication.service";
import { SessionInput } from "../realTimeCommunication/SessionInput";
import { SessionResponse } from "../realTimeCommunication/SessionResponse";

@swagger.ApiTags("realTimeCommunications")
@common.Controller("realTimeCommunications")
export class RealTimeCommunicationController {
  constructor(protected readonly service: RealTimeCommunicationService) {}

  @common.Post("/session/end")
  @swagger.ApiOkResponse({
    type: SessionResponse
  })
  @swagger.ApiNotFoundResponse({
    type: errors.NotFoundException
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException
  })
  async EndSession(
    @common.Body()
    body: SessionInput
  ): Promise<SessionResponse> {
        return this.service.EndSession(body);
      }

  @common.Post("/session/start")
  @swagger.ApiOkResponse({
    type: SessionResponse
  })
  @swagger.ApiNotFoundResponse({
    type: errors.NotFoundException
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException
  })
  async StartSession(
    @common.Body()
    body: SessionInput
  ): Promise<SessionResponse> {
        return this.service.StartSession(body);
      }
}
