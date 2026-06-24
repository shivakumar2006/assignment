import { useEffect, useMemo, useState } from "react";
import DishCard from "../components/dishCard";
import { getDishes, toggleDish } from "../services/dishApi";

const Dashboard = () => {
  const [dishes, setDishes] = useState([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState("");

  const fetchDishes = async () => {
    try {
      const response = await getDishes();
      setDishes(response.data);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchDishes();

    const interval = setInterval(() => {
        fetchDishes();
    }, 5000);

    return () => clearInterval(interval)
  }, []);

  const handleToggle = async (id) => {
    try {
      await toggleDish(id);
      fetchDishes();
    } catch (error) {
      console.log(error);
    }
  };

  const filteredDishes = useMemo(() => {
    return dishes.filter((dish) =>
      dish.dishName
        .toLowerCase()
        .includes(search.toLowerCase())
    );
  }, [dishes, search]);

  const publishedCount = dishes.filter(
    (dish) => dish.isPublished
  ).length;

  const unpublishedCount =
    dishes.length - publishedCount;

  if (loading) {
    return (
      <div className="h-screen bg-[#070B14] flex flex-col items-center justify-center text-white">
        <div className="h-16 w-16 rounded-full border-4 border-orange-500 border-t-transparent animate-spin" />
        <h2 className="mt-6 text-xl font-semibold">
          Loading Dashboard...
        </h2>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#070B14] text-white relative overflow-hidden">

      {/* Background Glow */}
      <div className="fixed top-0 left-0 w-[500px] h-[500px] bg-orange-500/20 blur-[200px]" />
      <div className="fixed bottom-0 right-0 w-[500px] h-[500px] bg-purple-500/20 blur-[200px]" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 py-10">

        {/* Hero Section */}
        <div className="relative overflow-hidden rounded-[40px] border border-white/10 bg-white/5 backdrop-blur-xl p-10">

          <div className="absolute top-0 right-0 w-80 h-80 bg-orange-500/20 rounded-full blur-[120px]" />

          <div className="relative z-10">
            <span className="px-4 py-2 rounded-full bg-orange-500/20 text-orange-300 text-sm">
              🍽️ Nosh Admin Dashboard
            </span>

            <h1 className="mt-6 text-5xl md:text-7xl font-black leading-tight">
              Manage Your
              <span className="block bg-gradient-to-r from-orange-400 via-red-500 to-pink-500 bg-clip-text text-transparent">
                Restaurant Dishes
              </span>
            </h1>

            <p className="mt-5 text-slate-300 max-w-2xl text-lg">
              Publish, unpublish and manage dishes in
              real-time through a modern dashboard.
            </p>
          </div>
        </div>

        {/* Stats */}
        <div className="grid md:grid-cols-3 gap-6 mt-10">

          <div className="rounded-3xl bg-gradient-to-br from-blue-500 to-cyan-500 p-[1px]">
            <div className="bg-[#0B1220] rounded-3xl p-6">
              <p className="text-slate-400">
                Total Dishes
              </p>
              <h2 className="text-5xl font-black mt-3">
                {dishes.length}
              </h2>
            </div>
          </div>

          <div className="rounded-3xl bg-gradient-to-br from-green-500 to-emerald-500 p-[1px]">
            <div className="bg-[#0B1220] rounded-3xl p-6">
              <p className="text-slate-400">
                Published
              </p>
              <h2 className="text-5xl font-black mt-3 text-green-400">
                {publishedCount}
              </h2>
            </div>
          </div>

          <div className="rounded-3xl bg-gradient-to-br from-red-500 to-pink-500 p-[1px]">
            <div className="bg-[#0B1220] rounded-3xl p-6">
              <p className="text-slate-400">
                Unpublished
              </p>
              <h2 className="text-5xl font-black mt-3 text-red-400">
                {unpublishedCount}
              </h2>
            </div>
          </div>

        </div>

        {/* Search */}
        <div className="mt-10">
          <input
            type="text"
            placeholder="🔍 Search dishes..."
            value={search}
            onChange={(e) =>
              setSearch(e.target.value)
            }
            className="w-full bg-white/5 border border-white/10 rounded-2xl px-5 py-4 outline-none focus:border-orange-500 transition"
          />
        </div>

        {/* Header */}
        <div className="mt-10 flex items-center justify-between">
          <h2 className="text-3xl font-bold">
            All Dishes
          </h2>

          <span className="text-slate-400">
            {filteredDishes.length} Dishes Found
          </span>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-8 pb-10">
          {filteredDishes.map((dish) => (
            <DishCard
              key={dish.dishId}
              dish={dish}
              onToggle={handleToggle}
            />
          ))}
        </div>

      </div>
    </div>
  );
};

export default Dashboard;