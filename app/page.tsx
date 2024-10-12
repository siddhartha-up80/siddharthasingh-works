import DockFooter from "@/components/main/dock-footer";
import { HeroContent } from "@/components/sections/HeroContent";
import { AuroraBackground } from "@/components/ui/aurora-background";
import CanvasCursor from "@/components/ui/canvas-cursor";

export default function Home() {
  return (
    <div className="min-h-screen flex justify-center items-center w-full">
      <AuroraBackground className="">
        <HeroContent />
      </AuroraBackground>
      <CanvasCursor />

      <div className="md:fixed md:bottom-0 fixed bottom-[10vh] left-5 md:left-0 w-full z-[100]">
        <DockFooter />
      </div>
    </div>
  );
}
