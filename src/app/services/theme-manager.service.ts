import { effect, Injectable, signal, computed, DestroyRef, inject } from '@angular/core';

export const THEME_MODE_LOCAL_STORAGE_KEY = 'themeMode';
export const THEME_PREFERENCE_LOCAL_STORAGE_KEY = 'themePreference';
export const PREFERS_COLOR_SCHEME_DARK = '(prefers-color-scheme: dark)';

export type ThemeMode = 'light' | 'dark' | 'auto';

export interface Theme {
  id: string;
  primary: string;
  displayName: string;
}

@Injectable({
  providedIn: 'root'
})
export class ThemeManagerService {
  private readonly destroyRef = inject(DestroyRef);
  private readonly mediaQuery = window.matchMedia(PREFERS_COLOR_SCHEME_DARK);

  private readonly themes: Theme[] = [
    { id: 'deep-blue-dark', primary: '#1976D2', displayName: 'Deep Blue Dark', },
    { id: 'green', primary: '#00796B', displayName: 'Green' },
    { id: 'orange', primary: '#E65100', displayName: 'Orange' },
    { id: 'purple', primary: '#6200EE', displayName: 'Purple' },
    { id: 'red', primary: '#C2185B', displayName: 'Red' },
  ];

  currentTheme = signal<Theme>(this.themes[0]);

  /** User's theme mode preference: 'light', 'dark', or 'auto' (system) */
  themeMode = signal<ThemeMode>(this.loadThemeMode());

  /** Whether the system prefers dark mode */
  systemPrefersDark = signal<boolean>(this.mediaQuery.matches);

  /** The effective color scheme based on mode and system preference */
  effectiveColorScheme = computed<'light' | 'dark'>(() => {
    const mode = this.themeMode();
    if (mode === 'auto') {
      return this.systemPrefersDark() ? 'dark' : 'light';
    }
    return mode;
  });

  constructor() {
    this.setupSystemPreferenceListener();
  }

  private loadThemeMode(): ThemeMode {
    const stored = localStorage.getItem(THEME_MODE_LOCAL_STORAGE_KEY);
    if (stored === 'light' || stored === 'dark' || stored === 'auto') {
      return stored;
    }
    return 'auto';
  }

  private setupSystemPreferenceListener(): void {
    const handler = (event: MediaQueryListEvent) => {
      this.systemPrefersDark.set(event.matches);
    };
    this.mediaQuery.addEventListener('change', handler);
    this.destroyRef.onDestroy(() => {
      this.mediaQuery.removeEventListener('change', handler);
    });
  }

  getThemes(): Theme[] {
    return this.themes;
  }

  setTheme(themeId: string): void {
    const theme = this.themes.find((t) => t.id === themeId);
    if (theme) {
      this.currentTheme.set(theme);
    }
  }

  setThemeMode(mode: ThemeMode): void {
    this.themeMode.set(mode);
    localStorage.setItem(THEME_MODE_LOCAL_STORAGE_KEY, mode);
  }

  updateThemeClass = effect(() => {
    const theme = this.currentTheme();
    document.body.classList.remove(...this.themes.map((t) => `theme-${t.id}`));
    document.body.classList.add(`theme-${theme.id}`);
  });

  updateColorScheme = effect(() => {
    const colorScheme = this.effectiveColorScheme();
    document.documentElement.style.colorScheme = colorScheme;
  });
}
