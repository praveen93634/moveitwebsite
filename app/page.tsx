import Hero from "@/components/hero";
import BackedByTIC from "@/components/backedbytic";
import WatchOurStory from "@/components/watchOurStory";
import EverythingDelivered from "@/components/everythingDelivered";
import YourDoorStep from "@/components/yourDoorStep";
import FAQ from "@/components/faq";
import Footer from "@/components/footer";
import Delivery from "@/components/delivery";

export default function Home() {
  return (
    <main className="min-h-screen bg-white flex flex-col items-center justify-start">
      <Hero />
      <BackedByTIC />
      <WatchOurStory />
      <EverythingDelivered />
      <YourDoorStep />
      <FAQ />
      <Delivery/>
      <Footer/>
    </main>
  );
}







