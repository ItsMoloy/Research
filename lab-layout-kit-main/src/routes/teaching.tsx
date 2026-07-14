import { createFileRoute } from "@tanstack/react-router";
import { PageLayout, PageHeader } from "@/components/site/PageLayout";

export const Route = createFileRoute("/teaching")({
  head: () => ({
    meta: [
      { title: "Teaching | Geospatial Research Lab" },
      {
        name: "description",
        content:
          "Undergraduate and graduate courses taught by lab faculty.",
      },
    ],
  }),
  component: TeachingPage,
});

const courses = [
  {
    code: "GEE 0532 5213",
    title: "Coastal Geography and Environment",
    level: "MS 2nd Semester",
    term: "Theory",
    desc: "3 credits · 2 semesters",
  },
  {
    code: "GEE 0532 5123",
    title: "Paleogeography and Paleoenvironment",
    level: "MS 1st Semester",
    term: "Theory",
    desc: "3 credits · Ongoing",
  },
  {
    code: "GEE 0532 4133",
    title: "Climatology II",
    level: "4th Year 1st Semester",
    term: "Theory",
    desc: "2 credits · 1 semester",
  },
  {
    code: "GEE 0532 3243",
    title: "Climatology II",
    level: "3rd Year 2nd Semester",
    term: "Theory",
    desc: "3 credits · 2 semesters",
  },
  {
    code: "GEE 0532 3137",
    title: "Advanced Geographical Information System",
    level: "3rd Year 1st Semester",
    term: "Theory",
    desc: "3 credits · 3 semesters",
  },
  {
    code: "SPS 0532 5112",
    title: "Application of Unmanned Aerial Vehicle (UAV, DRONE)",
    level: "MS 1st Semester",
    term: "Lab",
    desc: "3 credits · Ongoing",
  },
  {
    code: "SPS 0532 5101",
    title: "Techniques in Physical Geography",
    level: "MS 1st Semester",
    term: "Lab",
    desc: "3 credits · 1 semester",
  },
  {
    code: "GEE 0532 4262",
    title: "Application of Remote Sensing and GIS",
    level: "4th Year 2nd Semester",
    term: "Lab",
    desc: "3 credits · 2 semesters",
  },
  {
    code: "GEE 0532 4152",
    title: "Land Use and Land Cover Survey",
    level: "4th Year 1st Semester",
    term: "Lab",
    desc: "2 credits · 2 semesters",
  },
  {
    code: "GEE 0532 2264",
    title: "Practical in Physical Geography",
    level: "2nd Year 2nd Semester",
    term: "Lab",
    desc: "3 credits · Ongoing",
  },
  {
    code: "GEE 0532 2152",
    title: "Geodetic Surveying",
    level: "2nd Year 1st Semester",
    term: "Lab",
    desc: "3 credits · 1 semester",
  },
  {
    code: "GEE 0532 2154",
    title: "Introduction to GIS and Computer Technique",
    level: "2nd Year 1st Semester",
    term: "Lab",
    desc: "3 credits · 3 semesters",
  },
];

function TeachingPage() {
  return (
    <PageLayout>
      <PageHeader
        eyebrow="Curriculum"
        title="Teaching"
        description="Courses taught by Md. Mahin Uddin within the Department of Geography and Environment at SUST."
      />
      <section className="container-academic py-16">
        <div className="overflow-hidden rounded-md border border-border">
          <table className="w-full text-left text-sm">
            <thead className="bg-primary text-primary-foreground">
              <tr>
                <th className="px-5 py-3 font-semibold">Code</th>
                <th className="px-5 py-3 font-semibold">Course</th>
                <th className="hidden px-5 py-3 font-semibold md:table-cell">Level</th>
                <th className="hidden px-5 py-3 font-semibold md:table-cell">Term</th>
              </tr>
            </thead>
            <tbody>
              {courses.map((c, i) => (
                <tr
                  key={c.code}
                  className={i % 2 === 0 ? "bg-card" : "bg-secondary/40"}
                >
                  <td className="px-5 py-4 font-semibold text-primary">{c.code}</td>
                  <td className="px-5 py-4">
                    <div className="font-semibold text-foreground">{c.title}</div>
                    <div className="mt-1 text-xs text-muted-foreground">{c.desc}</div>
                    <div className="mt-1 text-xs text-muted-foreground md:hidden">
                      {c.level} · {c.term}
                    </div>
                  </td>
                  <td className="hidden px-5 py-4 text-muted-foreground md:table-cell">
                    {c.level}
                  </td>
                  <td className="hidden px-5 py-4 text-muted-foreground md:table-cell">
                    {c.term}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>
    </PageLayout>
  );
}
