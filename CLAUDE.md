# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Repository Overview

This repository contains the documentation for RetroAchievements - a community-driven project that adds achievements to retro games. The documentation is built using VitePress, a Vue-powered static site generator.

## Common Commands

### Development

```bash
# Start the local development server
npm run dev

# Build the documentation site
npm run build

# Preview the built site
npm run preview

# Format Markdown files using Prettier
npm run format
```

### Node.js Version

This project requires Node.js 20 or higher.

## Documentation Structure

The documentation is organized into several main sections:

- `/docs/developer-docs/` - Documentation for achievement developers
- `/docs/general/` - General information about RetroAchievements
- `/docs/guidelines/` - Guidelines for users, developers, and content
- `/docs/es/`, `/docs/pt/` - Translations in Spanish and Portuguese

The documentation supports multiple languages (English, Spanish, Portuguese) with parallel directory structures.

## Contribution Process

The project welcomes contributions to the documentation. Any proposed revisions, if accepted, will go live instantly.

To contribute:
1. Make changes to the Markdown files
2. Format documents with `npm run format`
3. Submit a pull request against the main branch

## Technical Details

- The site is built with VitePress (a Vue-powered static site generator)
- TailwindCSS is used for styling
- Search functionality is powered by Algolia DocSearch
- The documentation is primarily written in Markdown