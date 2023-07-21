interface CarsTableCellProps {
  prop: string;
}

export const CarsTableCell = ({ prop }: CarsTableCellProps) => (
  <div className="flex items-center justify-center bg-slate-50">{prop}</div>
);
