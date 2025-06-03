import React from 'react';

type Project = {
  title: string;
  desc: string;
  url: string;
  label: string;
};
const projects: Project[] = [
  { title: 'no fluff', desc: 'connects devs to real problems worth solving.', url: 'https://nofluff.vercel.app', label: '[site]' },
  { title: 'jpeg encoder', desc: 'fast JPEG encoder in pure JS.', url: 'https://github.com/pavanscales/jpeg.encoder', label: '[code]' },
  { title: 'alumni.meet', desc: 'alumni–freshers connect platform. SIH hackathon.', url: 'https://github.com/pavanscales/random', label: '[code]' },
];
const Home: React.FC = () => (
  <div className="space-y-5">
    <h1 className="text-xl font-semibold">ceo @m0.dev, @rizzmegle</h1>
    <p>
      full-stack engineer. low-level systems programmer.<br />
      building high-performance infra, runtimes, and internal tools.<br />
      focus: clean code, max efficiency, zero bloat.
    </p>
    <p>
      tools: Vim, Unix, LL APIs. shipping systems, not just UIs.
    </p>
    <p>
      oss{' '}
      <a href="https://cal.com" className="font-medium underline Q" target="_blank" rel="noreferrer">
        @calcom
      </a>{' '}
      .<br />
      architecting a custom JS runtime, lightweight React server framework,<br />
      RPC transport layer, and edge-native infra. engineered for scale.
    </p>
    <p className="font-medium">things i've built:</p>
    <ul className="list-disc list-inside space-y-2 ml-4">
      {projects.map(({ title, desc, url, label }) => (
        <li key={title}>
          <strong>{title}</strong> — {desc}{' '}
          <a href={url} className="ml-1 font-medium" target="_blank" rel="noreferrer">
            {label}
          </a>
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
