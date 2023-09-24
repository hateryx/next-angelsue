import { useState, useEffect } from "react";
import Link from "next/link";
import { useRouter } from "next/router";

function NavBar() {
  const [isMenuOpen, setIsMenuOpen] = useState();
  const [prevScrollPos, setPrevScrollPos] = useState(0);

  const [isFixed, setIsFixed] = useState(true);
  const [isHidden, setIsHidden] = useState(false);

  function clickHandler() {
    if (isMenuOpen === undefined) {
      setIsMenuOpen(true);
    } else {
      setIsMenuOpen(!isMenuOpen);
    }
  }

  useEffect(() => {
    function scrollHandler() {
      const currentScrollPos = window.pageYOffset;
      const isScrollingUp = currentScrollPos < prevScrollPos;

      setIsFixed(currentScrollPos >= 0);

      if (isScrollingUp) {
        setIsHidden(false);
      } else {
        setIsHidden(true);
      }

      setPrevScrollPos(currentScrollPos);
    }

    window.addEventListener("scroll", scrollHandler);

    return () => {
      window.removeEventListener("scroll", scrollHandler);
    };
  }, [prevScrollPos]);

  const router = useRouter();
  const { id } = router.query;

  return (
    <div className="relative h-24 md:h-28 mb-2 bg-white max-w-screen w-full">
      <div
        className={`${
          isFixed ? "fixed top-0 inset-x-0 bg-white shadow-md" : ""
        }' ${
          isHidden ? "-translate-y-full" : "translate-y-0"
        } transition-all duration-300 ease-in-out z-10 border-b-2 border-pink-600`}
      >
        <nav className="flex justify-between flex-wrap py-3">
          <div className="flex space-x-20 transition-all duration-700 ease-in-out">
            <button onClick={clickHandler}>
              <img
                src="assets/navbar.jpg"
                alt="icon"
                className="ml-6 object-cover h-20 sm:h-20 md:w-20 md:h-24 lg:w-20 lg:h-24"
              ></img>
            </button>
            <div className="hidden md:flex space-x-8 font-semibold items-center ml-auto">
              <Link href="/#products">
                <button className="tracking-tighter">Products</button>
              </Link>
              <Link href="/#about">
                <button className="tracking-tighter">About</button>
              </Link>
            </div>
          </div>
          <div className="flex items-center">
            <Link href="/">
              <img
                src="assets/nav-ital.png"
                alt="icon"
                className="justify-end mx-5 object-cover h-10 md:h-12"
              ></img>
            </Link>
          </div>
        </nav>
        <div
          className={`${
            isMenuOpen ? "translate-x-0" : "-translate-x-full"
          } z-2 transition-all duration-500 ease-in-out`}
        >
          <div
            className={`${
              isMenuOpen ? "py-16 h-screen" : "h-0"
            } transition-all duration-500 ease-in-out flex flex-col space-y-12 items-start pl-10`}
          >
            <div className="flex space-x-8 font-semibold">
              <Link
                href="/#products"
                className="tracking-widest text-2xl text-fuchsia-500"
              >
                Products
              </Link>
              <div
                className="space-y-6 text-fuchsia-800"
                onClick={clickHandler}
              >
                <div>
                  <Link href="/lineup?id=magic-cream" replace={true}>
                    Magic Cream
                  </Link>
                </div>
                <div>
                  <Link href="/lineup?id=parfum" replace={true}>
                    Parfum
                  </Link>
                </div>
                <div>
                  <Link href="/lineup?id=pimple-cream">
                    <span>Pimple Cream</span>
                  </Link>
                </div>
                <div>
                  <Link href="/lineup?id=lotion">
                    <span>Lotion</span>
                  </Link>
                </div>
              </div>
            </div>
            <div>
              <Link
                href="/#about"
                className="tracking-widest text-2xl font-semibold text-fuchsia-500"
              >
                About
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default NavBar;
