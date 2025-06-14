import React from 'react';
import Header from '@/components/Header';

const SectionTitle = ({ children }: { children: React.ReactNode }) => (
  <p className="font-medium">{children}</p>
);

const List = ({ children }: { children: React.ReactNode }) => (
  <ul className="list-disc list-inside space-y-1 ml-4">{children}</ul>
);

const Stack: React.FC = () => {
  return (
    <div
      className="min-h-screen bg-black text-white max-w-2xl mx-auto px-4 md:px-0 space-y-6 text-base leading-relaxed"
      style={{ fontFamily: `'JetBrains Mono', monospace` }}
    >
      <Header />

      <h1 className="text-3xl font-bold mt-6">My Stack</h1>

      <p>
        This is the stack I’ve refined over time — optimized for speed, type safety, DX, and long-term maintainability.
        Every tool here is intentionally chosen to ship fast and scale confidently.
      </p>

      {/* Framework */}
      <section>
        <SectionTitle>1. Framework (Next.js + React):</SectionTitle>
        <List>
          <li>
            <a href="https://nextjs.org" target="_blank" rel="noreferrer" className="underline">
              Next.js 14
            </a>{' '}
            — edge-first fullstack framework with App Router + RSC.
          </li>
          <li>
            React 19: <code>use</code>, <code>useActionState</code> — async and form UX.
          </li>
          <li>
            Default to <strong>Server Components</strong> for leaner bundles and faster hydration.
          </li>
          <li>
            Validation via{' '}
            <a href="https://zod.dev" target="_blank" rel="noreferrer" className="underline">
              Zod
            </a>{' '}
            inside Server Actions — fully typed and colocated.
          </li>
          <li>
            <a href="https://trpc.io" target="_blank" rel="noreferrer" className="underline">
              tRPC
            </a>{' '}
            enables zero-API-schema TS-based communication.
          </li>
        </List>
      </section>

      {/* Styling */}
      <section>
        <SectionTitle>2. Styling (Tailwind CSS + shadcn/ui):</SectionTitle>
        <List>
          <li>
            <a href="https://tailwindcss.com" className="underline" target="_blank" rel="noreferrer">
              Tailwind CSS
            </a>{' '}
            — utility-first, AI-friendly, mobile-first.
          </li>
          <li>
            <a href="https://ui.shadcn.com" className="underline" target="_blank" rel="noreferrer">
              shadcn/ui
            </a>{' '}
            +{' '}
            <a href="https://www.radix-ui.com" className="underline" target="_blank" rel="noreferrer">
              Radix UI
            </a>{' '}
            — accessible, composable components.
          </li>
          <li>Theme-ready and dark-mode enabled by default.</li>
        </List>
      </section>

      {/* Database */}
      <section>
        <SectionTitle>3. Database (PostgreSQL + Drizzle):</SectionTitle>
        <List>
          <li>PostgreSQL — powerful SQL with JSON, concurrency, and indexing.</li>
          <li>
            <a href="https://orm.drizzle.team" className="underline" target="_blank" rel="noreferrer">
              Drizzle ORM
            </a>{' '}
            — type-safe, schema-as-code.
          </li>
          <li>
            <a href="https://kit.drizzle.team" className="underline" target="_blank" rel="noreferrer">
              Drizzle Kit
            </a>{' '}
            — generates schema, migrations, types.
          </li>
          <li>Typed DB access through scoped tRPC routes.</li>
        </List>
      </section>

      {/* Backend */}
      <section>
        <SectionTitle>4. API & Backend (tRPC + Edge):</SectionTitle>
        <List>
          <li>No need for OpenAPI/GraphQL — tRPC handles everything in TS.</li>
          <li>
            Deployed on{' '}
            <a href="https://vercel.com" className="underline" target="_blank" rel="noreferrer">
              Vercel
            </a>{' '}
            &{' '}
            <a href="https://cloudflare.com" className="underline" target="_blank" rel="noreferrer">
              Cloudflare
            </a>{' '}
            Edge — sub-50ms cold starts.
          </li>
        </List>
      </section>

      {/* Tooling */}
      <section>
        <SectionTitle>5. Tooling & Infra (DX-oriented):</SectionTitle>
        <List>
          <li>
            <a href="https://bun.sh" className="underline" target="_blank" rel="noreferrer">
              Bun
            </a>{' '}
            — fast dev experience: runner, bundler, PM.
          </li>
          <li>
            <a href="https://turbo.build/repo" className="underline" target="_blank" rel="noreferrer">
              Turborepo
            </a>{' '}
            — efficient monorepo with smart caching.
          </li>
          <li>
            <a href="https://prettier.io" className="underline" target="_blank" rel="noreferrer">
              Prettier
            </a>{' '}
            +{' '}
            <a href="https://eslint.org" className="underline" target="_blank" rel="noreferrer">
              ESLint
            </a>{' '}
            — automated code quality.
          </li>
          <li>
            <a href="https://vitejs.dev" className="underline" target="_blank" rel="noreferrer">
              Vite
            </a>{' '}
            — perfect for prototyping and tools.
          </li>
        </List>
      </section>

      {/* AI */}
      <section>
        <SectionTitle>6. AI Tools (Velocity Boosters):</SectionTitle>
        <List>
          <li>
            <a href="https://v0.dev" className="underline" target="_blank" rel="noreferrer">
              v0.dev
            </a>{' '}
            — AI-generated Tailwind UIs.
          </li>
          <li>
            <a href="https://cursor.so" className="underline" target="_blank" rel="noreferrer">
              Cursor
            </a>{' '}
            + Copilot — top-tier AI pair-programming.
          </li>
        </List>
      </section>

      {/* Testing */}
      <section>
        <SectionTitle>7. Testing Strategy:</SectionTitle>
        <List>
          <li>
            <a href="https://playwright.dev" className="underline" target="_blank" rel="noreferrer">
              Playwright
            </a>{' '}
            — E2E testing.
          </li>
          <li>
            <a href="https://jestjs.io" className="underline" target="_blank" rel="noreferrer">
              Jest
            </a>{' '}
            — unit + logic testing.
          </li>
        </List>
      </section>

      {/* CI/CD */}
      <section>
        <SectionTitle>8. CI/CD:</SectionTitle>
        <List>
          <li>
            Deploys via{' '}
            <a href="https://vercel.com" className="underline" target="_blank" rel="noreferrer">
              Vercel
            </a>{' '}
            — instant previews and rollbacks.
          </li>
          <li>
            <a href="https://github.com/features/actions" className="underline" target="_blank" rel="noreferrer">
              GitHub Actions
            </a>{' '}
            — for linting, type-checks, testing, deploys.
          </li>
        </List>
      </section>

      {/* Platforms */}
      <section>
        <SectionTitle>9. Platforms:</SectionTitle>
        <List>
          <li>Next.js (Web-first)</li>
          <li>
            <a href="https://expo.dev" className="underline" target="_blank" rel="noreferrer">
              Expo
            </a>{' '}
            + React Native (Mobile)
          </li>
          <li>
            File conventions: <code>.web.tsx</code> / <code>.native.tsx</code> — platform split.
          </li>
        </List>
      </section>

      {/* Coding Philosophy */}
      <section>
        <SectionTitle>10. Coding Philosophy:</SectionTitle>
        <List>
          <li>
            Use <code>let</code> over <code>const</code> for evolvability.
          </li>
          <li>Repeat before you abstract.</li>
          <li>Co-locate logic near usage when possible.</li>
          <li>Prioritize readability over cleverness.</li>
        </List>
      </section>

      <footer className="pt-10 pb-20 text-center text-sm text-neutral-400">
        Built by{' '}
        <a
          href="https://github.com/pavanscales"
          target="_blank"
          rel="noreferrer"
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
