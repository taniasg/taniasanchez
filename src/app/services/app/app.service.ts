import { Injectable } from "@angular/core";
import { Subject, Subscription } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AppService {

  _themeChanged: Subject<'grey-theme' | 'pink-theme' | 'orange-theme' | 'green-theme' | 'yellow-theme' | string> = new Subject();

  uitheme: 'grey-theme' | 'pink-theme' | 'orange-theme' | 'green-theme' | 'yellow-theme' | string;

  constructor() {
    this.setTheme();
  }

  onThemeChanged(fn): Subscription {
    return this._themeChanged.subscribe(fn);
  }

  emitThemeChanged(theme: 'grey-theme' | 'pink-theme' | 'orange-theme' | 'green-theme' | 'yellow-theme' | string) {
    this.uitheme = theme;
    this._themeChanged.next(theme);
  }

  getCurrentTheme() {
    return this.uitheme || 'grey-theme';
  }

  setTheme(theme?: 'grey-theme' | 'pink-theme' | 'orange-theme' | 'green-theme' | 'yellow-theme') {
    if (theme) {
      if (this._isValidTheme(theme)) {
        this.uitheme = theme;
        localStorage.setItem('theme', theme);
      }
    }
    else {
      let localTheme: 'grey-theme' | 'pink-theme' | 'orange-theme' | 'green-theme' | 'yellow-theme' | string = (localStorage.getItem('theme'));
      if (this._isValidTheme(localTheme)) this.uitheme = localTheme;
    }
    this.emitThemeChanged(this.uitheme);
  }

  private _isValidTheme(theme) {
    return ['grey-theme', 'pink-theme', 'orange-theme', 'green-theme', 'yellow-theme'].indexOf(theme) >= 0;
  }
}
