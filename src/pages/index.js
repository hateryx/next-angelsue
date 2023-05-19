import { NavBar, Hero, Shop, Footer } from "@/components/landing";

function HomePage() {
  return (
    <div className="bg-white overflow-hidden">
      <NavBar />
      <Hero />
      <Shop />
      <Footer />
    </div>
  );
}

export default HomePage;
