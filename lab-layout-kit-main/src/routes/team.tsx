import { createFileRoute } from "@tanstack/react-router";
import { PageLayout, PageHeader } from "@/components/site/PageLayout";
import { Mail } from "lucide-react";

export const Route = createFileRoute("/team")({
  head: () => ({
    meta: [
      { title: "Team | GEE Lab" },
      {
        name: "description",
        content:
          "Meet the faculty and researchers of the Geography and Environmental Engineering Lab at SUST.",
      },
    ],
  }),
  component: TeamPage,
});

const faculty = {
  name: "Md. Mahin Uddin",
  role: "Lecturer",
  email: "mahin-gee@sust.edu",
  phone: "+8801580380279",
  office: "Department of Geography and Environment, Shahjalal University of Science and Technology, Sylhet-3114, Bangladesh",
  bio: "Md. Mahin Uddin is a lecturer in the Department of Geography and Environment at Shahjalal University of Science and Technology, with research interests spanning GIS, remote sensing, fluvial geomorphology, land use planning, forest ecosystems, and drone-based environmental monitoring. His work connects geospatial methods with practical questions of landscape change, resource management, and environmental resilience in Bangladesh.",
  education: [
    "B.S. (Hon's), 2019, Department of Geography and Environment, University of Dhaka",
    "M.S. (Thesis; Physical Geography and Environment Stream), 2020, Department of Geography and Environment, University of Dhaka",
  ],
  interests: [
    "Drone-based remote sensing and geospatial applications",
    "Satellite-based remote sensing and geospatial applications",
    "Spatial and land-use planning",
    "Coastal geomorphology",
    "Fluvial geomorphology",
    "Climate change and disaster risk reduction",
    "Forest ecology",
  ],
  projects: [
    "Diverse types of coupling trends in tree and non-tree vegetation composition in key forest ecosystems of Bangladesh",
  ],
  experience: [
    "Lecturer (Full-time), Department of Geography and Environment, School of Physical Sciences, Shahjalal University of Science and Technology, Sylhet, Bangladesh, since January 2024.",
    "Assistant Provost (Additional duty), Syed Mujtaba Ali Residential Hall, Shahjalal University of Science and Technology, Sylhet, Bangladesh, May 2024 to August 2024.",
    "Student Advisor (Additional duty), Department of Geography and Environment, School of Physical Sciences, Shahjalal University of Science and Technology, Sylhet, Bangladesh, February 2025 to Present.",
    "Research Assistant (Part-time), Department of Disaster Science and Climate Resilience, Faculty of Earth and Environmental Sciences, University of Dhaka, Dhaka, Bangladesh, May 2023 to December 2023.",
    "Research Assistant (Part-time), Disaster Research Training and Management Centre (DRTMC), Department of Geography and Environment, Faculty of Earth and Environmental Sciences, University of Dhaka, Dhaka, Bangladesh, December 2022 to April 2023 (Project title: Illegal Sand Mining in Bangladesh: Practices, Environmental Impacts and Research Initiatives).",
    "Research Assistant (Part-time), Department of Geography and Environment, Faculty of Earth and Environmental Sciences, University of Dhaka, Dhaka, Bangladesh, July 2022 to June 2023 (Project title: Impact of Climate Change on Cropping Pattern of Pirojpur District in Bangladesh, Funded by UGC Research Grant: 2022-23).",
    "Research Assistant (Part-time), Department of Geology, Faculty of Earth and Environmental Sciences, University of Dhaka, Dhaka, Bangladesh, July 2022 to June 2023 (Project title: Impact of Elevated Transportation Infrastructure on Urban Thermal Environment in Dhaka Megacity, Bangladesh, Funded by the Ministry of Science and Technology, Government of the People's Republic of Bangladesh as part of the Special Research Grant in the fiscal year 2022-2023).",
    "Research Assistant (Part-time), Department of Geology, Faculty of Earth and Environmental Sciences, University of Dhaka, Dhaka, Bangladesh, July 2021 to June 2022 (Project title: Assessment of spatio-temporal changes of land use-land cover driven by the channel morphodynamics and tectonic controls within the Jamuna River, Bangladesh, Funded by the Centennial Research Grant (2020-21) of Dhaka University).",
  ],
  teaching: [
    "GEE420 - Application of Remote Sensing and GIS (Lab)",
    "GEE422 - Climatology (2)",
    "GEE334 - Advanced Geographical Information System",
    "GEE253 - Introduction to GIS and Computer Techniques (Lab)",
    "GEE440 - Landuse and Land Cover Survey (Lab and Field Work)",
    "GEE342 - Climatology 1",
    "GEE0532 2152 - Geodetic Surveying (Lab)",
    "GEE0532 5213 - Coastal Geography and Environment",
  ],
  publications: [
    "Uddin, M. M., Mia, M. B., Gazi, M. Y., & Kamal, A. M. (2024). Quantification of landuse changes driven by the dynamics of the Jamuna River, a giant tropical river of Bangladesh. The Egyptian Journal of Remote Sensing and Space Sciences, 27(2), 392-402.",
    "Habib, M. H. R., Rahman, M., Uddin, M. M., Shimu, N. J., Hasan, M., Alam, M. J., & Islam, M. S. (2024). Application of AHP and geospatial technologies to assess ecotourism suitability: A case study of Saint Martin's Island in Bangladesh. Regional Studies in Marine Science, 70, 103357.",
    "Uddin, M. M., & Islam, M. S. (2023). Floating marine debris influx in the intertidal zone of offshore islands in Bangladesh: A case study of Manpura Island. Marine Pollution Bulletin, 197, 115723.",
    "Gazi, M. Y., Haque, M. I. M., Alam, M. Z., & Uddin, M. M. (2023). Spatiotemporal landuse dynamics driven by socioeconomic context in the southwestern coastal districts of Bangladesh. Ocean & Coastal Management, 245, 106859.",
    "Kamal, A. M., Al-Montakim, M. N., Hasan, M. A., Mitu, M. M. P., Gazi, M. Y., Uddin, M. M., & Mia, M. B. (2023). Relationship between Urban Environmental Components and Dengue Prevalence in Dhaka City—An Approach of Spatial Analysis of Satellite Remote Sensing, Hydro-Climatic, and Census Dengue Data. International Journal of Environmental Research and Public Health, 20(5), 3858.",
    "Nabila, F. N., Mia, M. B., Gazi, M. Y., Uddin, M. M., & Al, M. N. Assessment of Water Quality and Quantity in the Lakes of Dhaka Metropolitan City-Remote Sensing, Field and Laboratory Analyses.",
    "Siddique, S., & Uddin, M. M. (2022). Green space dynamics in response to rapid urbanization: Patterns, transformations and topographic influence in Chattogram city, Bangladesh. Land Use Policy, 114, 105974.",
    "Gazi, M. Y., Hossain, F., Sadeak, S., & Uddin, M. M. (2020). Spatiotemporal variability of channel and bar morphodynamics in the Gorai-Madhumati River, Bangladesh using remote sensing and GIS techniques. Frontiers of Earth Science, 14, 828-841.",
    "Gazi, M. Y., Rahman, M. Z., Uddin, M. M., & Rahman, F. A. (2021). Spatio-temporal dynamic land cover changes and their impacts on the urban thermal environment in the Chittagong metropolitan area, Bangladesh. GeoJournal, 86, 2119-2134.",
  ],
};

