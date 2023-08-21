import HeroContent from "@/components/HeroContent";
import HeroImage from "@/components/HeroImage";
import HeroData from '@/content/HeroContent.json';

const Hero = () => {
  return (
    <section className="flex sm:flex-row flex-col w-full justify-between px-10">
        <HeroContent data={HeroData} />
        <HeroImage data={HeroData} />
    </section>
  );
};

export default Hero;

