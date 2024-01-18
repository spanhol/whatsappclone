import { authMiddleware } from "@clerk/nextjs";

export default authMiddleware({
  publicRoutes: [
    "/",
    "/api/auth/session",
    "/api/trpc/post.hello",
    "/api/auth/providers",
    "/api/auth/signin",
    "/api/auth/signin/discord",
    "/api/auth/_log"
  ],
});

export const config = {
  matcher: ["/((?!.+\\.[\\w]+$|_next).*)", "/", "/(api|trpc)(.*)"],
};
