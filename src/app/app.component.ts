import { Component } from '@angular/core';
import { LayoutService } from './services/layout/layout.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'taniasanchez';
  screenSize: string = "";

  constructor(private layoutService: LayoutService) {
    this.layoutService.onLayoutChanges().subscribe(response => {
      this.screenSize = response;
    });
  }

}
