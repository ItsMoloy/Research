import { createFileRoute } from "@tanstack/react-router";
import { PageLayout, PageHeader } from "@/components/site/PageLayout";
import { Mail, Phone, MapPin } from "lucide-react";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact | GEE Lab" },
      {
        name: "description",
        content:
          "Get in touch with the Geography and Environmental Engineering Lab at SUST.",
      },
    ],
  }),
  component: ContactPage,
});

function ContactPage() {
  return (
    <PageLayout>
      <PageHeader
        eyebrow="Get in Touch"
        title="Contact"
        description="Prospective students, collaborators, and media inquiries are welcome."
      />
      <section className="container-academic py-16">
        <div className="grid gap-10 lg:grid-cols-5">
          <div className="space-y-6 lg:col-span-2">
            <div>
              <h3 className="font-serif text-xl font-bold text-primary">Lab Office</h3>
              <div className="mt-4 space-y-3 text-sm">
                <div className="flex gap-3">
                  <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                  <address className="not-italic leading-relaxed">
                    Department of Geography and Environment
                    <br />
                    Shahjalal University of Science and Technology
                    <br />
                    Sylhet-3114, Bangladesh
                  </address>
                </div>
                <div className="flex items-center gap-3">
                  <Phone className="h-4 w-4 text-primary" />
                  <a href="tel:+8801580380279" className="link-underline">
                    +880 1580 380279
                  </a>
                </div>
                <div className="flex items-center gap-3">
                  <Mail className="h-4 w-4 text-primary" />
                  <a href="mailto:mahin-gee@sust.edu" className="link-underline">
                    mahin-gee@sust.edu
                  </a>
                </div>
              </div>
            </div>

            <div className="rounded-md border-l-4 border-accent bg-secondary/50 p-5">
              <div className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                Office Hours
              </div>
              <p className="mt-2 text-sm text-foreground">
                Monday–Friday · 9:00 AM – 5:00 PM (BST)
              </p>
            </div>
          </div>

          <form
            className="rounded-md border border-border bg-card p-7 lg:col-span-3"
            onSubmit={(e) => e.preventDefault()}
          >
            <h3 className="font-serif text-xl font-bold text-primary">
              Send a Message
            </h3>
            <div className="mt-6 grid gap-4 sm:grid-cols-2">
              <label className="block">
                <span className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                  Name
                </span>
                <input
                  type="text"
                  required
                  className="mt-1 w-full rounded-md border border-input bg-background px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-ring"
                />
              </label>
              <label className="block">
                <span className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                  Email
                </span>
                <input
                  type="email"
                  required
                  className="mt-1 w-full rounded-md border border-input bg-background px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-ring"
                />
              </label>
              <label className="block sm:col-span-2">
                <span className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                  Subject
                </span>
                <input
                  type="text"
                  className="mt-1 w-full rounded-md border border-input bg-background px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-ring"
                />
              </label>
              <label className="block sm:col-span-2">
                <span className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                  Message
                </span>
                <textarea
                  rows={5}
                  required
                  className="mt-1 w-full rounded-md border border-input bg-background px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-ring"
                />
              </label>
            </div>
            <button
              type="submit"
              className="mt-6 inline-flex items-center justify-center rounded-md bg-primary px-5 py-3 text-sm font-semibold text-primary-foreground transition hover:brightness-110"
            >
              Send Message
            </button>
          </form>
        </div>
      </section>
    </PageLayout>
  );
}
