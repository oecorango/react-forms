import { Link, Outlet } from 'react-router-dom';

export const Layout = (): JSX.Element => {
  const linkStyle =
    'text-lg p-2 border-2 rounded-lg hover:bg-teal-100 ease-linear transition-all';
  return (
    <>
      <header className="flex text-2xl items-center justify-between h-20">
        <Link className={linkStyle} to={'/form-uncontrolled'}>
          Uncontrolled Form
        </Link>
        <Link className={linkStyle} to={'/'}>
          To main page
        </Link>
        <Link className={linkStyle} to={'/form-controlled'}>
          Controlled Form
        </Link>
      </header>

      <main>
        <Outlet />
      </main>

      <footer className="flex items-center justify-center h-20">
        <p className="text-2xl">2023</p>
      </footer>
    </>
  );
};
