import { createFileRoute } from "@tanstack/react-router";
import { PageLayout, PageHeader } from "@/components/site/PageLayout";

export const Route = createFileRoute("/news")({
  head: () => ({
    meta: [
      { title: "News | Geospatial Research Lab" },
      {
        name: "description",
        content:
          "Announcements, grants, awards, and lab updates.",
      },
    ],
  }),
  component: NewsPage,
});

const items = [
  {
    date: "May 12, 2026",
    tag: "Grant",
    title: "NASA awards $1.2M for coastal wetland monitoring",
    body: "The lab received a three-year award from NASA Earth Science to extend our multi-decadal wetland analysis across the Gulf Coast.",
  },
  {
    date: "March 4, 2026",
    tag: "Award",
    title: "Alex Rivera receives ASPRS student excellence award",
    body: "Ph.D. candidate Alex Rivera was recognized for outstanding contributions to SAR-based rapid flood mapping.",
  },
  {
    date: "January 20, 2026",
    tag: "Publication",
    title: "New paper in Remote Sensing of Environment",
    body: "Our lab's transformer-based segmentation method for wetland monitoring has been published in RSE.",
  },
  {
    date: "October 8, 2025",
    tag: "Event",
    title: "Open house and lab tours during Research Week",
    body: "Prospective students and community members are invited to visit the lab, view drone demonstrations, and meet researchers.",
  },
];

function NewsPage() {
  return (
    <PageLayout>
      <PageHeader
        eyebrow="Announcements"
        title="News"
        description="Grants, publications, awards, and lab activities."
      />
      <section className="container-academic py-16">
        <div className="mx-auto max-w-3xl space-y-8">
          {items.map((n) => (
            <article key={n.title} className="border-b border-border pb-8 last:border-b-0">
              <div className="flex flex-wrap items-center gap-3 text-xs">
                <span className="rounded-full bg-primary px-3 py-1 font-semibold uppercase tracking-wider text-primary-foreground">
                  {n.tag}
                </span>
                <time className="uppercase tracking-wider text-muted-foreground">
                  {n.date}
                </time>
              </div>
              <h3 className="mt-3 font-serif text-2xl font-bold text-primary">
                {n.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-foreground md:text-base">
                {n.body}
              </p>
            </article>
          ))}
        </div>
      </section>
    </PageLayout>
  );
}
