import { HeroContent } from "@/components/homeSection/HeroContent";
import { AuroraBackground } from "@/components/ui/aurora-background";

export default function Home() {
  return (
    <div className="min-h-screen w-full">
      <AuroraBackground className="w-full">
        <HeroContent />
      </AuroraBackground>
    </div>
  );
}
