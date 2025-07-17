import React from 'react';
import { Link } from 'react-router-dom';

const projects = [
  {
    name: 'building blocks',
    description: 'Clean, modern components. Copy-paste into your apps. Works with all React frameworks. Open Source. Free forever.',
    type: 'code',
    url: 'https://github.com/yourname/building-blocks',
  },
  {
    name: 'weekday',
    description: 'The Google Calendar alternative with AI features. Privacy-focused, client-first, and completely under your control.',
    type: 'site',
    url: 'https://weekday.yoursite.com',
  },
  {
    name: 'voidrsc',
    description: 'A full-stack framework from scratch, benchmarked faster than Next.js. Designed for edge-first modern apps.',
    type: 'code',
    url: 'https://github.com/yourname/voidrsc',
  },
  {
    name: 'jpeg encoder',
    description: 'Ultra-fast JPEG encoder built in pure JavaScript.',
    type: 'code',
    url: 'https://github.com/yourname/jpeg-encoder',
  },
  {
    name: 'alumni.meet',
    description: 'SIH Hackathon. Bridges alumni and freshers through smart matchmaking.',
    type: 'code',
    url: 'https://github.com/yourname/alumni-meet',
  },
  {
    name: 'no fluff',
    description: 'Platform connecting developers with real-world, high-leverage problems.',
    type: 'site',
    url: 'https://nofluff.dev',
  },
];

const SelectedProjects: React.FC = () => {
  return (
    <section className="py-16 px-6 md:px-10 bg-black text-white">
      <h2 className="text-3xl font-bold mb-10 tracking-tight">Selected Projects</h2>
      <div className="space-y-10">
        {projects.map(({ name, description, type, url }) => (
          <div key={name} className="group border-l-4 pl-4 border-blue-500 hover:border-white transition">
            <a
              href={url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-xl font-semibold hover:underline underline-offset-4"
            >
              {name} <span className="text-sm text-neutral-400">({type})</span>
            </a>
            <p className="text-neutral-400 mt-1">{description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default SelectedProjects;
