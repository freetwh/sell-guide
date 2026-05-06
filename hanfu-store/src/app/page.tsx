import { Hero } from "@/components/sections/Hero";
import { Benefits } from "@/components/sections/Benefits";
import { SocialProof } from "@/components/sections/SocialProof";
import { FAQ } from "@/components/sections/FAQ";
import { OfferStack } from "@/components/sections/OfferStack";
import { FinalCTA } from "@/components/sections/FinalCTA";

export default function Home() {
  return (
    <main className="flex-1">
      <Hero />
      <Benefits />
      <SocialProof />
      <OfferStack />
      <FAQ />
      <FinalCTA />
    </main>
  );
}
