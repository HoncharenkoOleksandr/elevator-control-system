# Installation Guide

### Problem
- Peer dependency conflicts between `@typescript-eslint/eslint-plugin` versions
- Conflicting versions causing npm install to fail

### Solution
1. **Updated package versions** to compatible versions (6.21.0)
2. **Updated tsconfig.json** to exclude test files from TypeScript build
3. **Used `--legacy-peer-deps` flag** during installation

### Installation Steps

```bash
# Install dependencies
npm install --legacy-peer-deps

# Start development server
npm run dev

# Build for production
npm run build

# Run tests
npm test
```

### Why `--legacy-peer-deps`?

The `--legacy-peer-deps` flag tells npm to use the legacy (npm v6 style) dependency resolution algorithm. This is necessary because of version conflicts in the TypeScript ESLint ecosystem. This is **completely safe** and does not affect the functionality of the application.

## Build Status

✅ TypeScript compilation: Working
✅ Vite build: Working
✅ All dependencies installed
✅ Test files: Configured (Jest + React Testing Library)

## Next Steps

1. Start the development server with `npm run dev`
2. Open `http://localhost:3000` in your browser
3. Test the elevator control system with different languages

## Troubleshooting

### If you see build errors:
- Make sure you ran `npm install --legacy-peer-deps`
- Clear node_modules and package-lock.json if needed:
  ```bash
  rm -rf node_modules package-lock.json
  npm install --legacy-peer-deps
  ```


