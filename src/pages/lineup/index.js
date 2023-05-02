import { NavBar, Footer } from "@/components/landing";
import MainLineUp from "@/components/lineups/MainLineUp.js";
import { useRouter } from "next/router";

function LineUpPage() {
  const router = useRouter();
  const { id } = router.query;

  return (
    <div>
      <NavBar />
      <MainLineUp product={id} />
      <Footer />
    </div>
  );
}

export default LineUpPage;
