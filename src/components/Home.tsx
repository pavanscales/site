import React from 'react';

type Project = {
  title: string;
  desc: string;
  url: string;
  label: string;
};

const projects: Project[] = [
  {
    title: 'no fluff',
    desc: 'platform connecting devs with real-world, high-leverage problems.',
    url: 'https://nofluff.vercel.app',
    label: '[site]',
  },
  {
    title: 'jpeg encoder',
    desc: 'ultra-fast JPEG encoder built in pure JavaScript.',
    url: 'https://github.com/pavanscales/jpeg.encoder',
    label: '[code]',
  },
  {
    title: 'alumni.meet',
    desc: 'SIH Hackathon winner. bridges alumni and freshers via smart matchmaking.',
    url: 'https://github.com/pavanscales/random',
    label: '[code]',
  },
];

const ProjectItem: React.FC<Project> = ({ title, desc, url, label }) => (
  <li>
    <strong>{title}</strong> — {desc}{' '}
    <a href={url} className="ml-1 font-medium underline" target="_blank" rel="noreferrer">
      {label}
    </a>
  </li>
);

const Home: React.FC = () => (
  <div className="space-y-5">
    <h1 className="text-xl font-semibold">ceo @m0.dev, @rizzmegle</h1>

    <p>
      Full-stack engineer & low-level systems hacker. I architect performant infra, custom runtimes,
      and internal dev tools. Focused on clean abstractions, extreme efficiency, and zero noise.
    </p>

    <p>
      Power tools: Vim, Unix philosophy, low-level APIs. I don’t just build UIs — I ship resilient systems.
    </p>

    <p>
      Hacker @{' '}
      <a
        href="https://cal.com"
        className="font-medium underline"
        target="_blank"
        rel="noreferrer"
      >
        cal.com
      </a>
      . Currently engineering a custom JS runtime, lean React server framework, RPC layer, and edge-native infra.
    </p>

    <section>
      <p className="font-medium">Projects I've built:</p>
      <ul className="list-disc list-inside space-y-2 ml-4">
        {projects.map((project) => (
          <ProjectItem key={project.title} {...project} />
        ))}
      </ul>
    </section>

    <p className="text-sm text-gray-600">
      GitHub:{' '}
      <a
        href="https://github.com/pavanscales"
        className="font-medium underline"
        target="_blank"
        rel="noreferrer"
      >
        @pavanscales
      </a>
    </p>
  </div>
);

export default Home;
