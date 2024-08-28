import Team from './sections/Team';
import CompanyHistory from './sections/CompanyHistory';
import Fleet from './sections/Fleet';
import Contact from './sections/Contact';
import ValuesAndCommitment from './sections/ValuesAndCommitment';

const About = () => {
  return (
    <div className="">
      {/* Header */}
      <header className="bg-blue-600 text-white p-6  mb-8">
        <h1 className="text-4xl font-bold text-center">About Us</h1>
      </header>

      <CompanyHistory />
      <Team />
      <Fleet />
      <ValuesAndCommitment />
      <Contact />
    </div>
  );
};

export default About;
