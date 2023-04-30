import { Fragment, useState, useEffect } from "react";

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

  return (
    <div>
      <div
        className={`${
          isFixed ? "fixed top-0 inset-x-0 z-20 bg-white shadow-md" : ""
        } ${
          isHidden ? "-translate-y-full" : "translate-y-0"
        } transition-all duration-300 ease-in-out`}
      >
        <nav className="flex justify-between flex-wrap py-3">
          <div className="flex space-x-20">
            <button onClick={clickHandler}>
              <img
                src="assets/navbar.jpg"
                alt="icon"
                className="ml-6 object-cover h-20 sm:h-20 md:w-14 md:h-14 lg:w-20 lg:h-24"
              ></img>
            </button>
            <div className="hidden md:flex space-x-8 font-semibold items-center ml-auto">
              <button className="tracking-tighter">Shop</button>
              <button className="tracking-tighter">Products</button>
              <button className="tracking-tighter">About</button>
            </div>
          </div>
          <div className="flex items-center">
            <img
              src="assets/nav-ital.png"
              alt="icon"
              className="justify-end mx-5 object-cover h-10 md:h-12"
            ></img>
          </div>
        </nav>
        <div
          className={`${
            isMenuOpen ? "translate-x-0" : "-translate-x-full"
          } z-2 transition-all duration-500 ease-in-out`}
        >
          <ul
            className={`${
              isMenuOpen ? "py-16 h-screen" : "h-0"
            } transition-all duration-500 ease-in-out flex flex-col space-y-12 items-start pl-10`}
          >
            <li>
              <a className="tracking-widest text-2xl font-semibold text-fuchsia-500">
                Shop
              </a>
            </li>
            <li>
              <a className="tracking-widest text-2xl font-semibold text-fuchsia-500">
                Products
              </a>
            </li>
            <li>
              <a className="tracking-widest text-2xl font-semibold text-fuchsia-500">
                About
              </a>
            </li>
            <li>
              <a className="tracking-widest text-2xl font-semibold text-fuchsia-500">
                Contact Us
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default NavBar;
