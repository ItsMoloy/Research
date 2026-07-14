import { createFileRoute } from "@tanstack/react-router";
import { PageLayout, PageHeader } from "@/components/site/PageLayout";

export const Route = createFileRoute("/projects")({
  head: () => ({
    meta: [
      { title: "Projects | Geospatial Research Lab" },
      {
        name: "description",
        content:
          "Active and past research projects at the Geospatial Research Lab.",
      },
    ],
  }),
  component: ProjectsPage,
});

const projects = [
  {
    title: "Diverse types of coupling trends in tree and non-tree vegetation composition in key forest ecosystems of Bangladesh",
    status: "Active",
    sponsor: "Research Initiative",
    period: "Ongoing",
    summary:
      "A focused study on vegetation composition and ecological coupling patterns in important forest ecosystems across Bangladesh.",
  },
  {
    title: "Landuse change and river dynamics in Bangladesh",
    status: "Active",
    sponsor: "Geospatial Research",
    period: "Ongoing",
    summary:
      "Examining fluvial morphodynamics and landuse transformation using remote sensing and GIS techniques in the Jamuna and related river systems.",
  },
  {
    title: "Coastal and island environmental monitoring",
    status: "Active",
    sponsor: "Environmental Monitoring",
    period: "Ongoing",
    summary:
      "Research on marine debris, coastal change, and environmental conditions in offshore and coastal settings of Bangladesh.",
  },
];

function ProjectsPage() {
  return (
    <PageLayout>
      <PageHeader
        eyebrow="Research"
        title="Projects"
        description="Research programs and academic investigations led through the GEE Lab and its faculty profile."
      />
      <section className="container-academic py-16">
        <div className="space-y-6">
          {projects.map((p) => (
            <article
              key={p.title}
              className="rounded-md border-l-4 border-accent bg-card p-6 shadow-sm ring-1 ring-border md:p-8"
            >
              <div className="flex flex-wrap items-center gap-3">
                <span
                  className={`rounded-full px-3 py-1 text-xs font-semibold ${
                    p.status === "Active"
                      ? "bg-primary text-primary-foreground"
                      : "bg-muted text-muted-foreground"
                  }`}
                >
                  {p.status}
                </span>
                <span className="text-xs uppercase tracking-wider text-muted-foreground">
                  {p.period} · {p.sponsor}
                </span>
              </div>
              <h3 className="mt-3 font-serif text-2xl font-bold text-primary">
                {p.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-foreground md:text-base">
                {p.summary}
              </p>
            </article>
          ))}
        </div>
      </section>
    </PageLayout>
  );
}
