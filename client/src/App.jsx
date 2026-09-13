import Header from "./components/Header";
import Hero from "./components/Hero";
import Problem from "./components/Problem";
import TargetUsers from "./components/TargetUsers";
import Solution from "./components/Solution";
import HowItWorks from "./components/HowItWorks";
import Demo from "./components/Demo";
import Differentiation from "./components/Differentiation";
import Impact from "./components/Impact";
import BusinessModel from "./components/BusinessModel";
import Partnerships from "./components/Partnerships";
import Team from "./components/Team";
import FinalCTA from "./components/FinalCTA";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import "./App.css";

export default function App() {
  return (
    <div className="site">
      <Header />
      <main>
        <Hero />
        <Problem />
        <TargetUsers />
        <Solution />
        <HowItWorks />
        <Demo />
        <Differentiation />
        <Impact />
        <BusinessModel />
        <Partnerships />
        <Team />
        <FinalCTA />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
