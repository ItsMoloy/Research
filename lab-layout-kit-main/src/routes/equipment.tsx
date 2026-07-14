import { createFileRoute } from "@tanstack/react-router";
import { PageLayout, PageHeader } from "@/components/site/PageLayout";

export const Route = createFileRoute("/equipment")({
  head: () => ({
    meta: [
      { title: "Equipment | Geospatial Research Lab" },
      {
        name: "description",
        content:
          "Field and computing equipment operated by the Geospatial Research Lab.",
      },
    ],
  }),
  component: EquipmentPage,
});

const equipment = [
  {
    category: "Unmanned Aerial Systems",
    items: [
      "DJI Matrice 300 RTK with multispectral & thermal payloads",
      "DJI Phantom 4 Multispectral",
      "Wingtra One Gen II fixed-wing PPK UAV",
    ],
  },
  {
    category: "Field Instruments",
    items: [
      "ASD FieldSpec 4 Hi-Res spectroradiometer",
      "Trimble R10 GNSS receivers (survey grade)",
      "FLIR Vue Pro thermal imaging kits",
    ],
  },
  {
    category: "Computing",
    items: [
      "GPU workstations (NVIDIA RTX A6000 × 4)",
      "On-prem storage cluster (240 TB)",
      "Google Earth Engine & AWS Open Data access",
    ],
  },
];

function EquipmentPage() {
  return (
    <PageLayout>
      <PageHeader
        eyebrow="Infrastructure"
        title="Equipment"
        description="Instrumentation and computing infrastructure available to lab members and collaborators."
      />
      <section className="container-academic py-16">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {equipment.map((group) => (
            <div key={group.category} className="rounded-md border border-border bg-card p-6">
              <h3 className="font-serif text-xl font-bold text-primary">
                {group.category}
              </h3>
              <div className="mt-3 h-0.5 w-8 bg-accent" />
              <ul className="mt-5 space-y-3 text-sm text-foreground">
                {group.items.map((it) => (
                  <li key={it} className="flex gap-2">
                    <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                    <span>{it}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>
    </PageLayout>
  );
}
