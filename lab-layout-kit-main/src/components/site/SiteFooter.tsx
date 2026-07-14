import { Link } from "@tanstack/react-router";
import { Facebook, Linkedin, Mail, Phone, MapPin } from "lucide-react";

export function SiteFooter() {
  return (
    <footer className="mt-24 bg-navy-deep text-parchment">
      <div className="container-academic grid gap-10 py-14 md:grid-cols-4">
        <div className="md:col-span-2">
          <div className="font-serif text-xl font-bold">Geography and Environmental Engineering Lab</div>
          <p className="mt-3 max-w-md text-sm leading-relaxed text-parchment/80">
            Advancing remote sensing, GIS, and environmental monitoring for coastal,
            agricultural, and wetland research in Bangladesh and beyond.
          </p>
          <div className="mt-5 space-y-2 text-sm text-parchment/85">
            <div className="flex items-center gap-2">
              <MapPin className="h-4 w-4 text-accent" />
              Department of Geography and Environment, Shahjalal University of Science and Technology, Sylhet, Bangladesh
            </div>
            <div className="flex items-center gap-2">
              <Phone className="h-4 w-4 text-accent" />
              <a href="tel:+880XXXXXXXXXX" className="hover:text-accent">
                +880 XXXXXXXXXX
              </a>
            </div>
            <div className="flex items-center gap-2">
              <Mail className="h-4 w-4 text-accent" />
              <a href="mailto:gee-lab@sust.edu" className="hover:text-accent">
                gee-lab@sust.edu
              </a>
            </div>
          </div>
        </div>

        <div>
          <div className="text-sm font-semibold uppercase tracking-wider text-accent">
            Explore
          </div>
          <ul className="mt-4 space-y-2 text-sm">
            {(
              [
                { to: "/team", label: "Team" },
                { to: "/projects", label: "Projects" },
                { to: "/publications", label: "Publications" },
                { to: "/teaching", label: "Teaching" },
                { to: "/news", label: "News" },
              ] as const
            ).map(({ to, label }) => (
              <li key={to}>
                <Link to={to} className="text-parchment/80 hover:text-accent">
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <div className="text-sm font-semibold uppercase tracking-wider text-accent">
            Connect
          </div>
          <div className="mt-4 flex gap-3">
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noreferrer"
              aria-label="Facebook"
              className="grid h-9 w-9 place-items-center rounded-md border border-parchment/20 text-parchment/80 hover:border-accent hover:text-accent"
            >
              <Facebook className="h-4 w-4" />
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn"
              className="grid h-9 w-9 place-items-center rounded-md border border-parchment/20 text-parchment/80 hover:border-accent hover:text-accent"
            >
              <Linkedin className="h-4 w-4" />
            </a>
          </div>
          <ul className="mt-6 space-y-2 text-xs text-parchment/70">
            <li>
              <a href="#" className="hover:text-accent">
                Accessibility
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-accent">
                Privacy Policy
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-accent">
                Title IX
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="container-academic flex flex-col items-start justify-between gap-2 py-5 text-xs text-parchment/70 md:flex-row md:items-center">
          <div>
            © {new Date().getFullYear()} GEE Lab, Department of Geography and Environment, SUST.
            All rights reserved.
          </div>
          <div>
            Shahjalal University of Science and Technology · Sylhet, Bangladesh.
          </div>
        </div>
      </div>
    </footer>
  );
}
