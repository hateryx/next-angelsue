import { NavBar, Footer } from "@/components/landing";
import MainShopping from "@/components/shopping/MainShopping.js";
import { useRouter } from "next/router";

function ShoppingPage() {
  const router = useRouter();
  const { id } = router.query;

  return (
    <div>
      <NavBar />
      <MainShopping product={id} />
      <Footer />
    </div>
  );
}

export default ShoppingPage;
