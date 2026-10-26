import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  Outlet,
  Link,
  createRootRouteWithContext,
  useRouter,
  HeadContent,
  Scripts,
  useRouterState,
  type ErrorComponentProps,
} from "@tanstack/react-router";
import { useEffect, type ReactNode } from "react";

import appCss from "../styles.css?url";
import { reportLovableError } from "../lib/lovable-error-reporting";

function NotFoundComponent() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-charcoal px-4 text-bone">
      <div className="max-w-md text-center">
        <h1 className="font-serif text-7xl font-bold">404</h1>
        <h2 className="mt-4 text-xl font-semibold">Page not found</h2>
        <p className="mt-2 text-sm text-bone/60">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <div className="mt-6">
          <Link
            to="/"
            className="inline-flex items-center justify-center rounded-xl bg-ember px-6 py-3 text-sm font-semibold text-ember-foreground transition-colors hover:bg-ember/90"
          >
            Go home
          </Link>
        </div>
      </div>
    </div>
  );
}

function ErrorComponent({ error, reset }: ErrorComponentProps) {
  console.error(error);
  const router = useRouter();
  useEffect(() => {
    reportLovableError(error, { boundary: "tanstack_root_error_component" });
  }, [error]);

  return (
    <div className="flex min-h-screen items-center justify-center bg-charcoal px-4 text-bone">
      <div className="max-w-md text-center">
        <h1 className="text-xl font-semibold tracking-tight">
          This page didn't load
        </h1>
        <p className="mt-2 text-sm text-bone/60">
          Something went wrong on our end. You can try refreshing or head back home.
        </p>
        <div className="mt-6 flex flex-wrap justify-center gap-2">
          <button
            onClick={() => {
              router.invalidate();
              reset();
            }}
            className="inline-flex items-center justify-center rounded-xl bg-ember px-6 py-3 text-sm font-semibold text-ember-foreground transition-colors hover:bg-ember/90"
          >
            Try again
          </button>
          <a
            href="/"
            className="inline-flex items-center justify-center rounded-xl border border-bone/20 bg-charcoal px-6 py-3 text-sm font-semibold text-bone transition-colors hover:bg-ash"
          >
            Go home
          </a>
        </div>
      </div>
    </div>
  );
}

export const Route = createRootRouteWithContext<{ queryClient: QueryClient }>()({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "Grills by Opty" },
      { name: "description", content: "Authentic Abeokuta barbecue, slow-grilled over local hardwood embers." },
      { name: "author", content: "Grills by Opty" },
      { property: "og:title", content: "Grills by Opty" },
      { property: "og:description", content: "Authentic Abeokuta barbecue, slow-grilled over local hardwood embers." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:site", content: "@GrillsbyOpty" },
    ],
    links: [
      {
        rel: "stylesheet",
        href: appCss,
      },
      { rel: "icon", href: "/favicon.ico", type: "image/x-icon" },
      {
        rel: "preconnect",
        href: "https://fonts.googleapis.com",
      },
      {
        rel: "preconnect",
        href: "https://fonts.gstatic.com",
        crossOrigin: "anonymous",
      },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,700;1,400;1,700&family=Inter:wght@400;500;600;700&display=swap",
      },
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
      <body className="bg-charcoal text-bone antialiased">
        {children}
        <Scripts />
      </body>
    </html>
  );
}

function Header() {
  return (
    <header className="sticky top-0 z-40 bg-charcoal/90 backdrop-blur-md border-b border-bone/10">
      <div className="mx-auto flex max-w-5xl items-center justify-between px-6 py-4">
        <Link to="/" className="font-serif text-xl tracking-tight italic text-bone">
          Grills by Opty
        </Link>
        <div className="flex items-center gap-2">
          <div className="size-2 rounded-full bg-emerald-500" />
          <span className="text-[10px] font-medium uppercase tracking-widest text-emerald-500">
            Open Now
          </span>
        </div>
      </div>
    </header>
  );
}

function MobileNav() {
  const pathname = useRouterState({ select: (s) => s.location.pathname });

  const links = [
    { to: "/" as const, label: "Home" },
    { to: "/menu" as const, label: "Menu" },
    { to: "/reviews" as const, label: "Reviews" },
    { to: "/demo" as const, label: "Demo" },
  ];

  return (
    <nav className="fixed bottom-6 left-1/2 z-50 w-[90%] max-w-md -translate-x-1/2 rounded-full border border-bone/10 bg-charcoal p-2 shadow-2xl backdrop-blur-lg">
      <div className="flex items-center justify-between">
        {links.map((link, index) => (
          <div key={link.to} className="flex flex-1 items-center">
            <Link
              to={link.to}
              className={`flex-1 py-3 text-center text-[10px] font-bold uppercase tracking-widest transition-colors ${
                pathname === link.to ? "text-ember" : "text-bone/60 hover:text-bone"
              }`}
            >
              {link.label}
            </Link>
            {index < links.length - 1 && (
              <div className="h-4 w-px bg-bone/10" />
            )}
          </div>
        ))}
      </div>
    </nav>
  );
}

function Footer() {
  return (
    <footer className="border-t border-bone/10 bg-charcoal px-6 pb-32 pt-12">
      <div className="mx-auto max-w-5xl text-center">
        <div className="font-serif text-xl italic text-bone/20">Grills by Opty</div>
        <p className="mt-2 text-[10px] uppercase tracking-widest text-bone/30">
          Crafted with fire in Abeokuta
        </p>
        <p className="mt-6 text-xs text-bone/40">
          Housing Estate, 62/64 Edun Adila Street, Ibara, Abeokuta, Ogun State
        </p>
      </div>
    </footer>
  );
}

function RootComponent() {
  const { queryClient } = Route.useRouteContext();

  return (
    <QueryClientProvider client={queryClient}>
      <div className="flex min-h-screen flex-col">
        <Header />
        <main className="flex-1">
          <Outlet />
        </main>
        <Footer />
        <MobileNav />
      </div>
    </QueryClientProvider>
  );
}
