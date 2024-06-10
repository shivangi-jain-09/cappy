/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { isRecordNotFoundError } from "../../prisma.util";
import * as errors from "../../errors";
import { Request } from "express";
import { plainToClass } from "class-transformer";
import { ApiNestedQuery } from "../../decorators/api-nested-query.decorator";
import { GameService } from "../game.service";
import { GameCreateInput } from "./GameCreateInput";
import { Game } from "./Game";
import { GameFindManyArgs } from "./GameFindManyArgs";
import { GameWhereUniqueInput } from "./GameWhereUniqueInput";
import { GameUpdateInput } from "./GameUpdateInput";
import { LeaderboardFindManyArgs } from "../../leaderboard/base/LeaderboardFindManyArgs";
import { Leaderboard } from "../../leaderboard/base/Leaderboard";
import { LeaderboardWhereUniqueInput } from "../../leaderboard/base/LeaderboardWhereUniqueInput";
import { SessionFindManyArgs } from "../../session/base/SessionFindManyArgs";
import { Session } from "../../session/base/Session";
import { SessionWhereUniqueInput } from "../../session/base/SessionWhereUniqueInput";

export class GameControllerBase {
  constructor(protected readonly service: GameService) {}
  @common.Post()
  @swagger.ApiCreatedResponse({ type: Game })
  async createGame(@common.Body() data: GameCreateInput): Promise<Game> {
    return await this.service.createGame({
      data: data,
      select: {
        createdAt: true,
        description: true,
        genre: true,
        id: true,
        releaseDate: true,
        title: true,
        updatedAt: true,
      },
    });
  }

  @common.Get()
  @swagger.ApiOkResponse({ type: [Game] })
  @ApiNestedQuery(GameFindManyArgs)
  async games(@common.Req() request: Request): Promise<Game[]> {
    const args = plainToClass(GameFindManyArgs, request.query);
    return this.service.games({
      ...args,
      select: {
        createdAt: true,
        description: true,
        genre: true,
        id: true,
        releaseDate: true,
        title: true,
        updatedAt: true,
      },
    });
  }

  @common.Get("/:id")
  @swagger.ApiOkResponse({ type: Game })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async game(
    @common.Param() params: GameWhereUniqueInput
  ): Promise<Game | null> {
    const result = await this.service.game({
      where: params,
      select: {
        createdAt: true,
        description: true,
        genre: true,
        id: true,
        releaseDate: true,
        title: true,
        updatedAt: true,
      },
    });
    if (result === null) {
      throw new errors.NotFoundException(
        `No resource was found for ${JSON.stringify(params)}`
      );
    }
    return result;
  }

  @common.Patch("/:id")
  @swagger.ApiOkResponse({ type: Game })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async updateGame(
    @common.Param() params: GameWhereUniqueInput,
    @common.Body() data: GameUpdateInput
  ): Promise<Game | null> {
    try {
      return await this.service.updateGame({
        where: params,
        data: data,
        select: {
          createdAt: true,
          description: true,
          genre: true,
          id: true,
          releaseDate: true,
          title: true,
          updatedAt: true,
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new errors.NotFoundException(
          `No resource was found for ${JSON.stringify(params)}`
        );
      }
      throw error;
    }
  }

  @common.Delete("/:id")
  @swagger.ApiOkResponse({ type: Game })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async deleteGame(
    @common.Param() params: GameWhereUniqueInput
  ): Promise<Game | null> {
    try {
      return await this.service.deleteGame({
        where: params,
        select: {
          createdAt: true,
          description: true,
          genre: true,
          id: true,
          releaseDate: true,
          title: true,
          updatedAt: true,
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new errors.NotFoundException(
          `No resource was found for ${JSON.stringify(params)}`
        );
      }
      throw error;
    }
  }

  @common.Get("/:id/leaderboards")
  @ApiNestedQuery(LeaderboardFindManyArgs)
  async findLeaderboards(
    @common.Req() request: Request,
    @common.Param() params: GameWhereUniqueInput
  ): Promise<Leaderboard[]> {
    const query = plainToClass(LeaderboardFindManyArgs, request.query);
    const results = await this.service.findLeaderboards(params.id, {
      ...query,
      select: {
        createdAt: true,

        game: {
          select: {
            id: true,
          },
        },

        id: true,
        score: true,
        updatedAt: true,

        user: {
          select: {
            id: true,
          },
        },
      },
    });
    if (results === null) {
      throw new errors.NotFoundException(
        `No resource was found for ${JSON.stringify(params)}`
      );
    }
    return results;
  }

  @common.Post("/:id/leaderboards")
  async connectLeaderboards(
    @common.Param() params: GameWhereUniqueInput,
    @common.Body() body: LeaderboardWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      leaderboards: {
        connect: body,
      },
    };
    await this.service.updateGame({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Patch("/:id/leaderboards")
  async updateLeaderboards(
    @common.Param() params: GameWhereUniqueInput,
    @common.Body() body: LeaderboardWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      leaderboards: {
        set: body,
      },
    };
    await this.service.updateGame({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Delete("/:id/leaderboards")
  async disconnectLeaderboards(
    @common.Param() params: GameWhereUniqueInput,
    @common.Body() body: LeaderboardWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      leaderboards: {
        disconnect: body,
      },
    };
    await this.service.updateGame({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Get("/:id/sessions")
  @ApiNestedQuery(SessionFindManyArgs)
  async findSessions(
    @common.Req() request: Request,
    @common.Param() params: GameWhereUniqueInput
  ): Promise<Session[]> {
    const query = plainToClass(SessionFindManyArgs, request.query);
    const results = await this.service.findSessions(params.id, {
      ...query,
      select: {
        createdAt: true,

        game: {
          select: {
            id: true,
          },
        },

        id: true,
        player: true,
        startTime: true,
        status: true,
        updatedAt: true,
      },
    });
    if (results === null) {
      throw new errors.NotFoundException(
        `No resource was found for ${JSON.stringify(params)}`
      );
    }
    return results;
  }

  @common.Post("/:id/sessions")
  async connectSessions(
    @common.Param() params: GameWhereUniqueInput,
    @common.Body() body: SessionWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      sessions: {
        connect: body,
      },
    };
    await this.service.updateGame({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Patch("/:id/sessions")
  async updateSessions(
    @common.Param() params: GameWhereUniqueInput,
    @common.Body() body: SessionWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      sessions: {
        set: body,
      },
    };
    await this.service.updateGame({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Delete("/:id/sessions")
  async disconnectSessions(
    @common.Param() params: GameWhereUniqueInput,
    @common.Body() body: SessionWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      sessions: {
        disconnect: body,
      },
    };
    await this.service.updateGame({
      where: params,
      data,
      select: { id: true },
    });
  }
}
