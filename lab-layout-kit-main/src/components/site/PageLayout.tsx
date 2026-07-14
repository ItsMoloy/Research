import type { ReactNode } from "react";
import { SiteHeader } from "./SiteHeader";
import { SiteFooter } from "./SiteFooter";

export function PageLayout({ children }: { children: ReactNode }) {
  return (
    <div className="flex min-h-screen flex-col bg-background">
      <SiteHeader />
      <main className="flex-1">{children}</main>
      <SiteFooter />
    </div>
  );
}

export function PageHeader({
  eyebrow,
  title,
  description,
}: {
  eyebrow?: string;
  title: string;
  description?: string;
}) {
  return (
    <section className="border-b border-border bg-secondary/60">
      <div className="container-academic py-14 md:py-20">
        {eyebrow && (
          <div className="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-accent-foreground/70">
            {eyebrow}
          </div>
        )}
        <h1 className="font-serif text-3xl font-bold text-primary md:text-5xl">
          {title}
        </h1>
        {description && (
          <p className="mt-4 max-w-3xl text-base leading-relaxed text-muted-foreground md:text-lg">
            {description}
          </p>
        )}
        <div className="mt-6 h-1 w-16 bg-accent" />
      </div>
    </section>
  );
}
