import type { App } from 'vue';

export function initSentry(app: App) {
    const SENTRY_DSN = import.meta.env.VITE_SENTRY_DSN || '';
    const SENTRY_ENV = import.meta.env.VITE_SENTRY_ENV || (process.env.NODE_ENV || 'production');

    if (!SENTRY_DSN) {
        // no-op when DSN not provided
        return false;
    }

    // dynamic import so projects without Sentry don't fail at runtime
    try {
        // eslint-disable-next-line @typescript-eslint/no-var-requires
        const Sentry = require('@sentry/vue');
        // eslint-disable-next-line @typescript-eslint/no-var-requires
        const Tracing = require('@sentry/tracing');

        Sentry.init({
            app,
            dsn: SENTRY_DSN,
            environment: SENTRY_ENV,
            integrations: [new Tracing.Integrations.BrowserTracing()],
            tracesSampleRate: 0.1,
        });
        // eslint-disable-next-line no-console
        console.log('Sentry initialized');
        return true;
    } catch (err: any) {
        // eslint-disable-next-line no-console
        console.warn('Sentry init failed:', err?.message || err);
        return false;
    }
}
