import helmet, { HelmetOptions } from "helmet";

export const helmetConfig = (options?: HelmetOptions) => {
  const helmetOptions: HelmetOptions = {
    ...options,
    crossOriginOpenerPolicy: { policy: "unsafe-none" },
    crossOriginResourcePolicy: { policy: "cross-origin" },
    contentSecurityPolicy: false,
  }

  return helmet(helmetOptions)
  // app.use(
  //   helmet({
  //     crossOriginOpenerPolicy: { policy: "unsafe-none" },
  //     crossOriginResourcePolicy: { policy: "cross-origin" },
  //     contentSecurityPolicy: false,
  //   })
  // )
  // app.use(
  //   helmet.crossOriginResourcePolicy({
  //     policy: "cross-origin",
  //   })
  // )
  // app.use(helmet({
  //   crossOriginResourcePolicy: { policy: "cross-origin" },
  //   contentSecurityPolicy: false, // Disable if causes issues with assets
  // }));
}