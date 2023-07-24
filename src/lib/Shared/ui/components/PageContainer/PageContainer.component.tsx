import { PropsWithChildren } from 'react';

interface PageContainerProps {
  header: JSX.Element;
}

export const PageContainer = ({ header, children }: PropsWithChildren<PageContainerProps>): JSX.Element => {
  return (
    <>
      {header}
      <main className="px-2 lg:px-10 2xl:px-44 py-28 container mx-auto">{children}</main>;
    </>
  );
};
