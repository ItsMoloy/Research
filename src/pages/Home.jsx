import { Link } from 'react-router-dom';
import { faculty } from '../data/faculty';

export default function Home() {
  return (
    <div className="w-full flex justify-center">
      {/* Main Content */}
      <div className="max-w-4xl mx-auto px-6 py-10">
        {/* Lab Description */}
        <div className="mb-10">
          <h1 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
            Geography and Environmental Engineering (GEE) Lab
          </h1>
          <p className="text-gray-700 text-base leading-relaxed mb-4">
            GEE lab is a research laboratory that focuses on applying remote sensing technologies to various fields such as coastal dynamics, plant health and disease, precision agriculture, morphological analysis, wetland erosion and restoration, image processing and feature extraction. The laboratory has accumulated various surveying equipment, UAV systems, LiDAR systems, thermal and multispectral cameras for fine scale mapping and monitoring.
          </p>
          <p className="text-gray-600 text-sm">
            Department of Geography and Environment<br />
            Shahjalal University of Science and Technology
          </p>
        </div>

        <hr className="border-gray-300 my-8" />

        {/* Faculty Profile */}
        <div className="mb-10">
          <h2 className="text-xl font-bold text-gray-900 mb-6">Faculty Profile</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">{faculty.name}</h3>
              <p className="text-gray-600 mb-6">{faculty.title}</p>

              <div className="space-y-4">
                <div>
                  <p className="font-medium text-gray-900 text-sm">Email</p>
                  <a href={`mailto:${faculty.email}`} className="text-blue-700 hover:underline text-sm">
                    {faculty.email}
                  </a>
                </div>
                <div>
                  <p className="font-medium text-gray-900 text-sm">Phone</p>
                  <p className="text-gray-600 text-sm">{faculty.phone}</p>
                </div>
                <div>
                  <p className="font-medium text-gray-900 text-sm">Office Address</p>
                  <p className="text-gray-600 text-sm">{faculty.office}</p>
                </div>
              </div>
            </div>

            <div>
              <h4 className="font-semibold text-gray-900 mb-3 text-sm">Research Profile Links</h4>
              <div className="space-y-2 mb-6">
                <a href={faculty.googleScholar} target="_blank" rel="noopener noreferrer" className="text-blue-700 hover:underline text-sm block">
                  Google Scholar
                </a>
                <a href={faculty.researchGate} target="_blank" rel="noopener noreferrer" className="text-blue-700 hover:underline text-sm block">
                  ResearchGate
                </a>
              </div>

              <h4 className="font-semibold text-gray-900 mb-3 text-sm">Education</h4>
              <div className="space-y-4">
                {faculty.education.map((edu, index) => (
                  <div key={index} className="border-l-2 border-gray-400 pl-4">
                    <p className="font-medium text-gray-900 text-sm">{edu.degree}</p>
                    <p className="text-xs text-gray-600">{edu.year}</p>
                    <p className="text-xs text-gray-600">{edu.institution}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        <hr className="border-gray-300 my-8" />

        {/* Research Interests */}
        <div className="mb-10">
          <h2 className="text-xl font-bold text-gray-900 mb-6">Research Interests</h2>
          <ul className="space-y-2">
            {faculty.interests.map((interest, index) => (
              <li key={index} className="text-gray-700 text-sm">
                • {interest}
              </li>
            ))}
          </ul>
        </div>

        <hr className="border-gray-300 my-8" />

        {/* Active Research Project */}
        <div className="mb-10">
          <h2 className="text-xl font-bold text-gray-900 mb-4">Active Research Project</h2>
          <p className="text-gray-700 text-sm">{faculty.activeProject}</p>
        </div>

        <hr className="border-gray-300 my-8" />

        {/* Quick Links */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
          {[
            { name: 'Publications', path: '/publications', count: `${faculty.stats.publications} Publications` },
            { name: 'Teaching', path: '/teaching', count: '8 Courses' },
            { name: 'Team', path: '/team', count: 'Faculty & Students' },
            { name: 'News', path: '/news', count: 'Latest Updates' }
          ].map((item, index) => (
            <Link
              key={index}
              to={item.path}
              className="border border-gray-300 p-4 hover:border-gray-500 hover:bg-gray-50 transition-all"
            >
              <h3 className="font-semibold text-gray-900 text-sm">{item.name}</h3>
              <p className="text-xs text-gray-600 mt-1">{item.count}</p>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
