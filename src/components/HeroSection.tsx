import heroBg from '../assets/hero-bg.png';

const HeroSection = () => {
  return (
    <section className="relative h-screen w-full overflow-hidden">
      <img
        className="absolute inset-0 h-full w-full object-cover"
        src={heroBg}
        alt=""
        aria-hidden="true"
      />
    </section>
  );
};

export default HeroSection;
