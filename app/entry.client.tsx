import { StrictMode, startTransition } from 'react';
import { hydrateRoot } from 'react-dom/client';
import { HydratedRouter } from 'react-router/dom';

// Client entry: hydrate the server-rendered document (the root route owns
// <html>, so we hydrate `document`, not a #root div). Replaces the old
// createRoot(...).render(<App/>) in src/main.tsx.
startTransition(() => {
  hydrateRoot(
    document,
    <StrictMode>
      <HydratedRouter />
    </StrictMode>,
  );
});
