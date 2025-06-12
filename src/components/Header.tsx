import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const links = [
  { to: '/stack', label: 'Stack' },
  { to: '/contact', label: 'Contact' },
];

const Header: React.FC = () => {
  return (
    <motion.header
      className="flex justify-between items-center py-5 px-4 md:px-8 bg-black"
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.4 }}
    >
      <Link
        to="/"
        className="text-white text-2xl font-bold tracking-wide hover:opacity-90 transition duration-200"
        style={{ fontFamily: `'JetBrains Mono', monospace` }}
      >
        Pavan
      </Link>

      <nav className="flex items-center space-x-4">
        {links.map(({ to, label }, idx) => (
          <span key={to} className="flex items-center">
            {idx > 0 && (
              <span className="text-gray-500 select-none">/</span>
            )}
            <Link
              to={to}
              className="ml-2 text-white hover:opacity-80 transition duration-150 font-medium text-sm"
            >
              {label}
            </Link>
          </span>
        ))}
      </nav>
    </motion.header>
  );
};

export default Header;
