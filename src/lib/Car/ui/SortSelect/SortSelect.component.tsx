import { ChangeEvent } from 'react';

interface SortSelectProps {
  onSortPropertyChange: (e: ChangeEvent<HTMLSelectElement>) => void;
  onSortOrderChange: (e: ChangeEvent<HTMLSelectElement>) => void;
}

export const SortSelect = ({ onSortPropertyChange, onSortOrderChange }: SortSelectProps) => (
  <div className="flex gap-4 ml-1">
    <div className="flex mb-4 cursor-pointer">
      <label className="underline mr-1" htmlFor="sort">
        Sort by:
      </label>
      <select defaultValue="regNumber" id="sort" title="Sort by" onChange={onSortPropertyChange}>
        <option value="regNumber">License plate</option>
        <option value="name">Model</option>
      </select>
    </div>
    <div className="flex mb-4 cursor-pointer">
      <label className="underline mr-1" htmlFor="sort">
        Order:
      </label>
      <select defaultValue="asc" id="order" title="Order" onChange={onSortOrderChange}>
        <option value="asc">Ascendent</option>
        <option value="desc">Descendent</option>
      </select>
    </div>
  </div>
);
