import { NavBar, Hero, Shop, Footer, MainHero } from "@/components/landing";

function HomePage() {
  return (
    <div className="bg-white overflow-hidden flex flex-col">
      <div className="relative">
        <NavBar />
        <MainHero />
      </div>

      <Hero />
      <Shop />

      <Footer />
    </div>
  );
}

export default HomePage;
