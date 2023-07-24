export const Header = (): JSX.Element => {
  return (
    <header data-testid="header" className="flex gap-4 items-start bg-black absolute top-0 w-full">
      <div className="flex items-center gap-x-2 w-full py-6 px-2 lg:px-10 2xl:px-44">
        <img alt="seat-logo" className="h-auto w-48" src="https://code.seat/images/ui/seat-code-logo.svg" />
      </div>
    </header>
  );
};
