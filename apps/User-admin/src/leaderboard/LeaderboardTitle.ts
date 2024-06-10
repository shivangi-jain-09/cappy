import { Leaderboard as TLeaderboard } from "../api/leaderboard/Leaderboard";

export const LEADERBOARD_TITLE_FIELD = "gameId";

export const LeaderboardTitle = (record: TLeaderboard): string => {
  return record.gameId?.toString() || String(record.id);
};
