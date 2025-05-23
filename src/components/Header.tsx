import React from 'react';
import { Link } from 'react-router-dom';

const links = [
  { to: '/blog', label: 'blog' },
  { to: '/contact', label: 'contact' },
];

const Header = () => (
  <header className="flex justify-between items-center py-8 px-4 md:px-0">
    <div>
      <Link to="/" className="text-white hover:text-white no-underline font-bold">
        pawan
      </Link>
    </div>
    <nav>
      <ul className="flex items-center space-x-4 text-white">
        {links.map(({ to, label }, i) => (
          <React.Fragment key={to}>
            {i > 0 && <li>/</li>}
            <li>
              <Link to={to} className="hover:text-white no-underline">
                {label}
              </Link>
            </li>
          </React.Fragment>
        ))}
      </ul>
    </nav>
  </header>
);

export default Header;
