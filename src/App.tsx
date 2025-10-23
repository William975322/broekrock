import { Navigation } from './components/Navigation';
import { Hero } from './components/Hero';
import { TravelInfo } from './components/TravelInfo';
import { Tickets } from './components/Tickets';
import { Lineup } from './components/Lineup';
import { Gallery } from './components/Gallery';
import { News } from './components/News';
import { Footer } from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-desert-cream font-inter">
      <Navigation />
      <Hero />
      <TravelInfo />
      <Tickets />
      <Lineup />
      <Gallery />
      <News />
      <Footer />
    </div>
  );
}

export default App;
