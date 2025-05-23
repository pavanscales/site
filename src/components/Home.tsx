import React from 'react';

const projects = [
  {
    title: 'no fluff',
    desc: 'Connects devs to real problems worth solving.',
    url: 'https://nofluff.vercel.app',
    label: '[site]',
  },
  {
    title: 'jpeg encoder',
    desc: 'Wrote a fast JPEG encoder in pure JS.',
    url: 'https://github.com/pawanscales/jpeg_encoder',
    label: '[code]',
  },
  {
    title: 'tool-lingo',
    desc: 'Curated, no-bloat, browser-based tools.',
    url: 'https://tool-lingo.vercel.app',
    label: '[site]',
  },
  // Removed alumni.meet until URL is fixed
];

const Home = () => (
  <main className="max-w-xl mx-auto p-6 space-y-8 font-sans text-gray-900">
    <h1 className="text-3xl font-extrabold">Pawan Pediredla</h1>

    <section className="space-y-4 text-gray-700 leading-relaxed">
      <p>Focus on core engineering. No fluff. Just systems, tools, and performance.</p>
      <p>Stack: TypeScript, Next.js, Golang, Rust, Node.js.</p>
      <p>Tools: Vim, Unix, low-level APIs.</p>
      <p>Currently building my own JS runtime.</p>
    </section>

    <section>
      <h2 className="text-xl font-semibold mb-3">Things I've worked on:</h2>
      <ul className="list-disc list-inside space-y-3 text-gray-800">
        {projects.map(({ title, desc, url, label }) => (
          <li key={title}>
            <strong>{title}</strong> — {desc}{' '}
            <a
              href={url}
              className="ml-2 font-medium text-blue-600 hover:underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              {label}
            </a>
          </li>
        ))}
      </ul>
    </section>

    <footer className="text-sm text-gray-500">
      github:{' '}
      <a
        href="https://github.com/pavanscales"
        className="font-medium text-blue-600 hover:underline"
        target="_blank"
        rel="noopener noreferrer"
      >
        pavanscales
      </a>
    </footer>
  </main>
);

export default Home;
