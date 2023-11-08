export const Header = (): JSX.Element => {
  return (
    <header data-testid="header" className="flex gap-4 items-start bg-black absolute top-0 w-full">
      <div className="flex items-center gap-x-2 w-full py-6 px-2 lg:px-10 2xl:px-44">
        <img className="w-12 h-12 rounded-full" alt="logo" src="https://avatars.githubusercontent.com/u/14939307?v=4" />
        <h1 className="text-white">RSGiner - React DDD Example</h1>
      </div>
    </header>
  );
};
