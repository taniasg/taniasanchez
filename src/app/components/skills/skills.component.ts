import { Component, OnInit } from '@angular/core';
import { LayoutService } from 'src/app/services/layout/layout.service';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.scss']
})
export class SkillsComponent implements OnInit {
  screenSize: string = "";

  constructor(private layoutService: LayoutService) {
    this.layoutService.onLayoutChanges().subscribe(response => {
      this.screenSize = response;
    });
  }

  ngOnInit() {
  }

}
