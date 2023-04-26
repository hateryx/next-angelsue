import { Fragment, useState, useEffect } from "react";

function NavBar() {
  const [isCollapsed, setIsCollapsed] = useState(true);
  const [prevScrollPos, setPrevScrollPos] = useState(0);

  const [isFixed, setIsFixed] = useState(true);
  const [isHidden, setIsHidden] = useState(false);
  const [timeoutId, setTimeoutId] = useState(null);

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

      // if (timeoutId) {
      //   clearTimeout(timeoutId);
      // }

      // // setTimeoutId(
      // //   setTimeout(() => {
      // //     setIsHidden(false);
      // //   }, 1000)
      // // );
    }

    window.addEventListener("scroll", scrollHandler);

    return () => {
      window.removeEventListener("scroll", scrollHandler);
      // clearTimeout(timeoutId);
    };
  }, [prevScrollPos]);

  return (
    <Fragment>
      <div
        className={`${
          isFixed ? "fixed py-2 top-0 inset-x-0 z-40 bg-white shadow-md" : ""
        } ${
          isHidden ? "-translate-y-full" : "translate-y-0"
        } transition-all duration-300 ease-in-out`}
      >
        <nav className="flex justify-between flex-wrap">
          <div className="flex space-x-20">
            <button>
              <img
                src="assets/navbar.jpg"
                alt="icon"
                className="ml-5 object-cover w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 lg:w-20 lg:h-24"
              ></img>
            </button>
            <div className="flex space-x-8 font-semibold items-center ml-auto">
              <button className="tracking-tighter">Shop</button>
              <button className="tracking-tighter">Products</button>
              <button className="tracking-tighter">About</button>
            </div>
          </div>
          <div className="flex items-center">
            <img
              src="assets/nav-ital.png"
              alt="icon"
              className="justify-end mr-5 object-cover h-12"
            ></img>
          </div>
        </nav>
      </div>
      {/* <div className="mt-10"></div> */}
    </Fragment>
  );
}

export default NavBar;
