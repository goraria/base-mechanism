import rateLimit, { type Options, type RateLimitRequestHandler } from "express-rate-limit";

export const rateLimitConfig = (
  options?: Partial<Options>,
): RateLimitRequestHandler => {
  const rateLimitOptions: Partial<Options> = {
    windowMs: 15 * 60 * 1000,
    limit: 100,
    message: "Too many requests. Please try again later.",
    standardHeaders: "draft-8",
    legacyHeaders: false,
    passOnStoreError: false,
    // statusCode: 500,
    // identifier: "GORTH",
    // requestPropertyName: "",
    // skipFailedRequests: true,
    // skipSuccessfulRequests: false,
    // keyGenerator: "GORTH",
    handler: options?.handler ??
      ((request, response, _next, rateLimitOptions) => {
        response.status(rateLimitOptions.statusCode).json({
          status: rateLimitOptions.statusCode,
          code: "TOO_MANY_REQUESTS",
          message: "Too many requests. Please try again later.",
          retryAfter: response.getHeader("Retry-After") ?? null,
          path: request.originalUrl,
        });
      }),
    ...options,
  }

  return rateLimit(rateLimitOptions);
};
