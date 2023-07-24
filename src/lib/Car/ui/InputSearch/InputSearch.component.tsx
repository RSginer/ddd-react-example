export const InputSearch = () => (
  <div className="flex">
    <input
      className="w-full h-10 mb-4 border p-4 focus:border-0 rounded-l"
      placeholder="Search car..."
      title="search"
      type="text"
    />
    <button className="bg-black text-white px-2 h-10 rounded-r hover:text-black hover:bg-white hover:border">
      Search
    </button>
  </div>
);
