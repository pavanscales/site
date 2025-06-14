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
      className="sticky top-0 z-50 flex justify-between items-center py-4 px-6 md:px-10 border-b border-neutral-800 bg-black/80 backdrop-blur"
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.4 }}
    >
      <Link
        to="/"
        className="text-white text-2xl md:text-3xl font-extrabold tracking-tight hover:opacity-90 transition duration-200"
        style={{ fontFamily: `'JetBrains Mono', monospace` }}
      >
        Pavan
      </Link>

      <nav className="flex items-center space-x-4 md:space-x-6 text-sm font-medium text-neutral-400">
        {links.map(({ to, label }) => (
          <Link
            key={to}
            to={to}
            className="hover:text-white transition duration-150"
          >
            {label}
          </Link>
        ))}
      </nav>
    </motion.header>
  );
};

export default Header;
