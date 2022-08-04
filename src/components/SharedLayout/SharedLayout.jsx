import { Outlet, NavLink } from 'react-router-dom';
import { Suspense, useState } from 'react';
import styled from 'styled-components';
import s from './SharedLayout.module.css';

const Link = styled(NavLink)`
  border-radius: 4px;
  text-decoration: none;
  color: black;
  font-weight: 500;
  font-size: 17px;
  margin-right: 20px;
  display: flex;

  align-items: center;

  &.active {
    color: #3498db;
  }
`;

export default function SharedLayout() {
  const [status, setStatus] = useState('');

  return (
    <>
      <header className={s.header}>
        <nav className={s.navigation}>
          <Link to="/" className={s.navLink}>
            Home
          </Link>
          <Link to="/movies" className={s.navLink}>
            Movies
          </Link>
        </nav>
      </header>
      <Suspense fallback={null}>
        <Outlet context={[status, setStatus]}/>
      </Suspense>
    </>
  );
}
