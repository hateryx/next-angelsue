function Footer() {
  return (
    <div>
      <section id="contact" className="relative z-8">
        <div className="border-t-2 py-12"></div>
      </section>
      <div className="border-red-600 border-t-4 flex justify-between">
        <span className="text-[0.6rem] md:text-sm p-3 tracking-tighter font-semibold">
          © Angel Sue Marketing 2023
        </span>
        <a
          className="text-[0.6rem] md:text-sm p-3 tracking-tighter font-semibold"
          href="https://hateryx-space.vercel.app/"
        >
          Powered by Hateryx™
        </a>
      </div>
    </div>
  );
}

export default Footer;
