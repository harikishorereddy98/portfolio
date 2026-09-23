import {
  Hero,
  Navigation,
  Timeline,
  Projects,
  Skills,
  Contact,
  Footer,
} from './components';

function App() {
  return (
    <div className="min-h-screen bg-primary-900">
      <Navigation />
      <main className="pt-16">
        <Hero />
        <Timeline />
        <Projects />
        <Skills />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
