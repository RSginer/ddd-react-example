interface CarsTableHeaderProps {
  label: string;
}

export const CarsTableHeader = ({ label }: CarsTableHeaderProps) => (
  <div className="flex items-center justify-center font-bold bg-slate-200 p-4">{label}</div>
);
