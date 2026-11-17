# JSON Payload Diff Inspector (`js-react-json-diff-inspector`)

A developer utility built with React, JavaScript, Vite, and Tailwind CSS for recursively comparing two JSON payloads, highlighting added, removed, and modified nested keys, and pretty-printing minified JSON.

## Features

- **Recursive Deep Diffing:** Traverses nested objects and highlights exact dot-notation paths (`rateLimit.maxRequests`, `features.mfaEnabled`).
- **Live Syntax Validation:** Real-time JSON parsing feedback with one-click pretty formatting.
- **Interactive Filtering:** Toggle visibility of unchanged keys and swap base/target payloads with a single click.

## Setup & Running

1. Install dependencies:
   ```bash
   cd js-react-json-diff-inspector
   npm install
   ```
