interface CarsTableCellProps {
  label: string;
}

export const CarsTableCell = ({ label }: CarsTableCellProps) => (
  <div className="flex items-center justify-center bg-slate-50">{label}</div>
);
