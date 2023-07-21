interface CarsTableHeaderProps {
  prop: string;
}

export const CarsTableHeader = ({ prop }: CarsTableHeaderProps) => (
  <div className="flex items-center justify-center font-bold bg-slate-200 p-4">{prop}</div>
);
