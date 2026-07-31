import cors, { type CorsOptions } from "cors";

export { default } from "cors";

export const corsOptions: CorsOptions = {
  credentials: true,
  methods: ["GET", "POST", "PUT", "DELETE", "PATCH", "OPTIONS"],
  allowedHeaders: ["Content-Type", "Authorization", "X-Requested-With", "Accept"],
  exposedHeaders: ["Set-Cookie", "Authorization"],
  maxAge: 86400,
  optionsSuccessStatus: 200,
}

export const corsConfig = (
  options?: CorsOptions,
  // origin?: CorsOptions["origin"],
) => {
  return cors({
    ...corsOptions,
    ...options,
    // ...(origin === undefined ? {} : { origin }),
  })
}
