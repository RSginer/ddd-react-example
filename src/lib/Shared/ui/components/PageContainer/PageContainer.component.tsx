import { PropsWithChildren } from 'react';

interface PageContainerProps {
  header: JSX.Element;
}

export const PageContainer = ({ header, children }: PropsWithChildren<PageContainerProps>): JSX.Element => {
  return (
    <>
      {header}
      <main className="px-10 py-28">{children}</main>;
    </>
  );
};
