export const SortSelect = () => (
  <div className="flex gap-4">
    <div className="flex mb-4 cursor-pointer">
      <label className="underline mr-1" htmlFor="sort">
        Sort by:
      </label>
      <select id="sort" title="Sort by">
        <option>License plate</option>
        <option>Model</option>
      </select>
    </div>
    <div className="flex mb-4 cursor-pointer">
      <label className="underline mr-1" htmlFor="sort">
        Order:
      </label>
      <select id="order" title="Order">
        <option>Ascendent</option>
        <option>Descendent</option>
      </select>
    </div>
  </div>
);
