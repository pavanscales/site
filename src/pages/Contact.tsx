
import React from 'react';
import Header from '../components/Header';

const Contact = () => {
  return (
    <div className="min-h-screen bg-black text-white max-w-2xl mx-auto px-4 md:px-0">
      <Header />
      <main className="py-8">
        <h1 className="text-2xl font-bold mb-6">Contact</h1>
        <p className="mb-4">Feel free to reach out through any of these channels:</p>
        <ul className="space-y-2">
          <li>
            <span className="text-gray-400">Email:</span>{' '}
            <a href="mailto:hello@example.com">hello@example.com</a>
          </li>
          <li>
            <span className="text-gray-400">Twitter:</span>{' '}
            <a href="https://twitter.com/username" target="_blank" rel="noopener noreferrer">
              @username
            </a>
          </li>
          <li>
            <span className="text-gray-400">GitHub:</span>{' '}
            <a href="https://github.com/username" target="_blank" rel="noopener noreferrer">
              github.com/username
            </a>
          </li>
        </ul>
      </main>
    </div>
  );
};

export default Contact;
