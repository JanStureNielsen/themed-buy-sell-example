import { effect, Injectable, signal } from '@angular/core';

export const THEME_PREFERENCE_LOCAL_STORAGE_KEY = 'themePreference';
export const DARK_MODE_CLASS_NAME = 'docs-dark-mode';
export const LIGHT_MODE_CLASS_NAME = 'docs-light-mode';
export const PREFERS_COLOR_SCHEME_DARK = '(prefers-color-scheme: dark)';

export interface Theme {
  id: string;
  primary: string;
  displayName: string;
}

@Injectable({
  providedIn: 'root'
})
export class ThemeManagerService {
  private readonly themes: Theme[] = [
    {
      id: 'deep-blue-dark',
      primary: '#1976D2',
      displayName: 'Deep Blue Dark',
    },
    { id: 'green', primary: '#00796B', displayName: 'Green' },
    { id: 'orange', primary: '#E65100', displayName: 'Orange' },
    { id: 'purple', primary: '#6200EE', displayName: 'Purple' },
    { id: 'red', primary: '#C2185B', displayName: 'Red' },
  ];

  currentTheme = signal<Theme>(this.themes[0]);

  getThemes(): Theme[] {
    return this.themes;
  }

  setTheme(themeId: string): void {
    const theme = this.themes.find((t) => t.id === themeId);
    if (theme) {
      this.currentTheme.set(theme);
    }
  }

  updateThemeClass = effect(() => {
    const theme = this.currentTheme();
    document.body.classList.remove(...this.themes.map((t) => `${t.id}-theme`));
    document.body.classList.add(`${theme.id}-theme`);
  });
}
