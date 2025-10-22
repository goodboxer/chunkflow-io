import { defineComponent } from 'vue';

export default defineComponent({
    name: 'AvatarsView',
    setup() {
        return () => (
            <main class="w-full flex-grow grid grid-cols-1 lg:grid-cols-5 gap-2 lg:gap-4 overflow-hidden">
                <div class="lg:col-span-2 bg-white/50 rounded-wow p-2 lg:p-4 flex flex-col justify-between">
                    <div class="space-y-2 lg:space-y-4">
                        <div class="bg-white/50 rounded-2xl p-2">
                            <h2 class="text-sm lg:text-base font-bold mb-1 ml-1">Characters</h2>
                            <div class="grid grid-cols-4 gap-1">
                                <div class="button relative flex flex-col items-center justify-center p-1 lg:p-2 rounded-2xl transition-all duration-300 aspect-square bg-gray-200 text-black hover:bg-gray-300">
                                    <div class="text-2xl lg:text-4xl">🤖</div>
                                    <div class="text-xs font-bold">Example</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="lg:col-span-3 bg-white/50 rounded-wow p-2 lg:p-4 flex flex-col relative overflow-hidden">
                    <div class="absolute inset-0 flex flex-col items-center justify-center p-4 text-center">
                        <div class="w-48 h-48 lg:w-64 lg:h-64 mb-4">
                            <img src="logo.png" alt="Audio Avatars Logo" class="w-full h-full object-contain opacity-20" />
                        </div>
                        <p class="text-lg lg:text-xl font-bold opacity-50">Select a character to begin</p>
                    </div>
                </div>
            </main>
        );
    }
});
