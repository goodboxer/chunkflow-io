import { defineComponent, ref } from 'vue';

export const SentryTestPage = defineComponent({
    name: 'SentryTestPage',
    setup() {
        const count = ref(0);

        const triggerRuntimeError = () => {
            // Intentionally cause a runtime error
            const obj = undefined;
            obj.someMethod();
        };

        const triggerPromiseError = async () => {
            // Intentionally cause an unhandled promise rejection
            await new Promise((_, reject) => {
                reject(new Error('Test: Unhandled Promise Error'));
            });
        };

        const triggerVueError = () => {
            // Trigger a Vue lifecycle error
            throw new Error('Test: Vue Component Error');
        };

        const triggerConsoleError = () => {
            // Log an error to test console integration
            console.error(new Error('Test: Console Error'));
        };

        return () => (
            <div class="p-8 max-w-2xl mx-auto">
                <h1 class="text-2xl font-bold mb-6">Sentry Error Test Page</h1>
                <div class="space-y-4">
                    <div class="p-4 bg-yellow-100 rounded-lg mb-6">
                        <p class="text-yellow-800">⚠️ This page is for testing error monitoring. Use only in development.</p>
                    </div>

                    <div class="space-y-4">
                        <button
                            onClick={triggerRuntimeError}
                            class="w-full p-3 bg-red-500 text-white rounded-lg hover:bg-red-600"
                        >
                            Trigger Runtime Error
                        </button>

                        <button
                            onClick={triggerPromiseError}
                            class="w-full p-3 bg-orange-500 text-white rounded-lg hover:bg-orange-600"
                        >
                            Trigger Promise Error
                        </button>

                        <button
                            onClick={triggerVueError}
                            class="w-full p-3 bg-purple-500 text-white rounded-lg hover:bg-purple-600"
                        >
                            Trigger Vue Error
                        </button>

                        <button
                            onClick={triggerConsoleError}
                            class="w-full p-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600"
                        >
                            Trigger Console Error
                        </button>
                    </div>

                    <div class="mt-8 p-4 bg-gray-100 rounded-lg">
                        <h2 class="font-bold mb-2">Instructions:</h2>
                        <ol class="list-decimal list-inside space-y-2">
                            <li>Ensure Sentry DSN is configured in your .env file</li>
                            <li>Click any button to trigger a test error</li>
                            <li>Check your Sentry dashboard for the error event</li>
                            <li>Verify source maps are working (stack traces should show original source)</li>
                        </ol>
                    </div>
                </div>
            </div>
        );
    }
});