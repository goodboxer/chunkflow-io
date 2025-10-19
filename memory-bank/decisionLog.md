# Decision Log

| Date | Decision | Rationale |
|------|----------|-----------|
| 2025-10-18 | Use Vue 3 as primary framework | Already integrated in codebase with Composition API. Removed unused React dependency to reduce bundle size. |
| 2025-10-18 | Use Google Gemini 2.5 Flash Native Audio | Best real-time audio conversation API with bi-directional streaming support for character interactions. |
| 2025-10-18 | Use Google Imagen 4.0 | High-quality text-to-image generation for character avatars with clay animation aesthetic. |
| 2025-10-18 | Client-side architecture | Leveraging Google APIs directly from browser reduces backend complexity and hosting costs. |
| 2025-10-18 | Firebase for infrastructure | Provides auth, Firestore database, and storage in one platform. Easy integration with Google services. |
| 2025-10-18 | Git with strict .env exclusion | Prevent API key leaks by properly configuring .gitignore and using .env.example templates. |
| 2025-10-18 | 15 character persona system | Rich character variety with 7 moods × 7 roles × 7 styles = 343 possible combinations for creative flexibility. |
