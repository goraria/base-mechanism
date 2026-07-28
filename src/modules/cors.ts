import cors, { type CorsOptions } from "cors";

export const corsConfig = (
  options?: CorsOptions,
  origin?: any,
) => {
  const corsOptions: CorsOptions = {
    ...options,
    origin,
    credentials: true,
    methods: ["GET", "POST", "PUT", "DELETE", "PATCH", "OPTIONS"],
    allowedHeaders: ["Content-Type", "Authorization", "X-Requested-With", "Accept"],
    exposedHeaders: ["Set-Cookie", "Authorization"],
    maxAge: 86400,
    optionsSuccessStatus: 200,
  }
  return cors(corsOptions)
}