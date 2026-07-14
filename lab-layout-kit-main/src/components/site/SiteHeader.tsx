import { Link } from "@tanstack/react-router";
import { useState } from "react";
import { Menu, X } from "lucide-react";

const navItems = [
  { to: "/", label: "Home" },
  { to: "/team", label: "Team" },
  { to: "/projects", label: "Projects" },
  { to: "/equipment", label: "Equipment" },
  { to: "/publications", label: "Publications" },
  { to: "/teaching", label: "Teaching" },
  { to: "/gallery", label: "Gallery" },
  { to: "/news", label: "News" },
  { to: "/contact", label: "Contact" },
] as const;

export function SiteHeader() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-border bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/80">
      {/* University strip */}
      <div className="bg-navy-deep text-parchment">
        <div className="container-academic flex h-8 items-center justify-between text-xs tracking-wide">
          <span className="opacity-90">SUST · Department of Geography and Environment</span>
          <a
            href="https://www.sust.edu"
            className="opacity-80 hover:opacity-100"
            target="_blank"
            rel="noreferrer"
          >
            sust.edu
          </a>
        </div>
      </div>

      <div className="container-academic flex h-20 items-center justify-between gap-4">
        <Link to="/" className="flex min-w-0 items-center gap-3">
          <div className="grid h-11 w-11 shrink-0 place-items-center rounded-md bg-primary text-primary-foreground shadow-sm">
            <span className="font-serif text-lg font-bold">GEE</span>
          </div>
          <div className="min-w-0 leading-tight">
            <div className="truncate font-serif text-lg font-bold text-primary">
              GEE Lab
            </div>
            <div className="truncate text-xs text-muted-foreground">
              Geography and Environmental Engineering
            </div>
          </div>
        </Link>

        <nav className="hidden items-center gap-1 lg:flex">
          {navItems.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              className="rounded-md px-3 py-2 text-sm font-medium text-foreground/80 transition-colors hover:bg-secondary hover:text-primary"
              activeProps={{
                className:
                  "rounded-md px-3 py-2 text-sm font-semibold text-primary bg-secondary",
              }}
              activeOptions={{ exact: item.to === "/" }}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <button
          className="inline-flex items-center justify-center rounded-md p-2 text-primary lg:hidden"
          onClick={() => setOpen((v) => !v)}
          aria-label="Toggle menu"
          aria-expanded={open}
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {open && (
        <div className="border-t border-border bg-white lg:hidden">
          <nav className="container-academic flex flex-col py-3">
            {navItems.map((item) => (
              <Link
                key={item.to}
                to={item.to}
                onClick={() => setOpen(false)}
                className="rounded-md px-3 py-2 text-sm font-medium text-foreground/80 hover:bg-secondary hover:text-primary"
                activeProps={{
                  className:
                    "rounded-md px-3 py-2 text-sm font-semibold text-primary bg-secondary",
                }}
                activeOptions={{ exact: item.to === "/" }}
              >
                {item.label}
              </Link>
            ))}
          </nav>
        </div>
      )}

      {/* Gold accent bar */}
      <div className="h-1 w-full bg-accent" />
    </header>
  );
}
