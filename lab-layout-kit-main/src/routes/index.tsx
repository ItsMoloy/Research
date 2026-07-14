import { createFileRoute, Link } from "@tanstack/react-router";
import { PageLayout } from "@/components/site/PageLayout";
import { Mail, MapPin, Phone, ArrowRight, Compass, Car } from "lucide-react";

export const Route = createFileRoute("/")({
  component: Home,
});

function Home() {
  return (
    <PageLayout>
      {/* Hero */}
      <section className="relative overflow-hidden bg-primary text-primary-foreground">
        <div
          aria-hidden
          className="absolute inset-0 opacity-[0.08] [background-image:linear-gradient(to_right,white_1px,transparent_1px),linear-gradient(to_bottom,white_1px,transparent_1px)] [background-size:44px_44px]"
        />
        <div className="container-academic relative py-20 md:py-28">
          <div className="mb-4 text-xs font-semibold uppercase tracking-[0.25em] text-accent">
            Remote Sensing · Environmental Monitoring · Applied Research
          </div>
          <h1 className="max-w-4xl font-serif text-4xl font-bold leading-tight md:text-6xl">
            Geography and Environmental Engineering (GEE) Lab
          </h1>
          <p className="mt-4 max-w-3xl font-serif text-lg text-parchment/85 md:text-xl">
            Department of Geography and Environment · Shahjalal University of Science and Technology
          </p>
          <p className="mt-6 max-w-3xl text-base leading-relaxed text-parchment/85 md:text-lg">
            The GEE Lab applies remote sensing technologies to coastal dynamics,
            plant health and disease, precision agriculture, morphological analysis,
            wetland erosion and restoration, image processing, and feature extraction.
            The laboratory is equipped with surveying instruments, UAV systems, LiDAR,
            thermal and multispectral cameras for fine-scale mapping and monitoring.
          </p>
          <div className="mt-9 flex flex-wrap gap-3">
            <Link
              to="/publications"
              className="inline-flex items-center gap-2 rounded-md bg-accent px-5 py-3 text-sm font-semibold text-accent-foreground shadow-sm transition hover:brightness-95"
            >
              View Publications <ArrowRight className="h-4 w-4" />
            </Link>
            <Link
              to="/team"
              className="inline-flex items-center gap-2 rounded-md border border-parchment/40 px-5 py-3 text-sm font-semibold text-parchment transition hover:bg-white/10"
            >
              Meet the Team
            </Link>
          </div>
        </div>
        <div className="h-1 w-full bg-accent" />
      </section>

      {/* Focus areas */}
      <section className="container-academic py-16 md:py-20">
        <div className="grid gap-8 md:grid-cols-3">
          {[
            {
              title: "Coastal Dynamics",
              body: "Monitoring shoreline change, coastal vulnerability, and environmental transformation.",
            },
            {
              title: "Plant Health & Disease",
              body: "Using spectral and spatial data to assess vegetation stress and disease patterns.",
            },
            {
              title: "Precision Agriculture",
              body: "Supporting field-scale analysis for crop monitoring and resource optimization.",
            },
            {
              title: "Morphological Analysis",
              body: "Studying landscape form and terrain structure through geospatial processing.",
            },
            {
              title: "Wetland Restoration",
              body: "Tracking wetland change, erosion, and restoration progress over time.",
            },
            {
              title: "Image Processing",
              body: "Developing feature extraction workflows for remote sensing and geospatial datasets.",
            },
          ].map((f) => (
            <div
              key={f.title}
              className="border-l-4 border-accent bg-card p-6 shadow-sm ring-1 ring-border"
            >
              <h3 className="font-serif text-xl font-bold text-primary">
                {f.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                {f.body}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Research strengths */}
      <section className="bg-secondary/50 py-16 md:py-20">
        <div className="container-academic">
          <div className="mb-10">
            <div className="text-xs font-semibold uppercase tracking-[0.2em] text-muted-foreground">
              Research &amp; Infrastructure
            </div>
            <h2 className="mt-2 font-serif text-3xl font-bold text-primary md:text-4xl">
              Applied geospatial research for environment and development
            </h2>
            <div className="mt-4 h-1 w-12 bg-accent" />
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            <article className="rounded-md bg-card p-7 shadow-sm ring-1 ring-border">
              <div className="text-xs font-semibold uppercase tracking-wider text-accent-foreground/70">
                Research Focus
              </div>
              <h3 className="mt-2 font-serif text-2xl font-bold text-primary">
                Remote sensing for environmental monitoring
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                The lab develops analytical workflows for coastal dynamics, wetland change,
                vegetation stress, and landscape transformation using satellite and UAV data.
              </p>
            </article>

            <article className="rounded-md bg-card p-7 shadow-sm ring-1 ring-border">
              <div className="text-xs font-semibold uppercase tracking-wider text-accent-foreground/70">
                Equipment
              </div>
              <h3 className="mt-2 font-serif text-2xl font-bold text-primary">
                Surveying, UAV, LiDAR, and multispectral systems
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                The laboratory combines field instruments with thermal and multispectral cameras
                to support fine-scale mapping, monitoring, and analysis across diverse environments.
              </p>
            </article>
          </div>
        </div>
      </section>

      {/* Department info */}
      <section className="container-academic py-16 md:py-20">
        <div className="mb-10">
          <div className="text-xs font-semibold uppercase tracking-[0.2em] text-muted-foreground">
            Visit the Department
          </div>
          <h2 className="mt-2 font-serif text-3xl font-bold text-primary md:text-4xl">
            Department of Geography and Environment
          </h2>
          <div className="mt-4 h-1 w-12 bg-accent" />
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          <div className="rounded-md border border-border p-7">
            <div className="flex items-center gap-2 text-primary">
              <MapPin className="h-5 w-5" />
              <h3 className="font-serif text-xl font-bold">Campus Location</h3>
            </div>
            <address className="mt-4 not-italic text-sm leading-relaxed text-foreground">
              Department of Geography and Environment
              <br />
              Shahjalal University of Science and Technology
              <br />
              Sylhet, Bangladesh
            </address>
          </div>
          <div className="rounded-md border border-border p-7">
            <div className="flex items-center gap-2 text-primary">
              <MapPin className="h-5 w-5" />
              <h3 className="font-serif text-xl font-bold">Lab Contact</h3>
            </div>
            <p className="mt-4 text-sm leading-relaxed text-foreground">
              For research collaborations, student enquiries, or visits, please use the
              department contact channels listed in the site footer.
            </p>
          </div>
        </div>
      </section>

      {/* Visitor info */}
      <section className="bg-secondary/50 py-16 md:py-20">
        <div className="container-academic">
          <div className="mb-10">
            <div className="text-xs font-semibold uppercase tracking-[0.2em] text-muted-foreground">
              For Visitors
            </div>
            <h2 className="mt-2 font-serif text-3xl font-bold text-primary md:text-4xl">
              Planning a visit to the lab
            </h2>
            <div className="mt-4 h-1 w-12 bg-accent" />
          </div>

          <div className="grid gap-8 lg:grid-cols-2">
            <div className="rounded-md bg-card p-7 shadow-sm ring-1 ring-border">
              <div className="flex items-center gap-2 text-primary">
                <Car className="h-5 w-5" />
                <h3 className="font-serif text-xl font-bold">Getting to SUST</h3>
              </div>
              <ol className="mt-4 space-y-3 text-sm text-foreground">
                <li>
                  <span className="font-semibold text-primary">1.</span> The Department is located on the Shahjalal University of Science and Technology campus in Sylhet.
                </li>
                <li>
                  <span className="font-semibold text-primary">2.</span> Visitors may coordinate with the department before arriving for laboratory access or meetings.
                </li>
                <li>
                  <span className="font-semibold text-primary">3.</span> Please contact the department for the latest guidance on campus access and visit arrangements.
                </li>
              </ol>
            </div>

            <div className="rounded-md bg-card p-7 shadow-sm ring-1 ring-border">
              <div className="flex items-center gap-2 text-primary">
                <Compass className="h-5 w-5" />
                <h3 className="font-serif text-xl font-bold">Research engagement</h3>
              </div>
              <ol className="mt-4 space-y-3 text-sm text-foreground">
                <li>
                  <span className="font-semibold text-primary">1.</span> The lab welcomes academic collaborations and joint research initiatives.
                </li>
                <li>
                  <span className="font-semibold text-primary">2.</span> Students interested in remote sensing and geospatial methods can explore the teaching and project pages.
                </li>
                <li>
                  <span className="font-semibold text-primary">3.</span> The team page highlights current faculty and student contributors to the lab’s work.
                </li>
              </ol>
            </div>
          </div>
        </div>
      </section>
    </PageLayout>
  );
}
