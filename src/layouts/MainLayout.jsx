import { Outlet } from 'react-router-dom';
import Header from '../components/Header';
import { Footer } from '../components/Cards';

export default function MainLayout() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />

      <main className="min-h-screen">
        <Outlet />
      </main>

      <Footer />
    </div>
  );
}
