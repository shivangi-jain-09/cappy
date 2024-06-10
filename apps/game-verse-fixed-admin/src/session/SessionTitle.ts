import { Session as TSession } from "../api/session/Session";

export const SESSION_TITLE_FIELD = "player";

export const SessionTitle = (record: TSession): string => {
  return record.player?.toString() || String(record.id);
};
