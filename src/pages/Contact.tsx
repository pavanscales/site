import React from 'react';
import Header from '../components/Header';

const contacts = [
  { label: 'Email', href: 'mailto:pawanpediredla@gmail.com', text: 'pawanpediredla@gmail.com' },
  { label: 'Twitter', href: 'https://x.com/red1exc', text: 'red', external: true },
  { label: 'GitHub', href: 'https://github.com/pavanscales', text: 'github.com/pavanscales', external: true },
];
const Contact = () => (
  <div className="min-h-screen bg-black text-white max-w-2xl mx-auto px-4 md:px-0">
    <Header />
    <main className="py-8">
      <h1 className="text-2xl font-bold mb-6">Contact</h1>
      <p className="mb-4">Feel free to reach out through any of these channels:</p>
      <ul className="space-y-2">
        {contacts.map(({ label, href, text, external }) => (
          <li key={href}>
            <span className="text-gray-400">{label}:</span>{' '}
            <a
              href={href}
              {...(external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
              className="underline"
              >
              {text}
            </a>
          </li>
        ))}
      </ul>
    </main>
  </div>
);

export default Contact;
