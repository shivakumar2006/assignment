const Header = () => {
  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-[#070B14]/80 backdrop-blur-xl">
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">

        <div className="flex items-center gap-3">
          <div className="h-10 w-10 rounded-xl bg-gradient-to-r from-orange-500 to-red-500 flex items-center justify-center text-white font-bold">
            N
          </div>

          <div>
            <h1 className="font-bold text-lg text-white">
              Nosh Dashboard
            </h1>

            <p className="text-xs text-slate-400">
              Dish Management System
            </p>
          </div>
        </div>

        <div className="flex items-center gap-3">
          <div className="h-3 w-3 rounded-full bg-green-500 animate-pulse" />

          <span className="text-sm text-green-400">
            Live Updates
          </span>
        </div>

      </div>
    </header>
  );
};

export default Header;