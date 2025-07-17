import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const preloadRoutes = {
  '/stack': () => import('../pages/Stack'),
  '/contact': () => import('../pages/Contact'),
};

const links = [
  { to: '/stack', label: 'Stack' },
  { to: '/contact', label: 'Contact' },
];

const Header: React.FC = () => {
  return (
    <motion.header
      className="sticky top-0 z-50 flex justify-between items-center py-4 px-6 md:px-10 border-b border-neutral-800 bg-black/70 backdrop-blur-lg shadow-sm"
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.4 }}
    >
  <Link
        to="/"
        className="text-white text-xl md:text-2xl font-bold tracking-tight hover:opacity-90 transition duration-200"
        style={{ fontFamily: `'JetBrains Mono', monospace` }}
      >
        Pavan 🦋
      </Link>

      <nav className="flex items-center space-x-4 md:space-x-6 text-sm font-medium">
        {links.map(({ to, label }) => (
          <Link
            key={to}
            to={to}
            className="relative text-neutral-400 hover:text-white transition duration-150 group"
            onMouseEnter={() => preloadRoutes[to]?.()}
          >
            {label}
            <span className="absolute left-0 -bottom-1 h-[2px] w-0 bg-white transition-all duration-300 group-hover:w-full" />
          </Link>
        ))}
      </nav>
    </motion.header>
  );
};

export default Header;
