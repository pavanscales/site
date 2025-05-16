Got it — here’s a simple, no-fluff README template for your Next.js + Tailwind + Vercel project:

````markdown
# Portfolio Site

## Tech Stack
- Next.js
- Tailwind CSS
- Vercel (Deployment & Analytics)
- TypeScript
- React Query
- Radix UI

## Requirements
- Node.js v18.17+
- pnpm

## Setup
```bash
git clone https://github.com/lpavanscales/pavanscales.git
cd pavansacles
pnpm install
pnpm run delete # Remove personal notes
pnpm dev
````

## Optional Database

Create `.env.local` with:

```
POSTGRES_URL=your_database_url
```

Create `redirects` table:

```sql
CREATE TABLE redirects (
  id SERIAL PRIMARY KEY,
  source VARCHAR(255) NOT NULL,
  destination VARCHAR(255) NOT NULL,
  permanent BOOLEAN NOT NULL
);
```

## Scripts

* `pnpm dev` - run dev server
* `pnpm build` - build app
* `pnpm preview` - preview production build
* `pnpm run delete` - remove personal data
* `pnpm lint` - run linter

## Deployment

Deploy on Vercel by connecting repo.

---

Use for inspiration only. Credit appreciated.

```

