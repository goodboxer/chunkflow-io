# ChunkFlow-IO Setup Guide

## Environment Configuration

### Required API Keys

This project requires a Google Gemini API key to function.

**Setup Steps:**

1. Copy the environment template:
   ```bash
   cp .env.example .env.local
   ```

2. Get your Gemini API key:
   - Visit: https://aistudio.google.com/apikey
   - Create or copy your API key

3. Edit `.env.local` and replace the placeholder with your actual key:
   ```
   GEMINI_API_KEY=your_actual_key_here
   ```

### Security Notice

**IMPORTANT:** Never commit `.env.local` or any file containing API keys to version control!

The `.gitignore` file is configured to exclude:
- `.env.local`
- All `.env.*.local` files
- Any `*.env` files

### Local Development

Once your `.env.local` is configured:

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build
```

The app will be available at http://localhost:3000

## Troubleshooting

**"API key missing" error:**
- Verify `.env.local` exists in the project root
- Check that `GEMINI_API_KEY` is set correctly
- Restart the dev server after changing environment variables

**API quota exceeded:**
- Check your Gemini API usage at https://aistudio.google.com
- You may need to upgrade your API plan or wait for quota reset
