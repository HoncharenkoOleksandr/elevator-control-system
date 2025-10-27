# Elevator Control System

A modern, responsive elevator control system built with React, TypeScript, and styled-components. This application demonstrates best practices for internationalization, design patterns, and component architecture.

## Technologies Used

- **React 18** - UI library
- **TypeScript** - Type safety
- **Vite** - Build tool and dev server
- **Styled Components** - CSS-in-JS styling
- **Theme UI** - Design system
- **Jest** - Testing framework
- **React Testing Library** - Component testing utilities

## Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

1. Clone the repository or navigate to the project directory
2. Install dependencies:

```bash
npm install --legacy-peer-deps
```

**Note**: The `--legacy-peer-deps` flag is required due to peer dependency conflicts between TypeScript ESLint versions. This is safe and won't affect the functionality of the application.

### Development

Start the development server:

```bash
npm run dev
```

The application will be available at `http://localhost:3000`

### Building

Build for production:

```bash
npm run build
```

### Testing

Run tests:

```bash
npm test
```

Run tests in watch mode:

```bash
npm run test:watch
```

## Project Structure

```
elevator-control/
├── src/
│   ├── components/
│   │   ├── Elevator/       # Simple elevator component
│   │   ├── Building/       # Advanced multi-elevator building
│   │   ├── LanguageSelector/# Language selection
│   │   ├── Layout/         # App layout components
│   │   └── Form/           # Form components
│   ├── hooks/              # Custom hooks
│   ├── logic/
│   │   └── ElevatorManager.ts # Smart elevator assignment logic
│   ├── i18n/
│   │   ├── locales/        # Translation JSON files (en, es, fr, de)
│   │   ├── config.ts       # i18n service
│   │   └── Context.tsx     # React context provider
│   ├── theme/
│   │   └── config.ts       # Theme configuration
│   ├── styles/
│   │   └── global.css      # Global styles
│   ├── test/
│   │   └── setup.ts        # Test configuration
│   ├── App.tsx             # Root component
│   └── main.tsx            # Entry point
├── package.json
├── tsconfig.json
├── vite.config.ts
├── jest.config.js
└── README.md
```

## Internationalization

The application includes translations for:
- English (en)
- Spanish (es)
- French (fr)
- German (de)

### Adding New Translations

1. Create a new JSON file in `src/i18n/locales/` (e.g., `it.json` for Italian)
2. Copy the structure from an existing locale file
3. Translate all the values
4. Update the `SupportedLocale` type in `src/i18n/config.ts`
5. Add the language to the `languages` array in `src/components/LanguageSelector/index.tsx`

The translation system is framework-independent and can easily be replaced with any other i18n library.

## Testing

The test suite includes:
- Component rendering tests
- User interaction tests
- Emergency stop functionality tests
- Multi-floor navigation tests

Example test:
```typescript
it('calls elevator to a specific floor', async () => {
  render(<Elevator floors={[]} maxFloor={10} />);
  const floorButton = screen.getByText('5');
  fireEvent.click(floorButton);
  // Assert elevator movement
});
```

## License

MIT License - feel free to use this project as a reference or starting point.
