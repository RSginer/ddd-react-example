export const Header = (): JSX.Element => {
  return (
    <header
      data-testid="header"
      className="flex gap-4 items-center bg-black absolute top-0 w-full px-2 xl:px-10 2xl:px-44"
    >
      <div className="container mx-auto sm:grid sm:grid-cols-1 grid-cols-2 items-center w-full justify-between">
        <div className="flex items-center gap-x-2 w-full py-2">
          <img
            alt="profile"
            className="w-14 h-14 rounded-full border-white border-2"
            src="https://media.licdn.com/dms/image/C4D03AQGWb71MyL-GeA/profile-displayphoto-shrink_400_400/0/1644942516555?e=1692835200&v=beta&t=Uf8P7HuaUPsSPDZzedDcqyZ8JRAWElx-4h9d7rPcmiE"
          />
          <span className="text-white py-4">Rubén Soler</span>
          <span className="text-xl text-gray-400 py-4">&</span>
          <img alt="seat-logo" className="h-auto w-48" src="https://code.seat/images/ui/seat-code-logo.svg" />
        </div>
        <div className="flex justify-start w-full">
          <div className="md:px-8 sm:px-0 justify-center flex box-borde box-border"></div>
        </div>
      </div>
    </header>
  );
};
