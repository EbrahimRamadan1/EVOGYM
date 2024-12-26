import { useEffect, useState } from 'react';
import Navbar from './components/Navbar/Navbar';
import { SelectedPage } from '@/shared/Types';
import Home from './components/Home/Home';
import Benefits from './components/Benefits/Benefits';
import OurClasses from './components/OurClasses/OurClasses';
import ContactUs from './components/ContactUs/ContactUs';
import Footer from './components/Footer/Footer';

function App() {
  const [selectedPage, setSelectedPage] = useState<SelectedPage>(
    SelectedPage.Home
  );
  const [isTopOfPage, setIsTopOfPage] = useState<boolean>(true);

  function handleScroll() {
    if (window.scrollY === 0) {
      setIsTopOfPage(true);
      setSelectedPage(SelectedPage.Home);
    }
    if (window.scrollY !== 0) setIsTopOfPage(false);
  }
  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className="app bg-gray-20 scroll scrollbar scrollbar-thumb-primary-300 scrollbar-track-primary-100 hover:scrollbar-thumb-primary-500">
      <Navbar
        isTopOfPage={isTopOfPage}
        selectedPage={selectedPage}
        setSelectedPage={setSelectedPage}
      />

      <Home setSelectedPage={setSelectedPage} />
      <Benefits setSelectedPage={setSelectedPage} />
      <OurClasses setSelectedPage={setSelectedPage} />
      <ContactUs setSelectedPage={setSelectedPage} />
      <Footer />
    </div>
  );
}

export default App;
