
import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className="flex justify-between items-center py-8 px-4 md:px-0">
      <div>
        <Link to="/" className="text-white hover:text-white no-underline font-bold">
          JC
        </Link>
      </div>
      <nav>
        <ul className="flex space-x-4">
          <li>
            <Link to="/blog" className="text-white hover:text-white no-underline">
              blog
            </Link>
          </li>
          <li>/</li>
          <li>
            <Link to="/contact" className="text-white hover:text-white no-underline">
              contact
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
