import React from 'react';
import Header from '@/components/Header';

export default function Stack() {
  return (
    <div className="min-h-screen bg-black text-white max-w-2xl mx-auto px-4 md:px-0">
      <Header />
      <article className="space-y-6 text-sm leading-relaxed">
        <h1 className="text-3xl font-bold mb-4">My Stack</h1>
        <section className="space-y-5">
          <p>
            This is my carefully crafted TypeScript stack — built for speed, reliability, and maintainability. 
            It empowers me to deliver scalable, type-safe applications with confidence.
          </p>

          <section>
            <h2 className="text-xl font-semibold mb-2">1. Framework (Next.js + React)</h2>
            <p className="mb-2">
              I leverage <a href="https://nextjs.org" target="_blank" rel="noopener noreferrer" className="underline">Next.js 14</a> and <a href="https://reactjs.org" target="_blank" rel="noopener noreferrer" className="underline">React</a> for full-stack applications with optimal performance. Next.js's hybrid static & server rendering fits perfectly with my TypeScript-first approach.
            </p>
            <p className="mb-2">
              TypeScript is integral — I enforce strict typing across client and server to eliminate runtime bugs early.
            </p>
            <p className="mb-1">For data and forms, I combine:</p>
            <ul className="list-disc list-inside mb-3 space-y-0.5">
              <li><a href="https://react.dev/learn/react-server-components" target="_blank" rel="noopener noreferrer" className="underline">React Server Components</a> to optimize rendering</li>
              <li><a href="https://trpc.io" target="_blank" rel="noopener noreferrer" className="underline">tRPC</a> or <a href="https://tanstack.com/query/latest" target="_blank" rel="noopener noreferrer" className="underline">TanStack Query</a> for type-safe data fetching</li>
              <li><a href="https://nextjs.org/docs/app/building-your-application/routing/server-actions" target="_blank" rel="noopener noreferrer" className="underline">Server Actions</a> combined with <a href="https://zod.dev" target="_blank" rel="noopener noreferrer" className="underline">Zod</a> for validation and schema enforcement</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-2">2. Styling (Tailwind CSS + shadcn/ui)</h2>
            <p className="mb-2">
              Styling is powered by <a href="https://tailwindcss.com" target="_blank" rel="noopener noreferrer" className="underline">Tailwind CSS</a>, which keeps my UI consistent and scalable with utility-first classes.
            </p>
            <p>
              For accessible, customizable components, I rely on <a href="https://ui.shadcn.com" target="_blank" rel="noopener noreferrer" className="underline">shadcn/ui</a>, built on <a href="https://www.radix-ui.com" target="_blank" rel="noopener noreferrer" className="underline">Radix UI</a>.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-2">3. Database (PostgreSQL + Drizzle)</h2>
            <p className="mb-2">
              I use <a href="https://www.postgresql.org" target="_blank" rel="noopener noreferrer" className="underline">PostgreSQL</a> for reliable relational storage. With <a href="https://orm.drizzle.team" target="_blank" rel="noopener noreferrer" className="underline">Drizzle ORM</a>, I write fully typed queries combining SQL expressiveness and TypeScript safety.
            </p>
            <p>
              Schema management and migrations are easy using <a href="https://studio.drizzle.team" target="_blank" rel="noopener noreferrer" className="underline">Drizzle Studio</a> and <a href="https://kit.drizzle.team" target="_blank" rel="noopener noreferrer" className="underline">Drizzle Kit</a>.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-2">4. API & Backend (tRPC + Edge Functions)</h2>
            <p className="mb-2">
              I architect APIs with <a href="https://trpc.io" target="_blank" rel="noopener noreferrer" className="underline">tRPC</a> for seamless type-safety between front and back ends.
            </p>
            <p>
              Deployment leverages <a href="https://vercel.com" target="_blank" rel="noopener noreferrer" className="underline">Vercel</a> or <a href="https://cloudflare.com" target="_blank" rel="noopener noreferrer" className="underline">Cloudflare</a> Edge Functions or serverless infrastructure depending on scale.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-2">5. Tooling (Inspired by Cal.com)</h2>
            <p className="mb-2">My tooling reflects efficient developer workflows:</p>
            <ul className="list-disc list-inside space-y-0.5">
              <li><a href="https://bun.sh" target="_blank" rel="noopener noreferrer" className="underline">Bun</a> or <a href="https://turbo.build/pack" target="_blank" rel="noopener noreferrer" className="underline">Turbopack</a> for blazing-fast builds</li>
              <li><a href="https://zod.dev" target="_blank" rel="noopener noreferrer" className="underline">Zod</a> for runtime schema validation</li>
              <li><a href="https://vitejs.dev" target="_blank" rel="noopener noreferrer" className="underline">Vite</a> for non-Next.js projects</li>
              <li><a href="https://prettier.io" target="_blank" rel="noopener noreferrer" className="underline">Prettier</a> + <a href="https://eslint.org" target="_blank" rel="noopener noreferrer" className="underline">ESLint</a> to maintain clean, consistent code</li>
              <li><a href="https://pnpm.io" target="_blank" rel="noopener noreferrer" className="underline">PNPM</a> or <a href="https://yarnpkg.com" target="_blank" rel="noopener noreferrer" className="underline">Yarn</a> for dependency management</li>
              <li><a href="https://turbo.build/repo" target="_blank" rel="noopener noreferrer" className="underline">Turborepo</a> to manage monorepos with ease</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-2">6. AI & Speed</h2>
            <p>
              I leverage AI tools like <a href="https://v0.dev" target="_blank" rel="noopener noreferrer" className="underline">v0.dev</a> and <a href="https://cursor.so" target="_blank" rel="noopener noreferrer" className="underline">Cursor</a> to accelerate development. Human judgment remains critical to review AI-generated code.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-2">7. My Coding Habits</h2>
            <ul className="list-disc list-inside space-y-0.5">
              <li>I prefer <code>let</code> for variable flexibility when necessary</li>
              <li>I favor larger, cohesive files over fragmented micro-components</li>
              <li>Early copy/paste is pragmatic — I avoid premature abstraction</li>
              <li>Logic is tightly coupled with UI for clarity and ease of maintenance</li>
            </ul>
          </section>
        </section>
      </article>
    </div>
  );
}
