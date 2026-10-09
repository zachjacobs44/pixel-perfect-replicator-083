import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  Outlet,
  createRootRouteWithContext,
  useRouter,
  HeadContent,
  Scripts,
  type ErrorComponentProps,
} from "@tanstack/react-router";
import { useEffect, type ReactNode } from "react";
import { useRouterState } from "@tanstack/react-router";

import appCss from "../styles.css?url";
import { reportLovableError } from "../lib/lovable-error-reporting";
import { initAnalytics } from "../lib/analytics";
import { Header } from "../components/jurni/Header";
import { Footer } from "../components/jurni/Footer";
import { StickyTextBar } from "../components/jurni/StickyTextBar";
import { Wordmark } from "../components/jurni/Wordmark";
import { StakCTA } from "../components/jurni/StakCTA";

function NotFoundComponent() {
  return (
    <section className="section-y">
      <div className="content-column">
        <Wordmark className="h-6" />
        <h1 className="display-section mt-8">That page isn't here. Stak is.</h1>
        <StakCTA section="404" className="mt-10" />
      </div>
    </section>
  );
}

function ErrorComponent({ error: caughtError, reset }: ErrorComponentProps) {
  const error = caughtError instanceof Error ? caughtError : new Error(String(caughtError));
  console.error(error);
  const router = useRouter();
  useEffect(() => {
    reportLovableError(error, { boundary: "tanstack_root_error_component" });
  }, [error]);

  return (
    <section className="section-y">
      <div className="content-column">
        <h1 className="display-section">This page didn't load.</h1>
        <p className="mt-4 max-w-[560px]" style={{ color: "var(--muted)" }}>
          Something went wrong on our end. You can try again or head back home.
        </p>
        <div className="mt-8 flex flex-wrap gap-3">
          <button
            onClick={() => {
              router.invalidate();
              reset();
            }}
            className="press-spring inline-flex h-[60px] items-center justify-center rounded-[var(--radius-chip)] px-8 font-body text-[18px] font-semibold text-primary-foreground"
            style={{ background: "var(--grad-button)", boxShadow: "var(--shadow-button)" }}
          >
            Try again
          </button>
          <a
            href="/"
            className="press-spring inline-flex h-[60px] items-center justify-center rounded-full border-2 border-ink px-8 font-display text-[20px] font-bold"
          >
            Go home
          </a>
        </div>
      </div>
    </section>
  );
}

export const Route = createRootRouteWithContext<{ queryClient: QueryClient }>()({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      {
        name: "viewport",
        content: "width=device-width, initial-scale=1, viewport-fit=cover",
      },
      { title: "Jurni GLP | GLP-1 support by text and call." },
      {
        name: "description",
        content:
          "Text or call Stak, your GLP-1 support from Jurni GLP. A plan, answers, check-ins, meals and workouts. No app. Two weeks free.",
      },
      { property: "og:site_name", content: "Jurni GLP" },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "theme-color", content: "#FBF8F3" },
    ],
    links: [
      { rel: "stylesheet", href: appCss },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      {
        rel: "preload",
        as: "style",
        href: "https://fonts.googleapis.com/css2?family=Anybody:wdth,wght@100..125,400..900&family=Geist:wght@400;500;600;700&display=swap",
      },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Anybody:wdth,wght@100..125,400..900&family=Geist:wght@400;500;600;700&display=swap",
      },
      { rel: "icon", type: "image/svg+xml", href: "/favicon.svg" },
      { rel: "apple-touch-icon", href: "/apple-touch-icon.png" },
    ],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent,
});

function RootShell({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <head>
        <HeadContent />
      </head>
      <body>
        {children}
        <Scripts />
      </body>
    </html>
  );
}

function RootComponent() {
  const { queryClient } = Route.useRouteContext();

  const pathname = useRouterState({ select: (s) => s.location.pathname });
  const bare = pathname === "/card";

  useEffect(() => {
    initAnalytics();
  }, []);

  if (bare) {
    return (
      <QueryClientProvider client={queryClient}>
        <Outlet />
      </QueryClientProvider>
    );
  }

  return (
    <QueryClientProvider client={queryClient}>
      <div className="flex min-h-screen flex-col overflow-x-clip">
        <Header />
        <main className="flex-1">
          {/* Required: nested routes render here. Removing <Outlet /> breaks all child routes. */}
          <Outlet />
        </main>
        <Footer />
        <StickyTextBar />
      </div>
    </QueryClientProvider>
  );
}
