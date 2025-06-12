import React from 'react';
import Header from '@/components/Header';

const Stack: React.FC = () => {
  return (
    <div className="min-h-screen bg-black text-white max-w-2xl mx-auto px-4 font-sans space-y-6 text-base leading-relaxed">
      <Header />

      <h1 className="text-3xl font-bold mt-6">My Stack</h1>

      <p>
        This is the stack I’ve iterated on over time — built for speed, type safety, DX, and long-term maintainability.
        Every tool here is chosen with intention to ship fast and scale confidently.
      </p>

      {[
        {
          title: '1. Framework (Next.js + React)',
          items: [
            '<a href="https://nextjs.org">Next.js 14</a> — edge-first fullstack framework with App Router + RSC.',
            'React 19 enables <code>use</code> and <code>useActionState</code>.',
            'Server Components by default — reduces hydration + bundle size.',
            'Validation with <a href="https://zod.dev">Zod</a> inside Server Actions.',
            '<a href="https://trpc.io">tRPC</a> enables typesafe client-server contracts.',
          ],
        },
        {
          title: '2. Styling (Tailwind CSS + shadcn/ui)',
          items: [
            '<a href="https://tailwindcss.com">Tailwind CSS</a> — utility-first + AI pair ready.',
            '<a href="https://ui.shadcn.com">shadcn/ui</a> with <a href="https://www.radix-ui.com">Radix UI</a> — accessible and composable.',
            'Dark mode enabled, mobile-first by default.',
          ],
        },
        {
          title: '3. Database (PostgreSQL + Drizzle)',
          items: [
            'PostgreSQL — battle-tested SQL with JSON & concurrency.',
            '<a href="https://orm.drizzle.team">Drizzle ORM</a> — typed schema-as-code.',
            '<a href="https://kit.drizzle.team">Drizzle Kit</a> — auto-generates schema, migrations, and types.',
            'Scoped, typed DB access in tRPC routes.',
          ],
        },
        {
          title: '4. API & Backend (tRPC + Edge)',
          items: [
            'tRPC removes OpenAPI/GraphQL overhead for TS teams.',
            'Runs on <a href="https://vercel.com">Vercel</a> and <a href="https://cloudflare.com">Cloudflare</a> Edge — fast cold starts.',
          ],
        },
        {
          title: '5. Tooling & Infra (DX-oriented)',
          items: [
            '<a href="https://bun.sh">Bun</a> — ultra-fast test runner + PM + bundler.',
            '<a href="https://turbo.build/repo">Turborepo</a> — intelligent monorepo pipelines.',
            '<a href="https://prettier.io">Prettier</a> + <a href="https://eslint.org">ESLint</a> — teamwide code consistency.',
            '<a href="https://vitejs.dev">Vite</a> — great for microtools and demos.',
          ],
        },
        {
          title: '6. AI Tools (Velocity Boosters)',
          items: [
            '<a href="https://v0.dev">v0.dev</a> — generate UI → Tailwind-ready output.',
            '<a href="https://cursor.so">Cursor</a> + GitHub Copilot — speed + structure.',
          ],
        },
        {
          title: '7. Testing Strategy',
          items: [
            '<a href="https://playwright.dev">Playwright</a> — robust e2e testing.',
            '<a href="https://jestjs.io">Jest</a> — unit + API testing.',
          ],
        },
        {
          title: '8. CI/CD',
          items: [
            '<a href="https://vercel.com">Vercel</a> — instant rollbacks & previews.',
            '<a href="https://github.com/features/actions">GitHub Actions</a> — type/lint/test/deploy pipeline.',
          ],
        },
        {
          title: '9. Platforms',
          items: [
            'Next.js (web-first)',
            '<a href="https://expo.dev">Expo</a> + React Native (mobile)',
            'File conventions: <code>.web.tsx</code> / <code>.native.tsx</code> for cross-platform.',
          ],
        },
        {
          title: '10. Coding Philosophy',
          items: [
            'State: `let` > `const` — future flexibility.',
            'Avoid early abstraction — repeat then refactor.',
            'Colocate logic with components when practical.',
            'Optimize for readability over cleverness.',
          ],
        },
      ].map((section, idx) => (
        <section key={idx}>
          <h2 className="font-medium">{section.title}</h2>
          <ul className="list-disc list-inside space-y-1 ml-4">
            {section.items.map((item, i) => (
              <li key={i} dangerouslySetInnerHTML={{ __html: item }} />
            ))}
          </ul>
        </section>
      ))}

      <footer className="pt-10 pb-20 text-center text-sm text-neutral-400">
        Built by{' '}
        <a
          href="https://github.com/pavanscales"
          target="_blank"
          rel="noopener noreferrer"
          className="underline"
        >
          pavanscales
        </a>{' '}
        — always exploring new frontiers ⚡
      </footer>
    </div>
  );
};

export default Stack;
