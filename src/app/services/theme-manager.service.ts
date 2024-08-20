import {inject, Injectable} from '@angular/core';
import {DOCUMENT, isPlatformBrowser} from '@angular/common';

export const THEME_PREFERENCE_LOCAL_STORAGE_KEY = 'themePreference';
export const DARK_MODE_CLASS_NAME = 'docs-dark-mode';
export const LIGHT_MODE_CLASS_NAME = 'docs-light-mode';
export const PREFERS_COLOR_SCHEME_DARK = '(prefers-color-scheme: dark)';

@Injectable({
  providedIn: 'root'
})
export class ThemeManager {
  private readonly document = inject(DOCUMENT);
  private readonly localStorage = inject(LOCAL_STORAGE);
  private readonly platformId = inject(PLATFORM_ID);

  constructor() { }
}
