import ScrollProgress from './components/ScrollProgress';
import Navbar   from './components/Navbar';
import Hero     from './components/Hero';
import About    from './components/About';
import Features from './components/Features';
import Speakers from './components/Speakers';
import Schedule from './components/Schedule';
import Partners from './components/Partners';
import Contact  from './components/Contact';
import Footer   from './components/Footer';

export default function App() {
  return (
    <div style={{ minHeight:'100vh', background:'#05100a', position:'relative' }}>
      {/* Ambient background orbs */}
      <div className="scene" aria-hidden="true">
        <div className="orb orb-1"/>
        <div className="orb orb-2"/>
        <div className="orb orb-3"/>
      </div>

      {/* Noise grain layer */}
      <div className="grain" aria-hidden="true"/>

      <ScrollProgress/>
      <Navbar/>
      <main>
        <Hero/>
        <About    id="about"/>
        <Features id="features"/>
        <Speakers id="speakers"/>
        <Schedule id="schedule"/>
        <Partners id="partners"/>
        <Contact  id="contact"/>
      </main>
      <Footer/>
    </div>
  );
}
