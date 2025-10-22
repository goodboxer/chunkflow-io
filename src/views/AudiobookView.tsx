import { defineComponent } from 'vue';

export default defineComponent({
    name: 'AudiobookView',
    setup() {
        return () => (
            <main class="w-full flex-grow bg-white/50 rounded-wow p-4 flex flex-col items-center justify-center overflow-hidden">
                <div class="text-center">
                    <h2 class="text-2xl font-bold mb-2">Audiobook Creator</h2>
                    <p class="mb-4 text-black/60">Upload a chapter (.txt file) to get started.</p>
                </div>
            </main>
        );
    }
});
