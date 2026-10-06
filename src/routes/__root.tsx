import { createRootRoute, HeadContent, Outlet, Scripts } from "@tanstack/react-router";
import { useRouterState } from "@tanstack/react-router";
import { AuthProvider } from "@/lib/auth/provider";
import { PreviewHostBridge } from "@/components/preview-host-bridge";
import { Shell } from "@/components/p2p/shell";
import { isDeskPath, SiteFrame } from "@/components/site/frame";
import appCss from "../styles.css?url";

export const Route = createRootRoute({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "ORVIA" },
      { name: "description", content: "ORVIA desk of DLM CASH LABS PRIVATE LIMITED." },
      { name: "theme-color", content: "#9a6420" },
    ],
    links: [
      { rel: "icon", type: "image/svg+xml", href: "/favicon.svg" },
      { rel: "stylesheet", href: appCss },
      { rel: "manifest", href: "/__grok/manifest.webmanifest" },
      { rel: "apple-touch-icon", href: "/__grok/icon-180.png" },
    ],
  }),
  component: Root,
});

function Root() {
  const path = useRouterState({ select: (state) => state.location.pathname });
  const desk = isDeskPath(path);
  return (
    <html lang="hi" dir="ltr" data-theme="day" data-lang="hi" suppressHydrationWarning>
      <head>
        <HeadContent />
      </head>
      <body>
        <PreviewHostBridge />
        <AuthProvider>
          {desk ? (
            <Shell>
              <Outlet />
            </Shell>
          ) : (
            <SiteFrame>
              <Outlet />
            </SiteFrame>
          )}
        </AuthProvider>
        <Scripts />
      </body>
    </html>
  );
}
