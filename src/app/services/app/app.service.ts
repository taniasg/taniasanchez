import { Injectable } from "@angular/core";
import { Subject, Subscription } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AppService {

  _themeChanged: Subject<'light-theme' | 'dark-theme' | string> = new Subject();

  uitheme: 'light-theme' | 'dark-theme' | string;

  constructor() {
    this.setTheme();
  }

  onThemeChanged(fn): Subscription {
    return this._themeChanged.subscribe(fn);
  }

  emitThemeChanged(theme: 'light-theme' | 'dark-theme' | string) {
    this.uitheme = theme;
    this._themeChanged.next(theme);
  }

  getCurrentTheme() {
    return this.uitheme || 'light-theme';
  }

  setTheme(theme?: 'light-theme' | 'dark-theme' | string) {
    if (theme) {
      if (this._isValidTheme(theme)) {
        this.uitheme = theme;
        localStorage.setItem('theme', theme);
      }
    }
    else {
      let localTheme: 'light-theme' | 'dark-theme' | string = (localStorage.getItem('theme'));
      if (this._isValidTheme(localTheme)) this.uitheme = localTheme;
    }
    this.emitThemeChanged(this.uitheme);
  }

  private _isValidTheme(theme) {
    return ['light-theme', 'dark-theme'].indexOf(theme) >= 0;
  }
}
