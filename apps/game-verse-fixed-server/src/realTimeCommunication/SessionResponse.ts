import { ObjectType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { Type } from "class-transformer";

@ObjectType("SessionResponseObject")
class SessionResponse {
    @Field(() => String)
    @ApiProperty({
        required: true,
        type: () => String
    })
    @Type(() => String)
    sessionId!: string;

    @Field(() => String)
    @ApiProperty({
        required: true,
        type: () => String
    })
    @Type(() => String)
    status!: string;

    @Field(() => [String])
    @ApiProperty({
        required: true,
        type: () => [String]
    })
    @Type(() => String)
    playerIds!: string;

    @Field(() => Date, {
        nullable: true
    })
    @Type(() => Date)
    startTime?: Date;
}

export { SessionResponse as SessionResponse };