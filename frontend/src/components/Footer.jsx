const Footer = () => {
  return (
    <footer className="border-t border-white/10 mt-20">
      <div className="max-w-7xl mx-auto px-6 py-8 flex flex-col md:flex-row justify-between items-center">

        <div>
          <h2 className="text-white font-semibold">
            Nosh Dish Dashboard
          </h2>

          <p className="text-slate-400 text-sm mt-1">
            Built for Full Stack Assignment
          </p>
        </div>

        <div className="mt-4 md:mt-0 text-sm text-slate-400">
          React • FastAPI • MongoDB • TailwindCSS
        </div>

      </div>
    </footer>
  );
};

export default Footer;