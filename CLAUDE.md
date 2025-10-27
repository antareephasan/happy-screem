# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a **Payload CMS v3** website template built with **Next.js 15 (App Router)** and **TypeScript**. It uses PostgreSQL as the database and includes a production-ready frontend with TailwindCSS and shadcn/ui components.

## Commands

### Development
```bash
pnpm dev                    # Start development server at http://localhost:3000
pnpm dev:prod              # Build and start production server locally
```

### Building & Production
```bash
pnpm build                 # Build for production (includes next-sitemap generation)
pnpm start                 # Start production server
```

### Database & Migrations
```bash
pnpm payload migrate:create  # Create new migration (required for Postgres schema changes)
pnpm payload migrate        # Run pending migrations on server
```

### Code Quality
```bash
pnpm lint                  # Run ESLint
pnpm lint:fix              # Run ESLint with auto-fix
```

### Testing
```bash
pnpm test                  # Run all tests (integration + e2e)
pnpm test:int              # Run integration tests with Vitest
pnpm test:e2e              # Run end-to-end tests with Playwright
```

### Type Generation
```bash
pnpm generate:types        # Generate TypeScript types from Payload config
pnpm generate:importmap    # Generate import map for Payload
```

## Architecture

### Application Structure

The codebase follows a **monorepo architecture** where frontend (Next.js) and backend (Payload CMS) coexist:

```
src/
├── app/
│   ├── (frontend)/        # Next.js App Router pages
│   │   ├── [slug]/        # Dynamic pages
│   │   ├── posts/         # Blog posts routes
│   │   ├── blogs/         # Blog listing pages
│   │   ├── courses/       # Course pages (custom addition)
│   │   └── search/        # Search functionality
│   └── (payload)/         # Payload admin panel routes
├── collections/           # Payload collections (data models)
│   ├── Pages/
│   ├── Posts/
│   ├── Courses/           # Custom collection addition
│   ├── Media.ts
│   ├── Categories.ts
│   └── Users/
├── blocks/                # Reusable Payload blocks (layout builder components)
├── components/            # React components
├── heros/                 # Hero block variations
├── hooks/                 # Payload hooks (data transformation, revalidation)
├── access/                # Payload access control functions
├── utilities/             # Helper functions
└── payload.config.ts      # Main Payload CMS configuration
```

### Key Concepts

**Payload CMS Collections**: The main data models are:
- `pages` - Dynamic pages with customizable layouts
- `posts` - Blog posts with hero images, excerpts, categories
- `courses` - Custom course content (addition to template)
- `media` - File uploads with image optimization
- `categories` - Taxonomy for organizing posts/courses
- `users` - Authentication and admin users

**Payload Globals**: Site-wide configuration:
- `Header` - Navigation menu data
- `Footer` - Footer content
- `GlobalCTA` - Reusable call-to-action sections
- `BlogOverview` - Blog listing page configuration
- `CourseOverview` - Course listing page configuration

**Layout Builder System**: Both Pages and Posts use a flexible block-based layout system. Blocks are defined in `/src/blocks/` and include:
- Content blocks (text, media, galleries)
- Interactive blocks (forms, CTAs, FAQs)
- Grid layouts (BlogGrid, DynamicBlogGrid, FeatureGrid)
- Structural blocks (TwoColumnLayout, Header, Team, Testimonials, PricingTable)

Each block has:
- `config.ts` - Payload field definitions
- `Component.tsx` - React frontend component
- Optional row labels and custom UI

### Database (PostgreSQL)

This project uses **Postgres with migrations**. Important notes:
- Schema changes require creating and running migrations
- Use `push: true` in development for automatic schema updates (local DB only)
- Use `push: false` in production to prevent accidental data loss
- Always create migrations before deploying schema changes

### Draft & Live Preview

Collections support:
- **Draft versions** with scheduled publishing
- **Live preview** - real-time preview while editing in admin panel
- **On-demand revalidation** - automatic Next.js cache clearing via hooks

Revalidation happens through `afterChange` hooks in collections:
- Pages: `src/collections/Pages/hooks/revalidatePage.ts`
- Posts: `src/collections/Posts/hooks/revalidatePost.ts`

### Frontend Rendering

- **Next.js App Router** with Server Components
- **Static generation** by default
- **On-demand revalidation** triggered by Payload hooks
- Caching disabled for Payload Cloud (uses Cloudflare CDN)

### Authentication & Access Control

- `authenticated` - Only logged-in users (create, update, delete)
- `authenticatedOrPublished` - Public can read published content, users can read drafts
- Access control defined in `src/access/`

### Testing

- **Integration tests**: `tests/int/` - Uses Vitest + jsdom
- **E2E tests**: `tests/e2e/` - Uses Playwright
- Tests run against development server (auto-started)

### Styling

- **TailwindCSS** with custom configuration
- **shadcn/ui components** (Radix UI primitives)
- **Relume UI** components for marketing layouts
- **Framer Motion** for animations
- Dark mode support

### Environment Variables

Required variables (see `.env.example`):
- `DATABASE_URI` - PostgreSQL connection string
- `PAYLOAD_SECRET` - JWT encryption key
- `NEXT_PUBLIC_SERVER_URL` - Public site URL (no trailing slash)
- `CRON_SECRET` - For scheduled jobs authentication
- `PREVIEW_SECRET` - For draft preview requests

## Development Workflow

1. **Schema Changes**: When modifying collection fields:
   - Make changes to collection config files
   - Run `pnpm payload migrate:create` to create migration
   - Commit migration files with your code changes
   - Run `pnpm payload migrate` on server before deploying

2. **Type Safety**: After schema changes, run `pnpm generate:types` to update `src/payload-types.ts`

3. **Adding New Blocks**:
   - Create block directory in `src/blocks/[BlockName]/`
   - Add `config.ts` with Payload field definitions
   - Add `Component.tsx` with React frontend implementation
   - Import and add to collections that should use the block

4. **Custom Routes**: Add new pages in `src/app/(frontend)/` following Next.js App Router conventions

5. **Testing Changes**: Run integration tests during development, e2e tests before deployment

## Important Notes

- **Node version**: Requires Node.js ^18.20.2 or >=20.9.0
- **Package manager**: Uses pnpm (version ^9 or ^10)
- **Sharp optimization**: Sharp is built from source for optimal image handling
- **Migration safety**: Never run `pnpm payload migrate:create` without understanding schema impact
- **Seeding**: Admin panel has "seed database" link (destructive - drops existing data)
