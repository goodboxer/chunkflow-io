# Copilot Instructions for apimatic-validator-mcp

## Big Picture Architecture
- **Main Service:** Implements an MCP (Model Context Protocol) server for validating OpenAPI specs using APIMatic's API.
- **Core Entry:** `src/index.ts` (TypeScript) and `build/index.js` (compiled) initialize the MCP server, define tools, and handle API requests.
- **SDK Integration:** Uses the APIMatic SDK in `src/sdks/apimatic-api/` for code generation, docs, and transformation. All API interactions are routed through this SDK.
- **Controllers/Mo
dels:** API endpoints and data types are modularized in `src/sdks/apimatic-api/src/controllers/` and `src/sdks/apimatic-api/src/models/`.

## Developer Workflows
- **Build:**
  - Root: `npm run build` (compiles TypeScript to `build/`)
  - SDK: `npm run build` in `src/sdks/apimatic-api/` (outputs to `dist/`)
- **Test:**
  - SDK: `npm run test` or `npm run test:coverage` in `src/sdks/apimatic-api/` (uses Jest)
- **Run:**
  - Root: `npm start` (compiles and runs MCP server)
- **Lint/Format:**
  - Root: `npm run lint` (lints all TypeScript in `src/`)
  - SDK: `npm run lint` and `npm run lint:fix` in `src/sdks/apimatic-api/` (uses ESLint)
- **Dependency Scanning:**
  - Run `npm audit` in root and SDK to check for vulnerabilities. Recommended to add to CI.

## Project-Specific Conventions
- **Environment Variables:** `APIMATIC_API_KEY` must be set for API access. The server will exit if missing.
- **Strict Validation:** All OpenAPI imports use strict validation (`APIMATIC-META.json` in ZIP).
- **TypeScript:** Strict mode enabled; root and SDK have separate `tsconfig.json` files.
- **SDK Exports:** All controllers and models are re-exported via `src/sdks/apimatic-api/src/index.ts` for easy access.
- **Error Handling & Logging:**
  - API errors are logged with only message/code, not full error.result (to avoid leaking sensitive data).
  - Unexpected errors are logged with message only.
  - MCP tool responses should return structured JSON, not just stringified text.
## SDK Update & Rebuild
- To update or rebuild the vendored APIMatic SDK in `src/sdks/apimatic-api/`:
  1. Make changes or regenerate SDK code as needed.
  2. Run `npm run build` in `src/sdks/apimatic-api/` to output to `dist/`.
  3. Run SDK tests with `npm test` or `npm run test:coverage` in the same directory.
  4. If you update SDK dependencies, also run `npm audit` to check for vulnerabilities.
  5. If you add new controllers/models, ensure they are exported in `src/sdks/apimatic-api/src/index.ts`.

## Integration Points & External Dependencies
- **APIMatic SDK:**
  - Key packages: `@apimatic/core`, `@apimatic/authentication-adapters`, `@apimatic/axios-client-adapter`, `@apimatic/schema`
- **MCP Protocol:**
  - Uses `@modelcontextprotocol/sdk` for server and transport.
- **Archiver/Streams:**
  - Uses `archiver` and Node.js streams to package OpenAPI specs for validation.

## Patterns & Examples
  - **Linting:** Run `npm run lint` in root to check for code style and import consistency.
  - **Dependency Scanning:** Run `npm audit` in root and SDK for SCA. Add to CI for continuous monitoring.
- **Tool Definition:** See `server.tool(...)` in `src/index.ts` for how MCP tools are registered.
- **Validation Workflow:**
  1. OpenAPI spec is zipped with metadata
  2. Sent to APIMatic via SDK client
  3. Validation summary returned
- **Adding New Tools:** Follow the pattern in `src/index.ts` for new MCP tool registration.

## Key Files & Directories
- `src/index.ts` – MCP server logic and tool registration
- `build/index.js` – Compiled entry point
- `src/sdks/apimatic-api/` – APIMatic SDK, controllers, models, tests
- `src/sdks/apimatic-api/src/index.ts` – SDK exports
- `src/sdks/apimatic-api/src/controllers/` – API endpoint logic
- `src/sdks/apimatic-api/src/models/` – Data types

---
For unclear conventions or missing details, ask maintainers for clarification. Update this file as new patterns emerge.