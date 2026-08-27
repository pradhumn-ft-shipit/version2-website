import { type RouteConfig, index } from '@react-router/dev/routes';

// Walking-skeleton route tree (ticket 001): only the homepage is wired through
// the framework router. Ticket 003 ports the full route list from src/App.tsx
// (marketing, ICP/solutions/legal, blog/news :slug routes, and every redirect).
export default [index('routes/home.tsx')] satisfies RouteConfig;
