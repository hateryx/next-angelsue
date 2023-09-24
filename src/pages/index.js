import { NavBar, Hero, Shop, Footer, MainHero } from "@/components/landing";

function HomePage() {
  return (
    <div className="bg-white overflow-hidden flex flex-col">
      <div className="relative">
        <NavBar />
        <MainHero />
      </div>
      <div className="relative">
        <Hero />
        <Shop />
      </div>
      <Footer />
    </div>
  );
}

export default HomePage;
