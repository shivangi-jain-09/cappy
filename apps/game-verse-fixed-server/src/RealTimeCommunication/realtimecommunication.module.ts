import { Module } from "@nestjs/common";
import { RealTimeCommunicationService } from "./realtimecommunication.service";
import { RealTimeCommunicationController } from "./realtimecommunication.controller";
import { RealTimeCommunicationResolver } from "./realtimecommunication.resolver";

@Module({
  controllers: [RealTimeCommunicationController],
  providers: [RealTimeCommunicationService, RealTimeCommunicationResolver],
  exports: [RealTimeCommunicationService],
})
export class RealTimeCommunicationModule {}
