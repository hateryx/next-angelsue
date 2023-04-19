import { Fragment } from "react";

function NavBar() {
  return (
    <Fragment>
      <div className="fixed top-0 inset-x-0 z-10 bg-white shadow p-6">
        <nav className="flex space-x-20">
          <button>
            <img
              src="assets/navbar.jpg"
              alt="icon"
              className="ml-5 object-cover w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 lg:w-20 lg:h-24"
            ></img>
          </button>
          <div className="flex space-x-8 font-semibold items-center">
            <button className="tracking-tighter">Shop</button>
            <button className="tracking-tighter">Products</button>
            <button className="tracking-tighter">About</button>
          </div>
        </nav>
      </div>
      <div className="block p-10"></div>
    </Fragment>
  );
}

export default NavBar;
