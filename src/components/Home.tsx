import React, { useMemo } from 'react';

type Project = {
  title: string;
  desc: string;
  url: string;
  label: string;
};

const Home: React.FC = () => {
  const projects: Project[] = useMemo(
    () => [
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
    ],
    []
  );

  return (
    <div className="space-y-5">
      <h1 className="text-xl font-semibold">ceo  @m0.dev , @rizzmegle</h1>

      <p>
        Full-stack engineer & low-level systems hacker.
        <br />
        I architect performant infra, custom runtimes, and internal dev tools.
        <br />
        My focus: clean abstractions, extreme efficiency, zero noise.
      </p>

      <p>
        Power tools: Vim, Unix philosophy, low-level APIs.
        <br />
        I don’t just build UIs — I ship resilient systems.
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
        .
        <br />
        Currently engineering a custom JavaScript runtime, a lean React server framework,
        <br />
        an RPC transport layer, and edge-native infra — built to scale beyond limits.
      </p>

      <section>
        <p className="font-medium">Projects I've built:</p>
        <ul className="list-disc list-inside space-y-2 ml-4">
          {projects.map(({ title, desc, url, label }) => (
            <li key={title}>
              <strong>{title}</strong> — {desc}{' '}
              <a
                href={url}
                className="ml-1 font-medium underline"
                target="_blank"
                rel="noreferrer"
              >
                {label}
              </a>
            </li>
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
};

export default Home;
