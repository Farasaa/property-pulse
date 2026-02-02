 import InfoBoxes from "../../components/InfoBoxes";
 import Hero from "../../components/Hero";
 import HomeProperties from "../../components/HomeProperties";
 import connectDB from "../../config/database";

export default function HomePage() {
 
  return (
    <div>
      <Hero />
      <InfoBoxes />
      <HomeProperties />
    </div>
  );
}
