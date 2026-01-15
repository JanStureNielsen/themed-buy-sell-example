# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Build and Development Commands

```bash
npm start          # Start dev server at http://localhost:4200/
npm run build      # Build for production (output: dist/themed-buy-sell)
npm test           # Run unit tests via Karma
npm run watch      # Build with watch mode for development
```

Generate new components: `ng generate component component-name`

## Architecture

This is an Angular 21 application using Angular Material with a custom theming system for buy/sell trading UI.

### Component Organization
- `src/app/components/` - Reusable UI components (order, header, footer, sidenav, themes)
- `src/app/pages/` - Route-level page components (dashboard, analytics, content, settings)
- `src/app/services/` - Services including ThemeManagerService
- `src/app/themes/` - CSS-based theme definitions

### Theming System
The app uses a CSS custom properties-based theming system:
- Themes defined in `src/app/themes/theme-*.css` files using `--mat-sys-*` CSS variables
- `ThemeManagerService` manages theme switching by adding/removing body classes (e.g., `theme-green`, `theme-purple`)
- Global styles in `src/styles.scss` set up Angular Material theme with SCSS mixins
- Buy/sell color variants: `.theme-color-buy` (azure) and `.theme-color-sell` (red)

### Conventions
- Component selector prefix: `fm-` (configured in angular.json)
- Standalone components with explicit imports (no NgModules)
- SCSS for component styles
- Signals used for reactive state (Angular signals API)
