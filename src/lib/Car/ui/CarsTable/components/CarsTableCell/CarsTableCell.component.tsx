interface CarsTableCellProps {
  label: string | JSX.Element;
  dataTestId?: string;
}

export const CarsTableCell = ({ label, dataTestId }: CarsTableCellProps) => (
  <div data-testid={dataTestId} className="flex col-span-2 items-center justify-center p-4">
    {label}
  </div>
);
