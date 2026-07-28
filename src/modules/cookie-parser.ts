import type { RequestHandler } from "express";
import cookieParser, { type CookieParseOptions } from "cookie-parser";

export const cookieParserConfig = (options?: CookieParseOptions): RequestHandler => {
  const cookieParserOptions: CookieParseOptions = {
    ...options,
  };
  return cookieParser(cookieParserOptions as any);
};