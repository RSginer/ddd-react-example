interface CarsTableHeaderProps {
  label: string;
}

export const CarsTableHeader = ({ label }: CarsTableHeaderProps) => (
  <div className="flex text-ellipsis break-all items-center justify-center font-bold bg-gray-50 p-4 text-xs rounded">
    {label}
  </div>
);
