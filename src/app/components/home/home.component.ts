import { Component, OnInit } from '@angular/core';
import { LayoutService } from 'src/app/services/layout/layout.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  screenSize: string = "";

  constructor(private layoutService: LayoutService) {
    this.layoutService.onLayoutChanges().subscribe(response => {
      this.screenSize = response;
    });
  }

  ngOnInit() {
  }

}
