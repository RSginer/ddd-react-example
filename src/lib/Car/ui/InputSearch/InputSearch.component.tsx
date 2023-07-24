import { ChangeEvent } from 'react';

export interface InputSearchProps {
  onChange: (ev: ChangeEvent<HTMLInputElement>) => void;
}

export const InputSearch = ({ onChange }: InputSearchProps) => (
  <div className="flex">
    <input
      onChange={onChange}
      className="w-full h-10 mb-4 border p-4 focus:border-0 rounded-l"
      placeholder="Search car..."
      title="search"
      type="text"
    />
  </div>
);
