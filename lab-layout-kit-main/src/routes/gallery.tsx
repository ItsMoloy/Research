import { createFileRoute } from "@tanstack/react-router";
import { PageLayout, PageHeader } from "@/components/site/PageLayout";

export const Route = createFileRoute("/gallery")({
  head: () => ({
    meta: [
      { title: "Gallery | Geospatial Research Lab" },
      {
        name: "description",
        content:
          "Photographs from fieldwork, campaigns, and lab events.",
      },
    ],
  }),
  component: GalleryPage,
});

const images = [
  { title: "UAV survey — Atchafalaya Basin", tone: "from-slate-700 to-slate-900" },
  { title: "Field spectroscopy calibration", tone: "from-emerald-700 to-emerald-900" },
  { title: "Sentinel-2 land cover map", tone: "from-indigo-700 to-indigo-900" },
  { title: "Graduate student workshop", tone: "from-amber-600 to-amber-800" },
  { title: "SAR flood extent — 2023 event", tone: "from-sky-700 to-sky-900" },
  { title: "Lab meeting, Howe-Russell 227", tone: "from-rose-700 to-rose-900" },
];

function GalleryPage() {
  return (
    <PageLayout>
      <PageHeader
        eyebrow="Field & Events"
        title="Gallery"
        description="A visual record of fieldwork campaigns, workshops, and everyday lab life."
      />
      <section className="container-academic py-16">
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {images.map((img) => (
            <figure key={img.title} className="group overflow-hidden rounded-md">
              <div
                className={`aspect-[4/3] w-full bg-gradient-to-br ${img.tone} transition-transform duration-500 group-hover:scale-[1.02]`}
                role="img"
                aria-label={img.title}
              />
              <figcaption className="mt-2 text-sm text-muted-foreground">
                {img.title}
              </figcaption>
            </figure>
          ))}
        </div>
      </section>
    </PageLayout>
  );
}