function TeamPage() {
  return (
    <PageLayout>
      <PageHeader
        eyebrow="Our People"
        title="Team"
        description="Faculty and researchers of the Geography and Environmental Engineering Lab working at the intersection of GIS, remote sensing, and environmental monitoring."
      />
      <section className="container-academic py-16">
        <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr]">
          <article className="rounded-md border border-border bg-card p-6 shadow-sm">
            <div className="flex flex-col gap-6 md:flex-row">
              <img
                src="/faculty.jpg"
                alt={faculty.name}
                className="h-48 w-full rounded-md object-cover md:w-48"
              />
              <div className="flex-1">
                <h3 className="font-serif text-2xl font-bold text-primary">{faculty.name}</h3>
                <div className="mt-2 text-sm font-semibold uppercase tracking-wider text-muted-foreground">
                  {faculty.role}
                </div>
                <p className="mt-4 text-sm leading-relaxed text-foreground">{faculty.bio}</p>
                <div className="mt-5 space-y-2 text-sm">
                  <div className="flex gap-2 text-foreground">
                    <span className="font-semibold">Office:</span>
                    <span>{faculty.office}</span>
                  </div>
                  <div className="flex gap-2 text-foreground">
                    <span className="font-semibold">Phone:</span>
                    <a href={`tel:${faculty.phone}`} className="link-underline">
                      {faculty.phone}
                    </a>
                  </div>
                  <div className="flex gap-2 text-foreground">
                    <span className="font-semibold">Email:</span>
                    <a href={`mailto:${faculty.email}`} className="link-underline">
                      {faculty.email}
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-8 grid gap-6 md:grid-cols-2">
              <div>
                <h4 className="font-serif text-lg font-semibold text-primary">Education</h4>
                <ul className="mt-3 space-y-2 text-sm text-foreground">
                  {faculty.education.map((item) => (
                    <li key={item} className="leading-relaxed">
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h4 className="font-serif text-lg font-semibold text-primary">Research Interests</h4>
                <ul className="mt-3 space-y-2 text-sm text-foreground">
                  {faculty.interests.map((item) => (
                    <li key={item} className="leading-relaxed">
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="mt-8 grid gap-6 md:grid-cols-2">
              <div>
                <h4 className="font-serif text-lg font-semibold text-primary">Active Research Project</h4>
                <ul className="mt-3 space-y-2 text-sm text-foreground">
                  {faculty.projects.map((item) => (
                    <li key={item} className="leading-relaxed">
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h4 className="font-serif text-lg font-semibold text-primary">Teaching</h4>
                <ul className="mt-3 space-y-2 text-sm text-foreground">
                  {faculty.teaching.map((item) => (
                    <li key={item} className="leading-relaxed">
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="mt-8">
              <h4 className="font-serif text-lg font-semibold text-primary">Employment / Experience</h4>
              <ul className="mt-3 space-y-3 text-sm text-foreground">
                {faculty.experience.map((item) => (
                  <li key={item} className="leading-relaxed">
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </article>

          <aside className="rounded-md border border-border bg-card p-6 shadow-sm">
            <h3 className="font-serif text-xl font-bold text-primary">Publications</h3>
            <p className="mt-2 text-sm text-muted-foreground">
              Selected publications and research outputs associated with Md. Mahin Uddin.
            </p>
            <ol className="mt-6 space-y-4 text-sm leading-relaxed text-foreground">
              {faculty.publications.map((item) => (
                <li key={item} className="border-b border-border/60 pb-4 last:border-b-0 last:pb-0">
                  {item}
                </li>
              ))}
            </ol>
          </aside>
        </div>
      </section>
    </PageLayout>
  );
}
