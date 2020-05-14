import { Component } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { LayoutService } from './services/layout/layout.service';
import { AppService } from './services/app/app.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Tania Sanchez';
  uitheme: string = 'grey-theme';

  activeRoute: string = "";
  screenSize: string = "";

  menu: Array<object> = [
    { name: 'Inicio', route: '/' },
    { name: 'Sobre Mí', route: '/about' },
    { name: 'Habilidades', route: '/skills' }
  ]

  themes: Array<any> = [
    { id: 'grey-theme', label: 'Gris', color: 'rgba(76, 76, 76)' },
    { id: 'pink-theme', label: 'Rosa', color: 'rgba(233, 161, 185)' },
    { id: 'orange-theme', label: 'Naranja', color: 'rgba(241, 120, 47)' },
    { id: 'green-theme', label: 'Verde', color: 'rgba(149, 194, 115)' },
    { id: 'yellow-theme', label: 'Amarillo', color: 'rgba(231, 185, 45)' }
  ]

  constructor(private layoutService: LayoutService, private router: Router, private appService: AppService) {
    this.layoutService.onLayoutChanges().subscribe(response => {
      this.screenSize = response;
    });
    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        this.activeRoute = event.urlAfterRedirects;
      }
    });
    this.appService.onThemeChanged(theme => (this.uitheme = theme));
    this.uitheme = this.appService.getCurrentTheme();
    this._log();
  }

  onNavigate(url: string) {
    this.activeRoute = url;
  }

  setTheme(theme: any) {
    this.appService.setTheme(theme);
  }

  private _log() {
    console.log(`
@@@@@@@@@@@@@@@@     @@@@@@@@@@
@@@   @@@@   @@@   @@@@@@@@@@@@@@
@     @@@@     @   @@@@         @
      @@@@         @@@
      @@@@           @@@@@
      @@@@               @@@@@
      @@@@         @        @@@@@
      @@@@         @@@@@@@@@@@@@@
    @@@@@@@@         @@@@@@@@@@
  `);
    console.log("LinkedIn: https://www.linkedin.com/in/taniasanchezgo/")
    console.log("Github: https://github.com/taniasg")
  }

}
