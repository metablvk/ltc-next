import { ReactNode } from 'react';
import Navbar from '../navbar/navbar.component';

type Props = {
  children: ReactNode;
};

const Layout = ({ children }: Props) => {
  return (
    <>
      <Navbar />
      <main className='container mx-auto px-4 pt-14'>{children}</main>
    </>
  );
};

export default Layout;
