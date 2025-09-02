import { HeroSection } from "@/components/HeroSection";
import { FeatureSection } from "@/components/FeatureSection";
import { ThemeToggle } from "@/components/ThemeToggle";

const Index = () => {
  return (
    <>
      <ThemeToggle />
      <main className="min-h-screen">
        <HeroSection />
        <FeatureSection />
      </main>
    </>
  );
};

export default Index;
