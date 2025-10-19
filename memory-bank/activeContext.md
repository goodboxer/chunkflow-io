# Active Context

## Current Goals

1. **Set up Firebase Authentication** - Enable user signup/login to support user accounts
2. **Design Firestore database schema** - Structure for storing user projects, generated audio, and images
3. **Implement audiobook creation workflow** - Core text-to-audiobook pipeline with character voice assignment

## Current Blockers

- **Manuscript Processing Library**: Need to research and select libraries for parsing EPUB, PDF, DOCX formats
- **Voice Synthesis Strategy**: Decide between Google TTS, ElevenLabs, or other services for actual audiobook narration
- **Storage Strategy**: Determine where to store generated audio files (Firebase Storage vs CDN)
- **Pricing Model**: Define free tier limits and paid subscription tiers

## Recent Decisions

- Using Vue 3 as primary framework (removed unused React dependency)
- Using Google Gemini 2.5 Flash Native Audio for real-time conversations
- Using Google Imagen 4.0 for character image generation
- Client-side architecture with Google APIs (no custom backend needed yet)
- Firebase for auth, database, and storage infrastructure