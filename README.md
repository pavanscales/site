
````markdown
# Pavanscales Portfolio Site
## Tech Stack
- Next.js  
- Tailwind CSS  
- Vercel (Deployment & Analytics)  
- TypeScript  
- React Query  
- Radix UI  
## Requirements
- Node.js v18.17+  
- pnpm package manager  
## Setup & Run Locally
```bash
git clone https://github.com/lpavanscales/pavanscales.git
cd pavanscales
pnpm install
pnpm run delete   # Optional: Remove personal notes
pnpm dev          # Start dev server
````

## Optional Database Setup

Create a `.env.local` file in the root with:

```
POSTGRES_URL=your_database_url
```

Create the redirects table in your Postgres database:

```sql
CREATE TABLE redirects (
  id SERIAL PRIMARY KEY,
  source VARCHAR(255) NOT NULL,
  destination VARCHAR(255) NOT NULL,
  permanent BOOLEAN NOT NULL
);
```

## Available Scripts

* `pnpm dev` — Start development server
* `pnpm build` — Build production-ready app
* `pnpm preview` — Preview production build locally
* `pnpm run delete` — Remove personal data
* `pnpm lint` — Run ESLint

## Deployment

Deploy easily on [Vercel](https://vercel.com/) by connecting your GitHub repository.
Use this project for inspiration only. Credit to the original author is appreciated.

```

Just copy this whole block into your README.md — done!
```
