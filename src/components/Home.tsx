import React from 'react';

const projects = [
    { title: 'no fluff', desc: 'connects devs to real problems worth solving.', url: 'https://nofulff.vercel.app/', label: '[site]' },

  { title: 'jpeg encoder', desc: 'wrote a fast jpeg encoder in pure JS.', url: 'https://github.com/pawanscales/jpeg_encoder', label: '[code]' },
    { title: 'tool-lingo', desc: 'curated, no-bloat, browser-based tools.', url: 'https://tool-lingo.vercel.app/', label: '[site]' },
  { title: 'alumni.meet', desc: 'alumni–freshers connect platform, SIH hackathon', url: 'https://github.com/pawanscales/random', label: '[code]' },
];

const Home = () => (
  <div className="space-y-6">
    <h1 className="text-2xl font-bold">Pawan Pediredla</h1>

    <p>
      focus on core engineering. no fluff. just systems, tools, and performance.<br />
      stack: typescript, next.js, golang, rust, node.js.<br />
      tools: vim, unix, low-level apis.<br />
      currently building my own js runtime.
    </p>

    <p>things i've worked on:</p>

    <ul className="list-disc list-inside space-y-2 ml-4">
      {projects.map(({ title, desc, url, label }) => (
        <li key={title}>
          <strong>{title}</strong> — {desc}{' '}
          <a href={url} className="ml-1 font-medium" target="_blank" rel="noreferrer">{label}</a>
        </li>
      ))}
    </ul>

    <p className="text-sm text-gray-600">
      github:{' '}
      <a href="https://github.com/pavanscales" className="font-medium" target="_blank" rel="noreferrer">
        pavanscales
      </a>
    </p>
  </div>
);

export default Home;
