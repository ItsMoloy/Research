import { createFileRoute } from "@tanstack/react-router";
import { PageLayout, PageHeader } from "@/components/site/PageLayout";

export const Route = createFileRoute("/publications")({
  head: () => ({
    meta: [
      { title: "Publications | Geospatial Research Lab" },
      {
        name: "description",
        content:
          "Peer-reviewed publications from the Geospatial Research Lab.",
      },
    ],
  }),
  component: PublicationsPage,
});

const publications: Record<string, { authors: string; title: string; venue: string; doi?: string }[]> = {
  "2024": [
    {
      authors: "Uddin, M. M., Mia, M. B., Gazi, M. Y., & Kamal, A. M.",
      title:
        "Quantification of landuse changes driven by the dynamics of the Jamuna River, a giant tropical river of Bangladesh.",
      venue: "The Egyptian Journal of Remote Sensing and Space Sciences, 27(2), 392–402.",
      doi: "10.1016/j.ejrs.2024.04.004",
    },
    {
      authors: "Habib, M. H. R., Rahman, M., Uddin, M. M., Shimu, N. J., Hasan, M., Alam, M. J., & Islam, M. S.",
      title:
        "Application of AHP and geospatial technologies to assess ecotourism suitability: A case study of Saint Martin's Island in Bangladesh.",
      venue: "Regional Studies in Marine Science, 70, 103357.",
      doi: "10.1016/j.rsma.2023.103357",
    },
  ],
  "2023": [
    {
      authors: "Uddin, M. M., & Islam, M. S.",
      title:
        "Floating marine debris influx in the intertidal zone of offshore islands in Bangladesh: A case study of Manpura Island.",
      venue: "Marine Pollution Bulletin, 197, 115723.",
      doi: "10.1016/j.marpolbul.2023.115723",
    },
    {
      authors: "Gazi, M. Y., Haque, M. I. M., Alam, M. Z., & Uddin, M. M.",
      title:
        "Spatiotemporal landuse dynamics driven by socioeconomic context in the southwestern coastal districts of Bangladesh.",
      venue: "Ocean & Coastal Management, 245, 106859.",
      doi: "10.1016/j.ocecoaman.2023.106859",
    },
    {
      authors: "Kamal, A. M., Al-Montakim, M. N., Hasan, M. A., Mitu, M. M. P., Gazi, M. Y., Uddin, M. M., & Mia, M. B.",
      title:
        "Relationship between Urban Environmental Components and Dengue Prevalence in Dhaka City—An Approach of Spatial Analysis of Satellite Remote Sensing, Hydro-Climatic, and Census Dengue Data.",
      venue: "International Journal of Environmental Research and Public Health, 20(5), 3858.",
      doi: "10.3390/ijerph20053858",
    },
  ],
  "2022": [
    {
      authors: "Siddique, S., & Uddin, M. M.",
      title:
        "Green space dynamics in response to rapid urbanization: Patterns, transformations and topographic influence in Chattogram city, Bangladesh.",
      venue: "Land Use Policy, 114, 105974.",
    },
  ],
  "2021": [
    {
      authors: "Gazi, M. Y., Rahman, M. Z., Uddin, M. M., & Rahman, F. A.",
      title:
        "Spatio-temporal dynamic land cover changes and their impacts on the urban thermal environment in the Chittagong metropolitan area, Bangladesh.",
      venue: "GeoJournal, 86, 2119–2134.",
      doi: "10.1007/s10708-020-10178-4",
    },
  ],
  "2020": [
    {
      authors: "Gazi, M. Y., Hossain, F., Sadeak, S., & Uddin, M. M.",
      title:
        "Spatiotemporal variability of channel and bar morphodynamics in the Gorai-Madhumati River, Bangladesh using remote sensing and GIS techniques.",
      venue: "Frontiers of Earth Science, 14, 828–841.",
      doi: "10.1007/s11707-020-0827-z",
    },
  ],
};

function PublicationsPage() {
  return (
    <PageLayout>
      <PageHeader
        eyebrow="Scholarship"
        title="Publications"
        description="Selected peer-reviewed publications and research outputs associated with Md. Mahin Uddin and the GEE Lab."
      />
      <section className="container-academic py-16">
        <div className="space-y-12">
          {Object.entries(publications)
            .sort(([a], [b]) => Number(b) - Number(a))
            .map(([year, items]) => (
              <div key={year}>
                <div className="mb-5 flex items-baseline gap-4">
                  <h2 className="font-serif text-3xl font-bold text-primary">{year}</h2>
                  <div className="h-px flex-1 bg-border" />
                </div>
                <ol className="space-y-5">
                  {items.map((p, i) => (
                    <li key={i} className="border-l-2 border-accent pl-5">
                      <p className="text-sm text-foreground">
                        <span className="font-semibold">{p.authors}</span> ({year}).{" "}
                        <em>{p.title}</em> {p.venue}
                        {p.doi && (
                          <>
                            {" "}
                            <a
                              href={`https://doi.org/${p.doi}`}
                              className="link-underline"
                              target="_blank"
                              rel="noreferrer"
                            >
                              https://doi.org/{p.doi}
                            </a>
                          </>
                        )}
                      </p>
                    </li>
                  ))}
                </ol>
              </div>
            ))}
        </div>
      </section>
    </PageLayout>
  );
}
