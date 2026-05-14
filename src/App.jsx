import { BrowserRouter, Routes, Route } from 'react-router-dom';
import MainLayout from './layouts/MainLayout';
import Home from './pages/Home';
import Publications from './pages/Publications';
import Teaching from './pages/Teaching';
import { News } from './pages/OtherPages';

// Placeholder pages for new routes
const Team = () => <div className="p-8 max-w-7xl mx-auto"><h1 className="text-3xl font-bold">Team</h1><p className="mt-4">Our team members page coming soon.</p></div>;
const Projects = () => <div className="p-8 max-w-7xl mx-auto"><h1 className="text-3xl font-bold">Projects</h1><p className="mt-4">Our research projects page coming soon.</p></div>;
const Equipment = () => <div className="p-8 max-w-7xl mx-auto"><h1 className="text-3xl font-bold">Equipment</h1><p className="mt-4">Our lab equipment page coming soon.</p></div>;
const Affiliates = () => <div className="p-8 max-w-7xl mx-auto"><h1 className="text-3xl font-bold">Affiliates</h1><p className="mt-4">Our affiliate organizations page coming soon.</p></div>;
const Gallery = () => <div className="p-8 max-w-7xl mx-auto"><h1 className="text-3xl font-bold">Gallery</h1><p className="mt-4">Our photo gallery page coming soon.</p></div>;

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<MainLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/team" element={<Team />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/equipment" element={<Equipment />} />
          <Route path="/publications" element={<Publications />} />
          <Route path="/teaching" element={<Teaching />} />
          <Route path="/affiliates" element={<Affiliates />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/news" element={<News />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
