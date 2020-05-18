import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { LayoutService } from 'src/app/services/layout/layout.service';

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.scss']
})
export class DialogComponent implements OnInit {
  screenSize: string = "";

  constructor(public dialogRef: MatDialogRef<DialogComponent>, @Inject(MAT_DIALOG_DATA) public data: CompetenceData, private layoutService: LayoutService) {
    this.layoutService.onLayoutChanges().subscribe(response => {
      this.screenSize = response;
    });
  }

  ngOnInit() { }

  close() {
    this.dialogRef.close();
  }

}

export interface CompetenceData {
  title: string;
  description: string;
  icon: string;
}
