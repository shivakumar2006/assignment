const DishCard = ({ dish, onToggle }) => {
  return (
    <div className="group relative overflow-hidden rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl transition-all duration-500 hover:-translate-y-2 hover:border-orange-500/30 hover:shadow-2xl hover:shadow-orange-500/10">

      {/* Glow Effect */}
      <div className="absolute inset-0 bg-gradient-to-br from-orange-500/0 via-orange-500/0 to-pink-500/0 group-hover:from-orange-500/10 group-hover:to-pink-500/10 transition-all duration-500" />

      {/* Image */}
      <div className="relative overflow-hidden">
        <img
          src={dish.imageUrl}
          alt={dish.dishName}
          className="h-64 w-full object-cover transition-transform duration-700 group-hover:scale-110"
        />

        {/* Status Badge */}
        <div className="absolute top-4 right-4">
          {dish.isPublished ? (
            <span className="px-3 py-1 rounded-full bg-green-500/90 text-white text-xs font-semibold shadow-lg">
              ● Published
            </span>
          ) : (
            <span className="px-3 py-1 rounded-full bg-red-500/90 text-white text-xs font-semibold shadow-lg">
              ● Unpublished
            </span>
          )}
        </div>

        {/* Dish ID */}
        <div className="absolute top-4 left-4">
          <span className="bg-black/60 backdrop-blur-md px-3 py-1 rounded-full text-xs text-white">
            Dish #{dish.dishId}
          </span>
        </div>
      </div>

      {/* Content */}
      <div className="relative p-6">

        <h2 className="text-2xl font-bold text-white">
          {dish.dishName}
        </h2>

        <p className="text-slate-400 mt-2 text-sm">
          Manage publication status for this dish.
        </p>

        {/* Divider */}
        <div className="h-px bg-white/10 my-5" />

        {/* Footer */}
        <div className="flex items-center justify-between">

          <div>
            <p className="text-xs text-slate-500">
              Current Status
            </p>

            <p
              className={`font-semibold ${
                dish.isPublished
                  ? "text-green-400"
                  : "text-red-400"
              }`}
            >
              {dish.isPublished
                ? "Published"
                : "Unpublished"}
            </p>
          </div>

          <button
            onClick={() => onToggle(dish.dishId)}
            className={`px-5 py-3 rounded-xl font-semibold transition-all duration-300 ${
              dish.isPublished
                ? "bg-red-500 hover:bg-red-600"
                : "bg-green-500 hover:bg-green-600"
            }`}
          >
            {dish.isPublished
              ? "Unpublish"
              : "Publish"}
          </button>

        </div>
      </div>
    </div>
  );
};

export default DishCard;