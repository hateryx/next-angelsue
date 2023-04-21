import { NavBar, Hero, Shop } from "@/components/landing";

function HomePage(props) {
  return (
    <div className="bg-white">
      <NavBar />
      <Hero />
      <Shop />
    </div>
  );
}

export default HomePage;
