import React from 'react';
import { Link } from 'react-router-dom';

const links = [
  { to: '/stack', label: 'stack' },
  { to: '/contact', label: 'contact' },
];

const Header: React.FC = () => (
  <header className="flex justify-between items-center py-7 px-3 md:px-0">
    <Link to="/" className="text-white hover:text-white font-bold no-underline">
      PAVAN
    </Link>

    <nav>
      <ul className="flex items-center text-white">
        {links.map(({ to, label }, idx) => (
          <li key={to} className="flex items-center">
            {idx > 0 && <span className="mx-2 text-gray-400 select-none">/</span>}
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
