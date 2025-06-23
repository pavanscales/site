import React, { memo, useMemo } from 'react';
import Header from '../components/Header';

const Contact = () => {
  const contacts = useMemo(() => [
    {
      label: 'Email',
      href: 'mailto:pawanpediredla@gmail.com',
      text: 'pawanpediredla@gmail.com',
    },
    {
      label: 'Twitter',
      href: 'https://x.com/pavanscales',
      text: 'red',
      external: true,
    },
    {
      label: 'GitHub',
      href: 'https://github.com/pavanscales',
      text: 'github.com/pavanscales',
      external: true,
    },
  ], []);

  return (
    <div className="min-h-screen bg-black text-white">
      <div className="max-w-2xl mx-auto px-4 md:px-0">
        <Header />
        <main className="py-8">
          <h1 className="text-3xl font-bold mb-6">Contact</h1>
          <p className="mb-4 text-gray-300">
            Feel free to reach out through any of these channels:
          </p>
          <address className="not-italic">
            <ul className="space-y-3">
              {contacts.map(({ label, href, text, external }) => (
                <li key={href}>
                  <span className="text-gray-400">{label}:</span>{' '}
                  <a
                    href={href}
                    {...(external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
                    aria-label={`${label} link to ${text}`}
                    className="underline hover:text-blue-400 transition-colors duration-200"
                  >
                    {text}
                  </a>
                </li>
              ))}
            </ul>
          </address>
        </main>
      </div>
    </div>
  );
};

export default memo(Contact);
