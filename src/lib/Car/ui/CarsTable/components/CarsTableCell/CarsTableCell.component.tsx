interface CarsTableCellProps {
  label: string | JSX.Element;
}

export const CarsTableCell = ({ label }: CarsTableCellProps) => (
  <div className="flex col-span-2 items-center justify-center p-4">{label}</div>
);
