import React from 'react';
import { Link } from 'react-router-dom';

const links = [
  { to: '/stack', label: 'stack' },
  { to: '/contact', label: 'contact' },
];

const Header = () => (
  <header className="flex justify-between items-center py-7 px-3 md:px-0">
    <div>
      <Link to="/" className="text-white hover:text-white no-underline font-bold">
        PAVAN
      </Link>
    </div>
    <nav>
      <ul className="flex items-center text-white">
        {links.map(({ to, label }, i) => (
          <li key={to} className="flex items-center">
            {i > 0 && <span className="mx-2 text-gray-400 select-none">/</span>}
            <Link to={to} className="hover:text-white no-underline">
              {label}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  </header>
);

export default Header;
