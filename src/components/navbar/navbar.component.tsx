import { useState } from 'react';
import Link from 'next/link';
import styles from './navbar.module.css';

const Navbar = () => {
  const [menuState, setMenuState] = useState<boolean>(false);

  const handleClick = () => setMenuState(!menuState);
  return (
    <header className={`${styles.navbar_header} fixed top-0 left-0 right-0`}>
      <nav className='container flex justify-between mx-auto px-4 py-4 relative'>
        <div>
          <Link href='/'>LTC</Link>
        </div>
        <div className={`${styles.hamburger} md:hidden`} onClick={handleClick}>
          <span></span>
          <span></span>
          <span></span>
        </div>
        <ul
          className={
            menuState
              ? `${styles.navbar_menu} ${styles.show_navbar_menu} flex flex-col fixed md:static md:flex-row lg:flex-row  right-0 items-end md:items-start`
              : `${styles.navbar_menu}  flex flex-col fixed md:static md:flex-row lg:flex-row  right-0`
          }
        >
          <li className='mr-4  pt-20 md:pt-0'>
            <Link
              className='text-4xl md:text-base'
              href='/'
              onClick={handleClick}
            >
              home
            </Link>
          </li>
          <li className='mr-4 text-right pt-9 md:pt-0'>
            <Link
              className='text-4xl md:text-base'
              href='/learn-html'
              onClick={handleClick}
            >
              html
            </Link>
          </li>
          <li className='mr-4 text-right  pt-8 md:pt-0'>
            <Link
              className='text-4xl md:text-base'
              href='/css'
              onClick={handleClick}
            >
              css
            </Link>
          </li>
          <li className='mr-4 text-right  pt-8 md:pt-0'>
            <Link
              className='text-4xl md:text-base'
              href='/js'
              onClick={handleClick}
            >
              js
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
