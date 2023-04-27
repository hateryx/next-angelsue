function Footer() {
  return (
    <div>
      <section id="contact" className="relative z-8">
        <div className="border-t-2 py-12 flex flex-reverse items-start md:grid">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="lg:text-center items-center">
              <p className="mt-2 text-xl font-light tracking-tight">
                Let's Connect
              </p>
              <div className="mt-4 flex max-w-2xl text-xl font-light justify-content text-black lg:mx-auto">
                <p>About Us</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <div className="border-red-600 border-t-4 flex justify-between">
        <span className="ml-5 text-sm p-3 tracking-tighter font-semibold">
          © Angel Sue Marketing 2023
        </span>
        <a
          className="mr-5 text-sm p-3 tracking-tighter font-semibold"
          href="https://hateryx-space.vercel.app/"
        >
          Powered by Hateryx™
        </a>
      </div>
    </div>
  );
}

export default Footer;
