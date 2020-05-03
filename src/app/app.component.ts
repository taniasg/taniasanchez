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
    { id: 'blue-theme', label: 'Azul', color: 'rgba(26, 165, 180)' },
    { id: 'purple-theme', label: 'Morado', color: 'rgba(108, 90, 150)' },
    { id: 'green-theme', label: 'Verde', color: 'rgba(127, 195, 27)' },
    { id: 'yellow-theme', label: 'Amarillo', color: 'rgba(253, 216, 103)' }
  ]

  constructor(private layoutService: LayoutService, private router: Router, private appService: AppService) {
    this.layoutService.onLayoutChanges().subscribe(response => {
      this.screenSize = response;
    });
    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        this.activeRoute = event.urlAfterRedirects;
        console.log(this.activeRoute)
      }
    });
    this.appService.onThemeChanged(theme => (this.uitheme = theme));
    this.uitheme = this.appService.getCurrentTheme();
    console.log("UI THEME", this.uitheme)
  }

  onNavigate(url: string) {
    this.activeRoute = url;
  }

  private _setTheme(theme: any) {
    this.appService.setTheme(theme);
  }

}
