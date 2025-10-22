/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_SENTRY_DSN?: string;
  readonly VITE_SOURCEMAPS?: string;
  readonly VITE_SENTRY_ENV?: string;
  readonly MODE?: string;
  // add other VITE_ env vars as needed
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
