import { useState } from 'react';
import { LoadingScreen } from './components/LoadingScreen';
import { Hero } from './components/Hero';
import { SelectedWorks } from './components/SelectedWorks';
import { Journal } from './components/Journal';
import { Explorations } from './components/Explorations';
import { Skills } from './components/Skills';
import { Footer } from './components/Footer';
import { ReactLenis } from 'lenis/react';

function App() {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <ReactLenis root>
      <div className="bg-bg min-h-screen text-text-primary selection:bg-text-primary selection:text-bg font-body antialiased">
        {isLoading && <LoadingScreen onComplete={() => setIsLoading(false)} />}
        <main className={`${isLoading ? 'h-screen overflow-hidden' : ''}`}>
          <Hero />
          <SelectedWorks />
          <Journal />
          <Explorations />
          <Skills />
          <Footer />
        </main>
      </div>
    </ReactLenis>
  );
}

export default App;
