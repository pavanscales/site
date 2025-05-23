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
  {
    title: 'alumni.meet',
    desc: 'Alumni–freshers connect platform, SIH hackathon',
    url: 'https://github.com/pawanscales/random',
    label: '[code]',
  },
];

const Home = () => (
  <main className="max-w-xl mx-auto p-6 space-y-6 font-sans text-black">
    <h1 className="text-2xl font-bold">Pawan Pediredla</h1>

    <p>
      Focus on core engineering. No fluff. Just systems, tools, and performance.
    </p>
    <p>Stack: TypeScript, Next.js, Golang, Rust, Node.js.</p>
    <p>Tools: Vim, Unix, low-level APIs.</p>

    <p>Things I've worked on:</p>

    <ul className="list-disc list-inside space-y-2 ml-4">
      {projects.map(({ title, desc, url, label }) => (
        <li key={title}>
          <strong>{title}</strong> — {desc}{' '}
          <a
            href={url}
            className="ml-1 font-medium underline"
            target="_blank"
            rel="noopener noreferrer"
            style={{ color: 'black' }}
          >
            {label}
          </a>
        </li>
      ))}
    </ul>

    <p className="text-sm">
      github:{' '}
      <a
        href="https://github.com/pavanscales"
        className="font-medium underline"
        target="_blank"
        rel="noopener noreferrer"
        style={{ color: 'black' }}
      >
        pavanscales
      </a>
    </p>
  </main>
);

export default Home;
