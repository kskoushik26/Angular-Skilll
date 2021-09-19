import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';
import { SmapleDialogComponent } from '../Shared/smaple-dialog/smaple-dialog.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  currencyValue: any;
  timeValue: any;
  timeValueYear: any;

  constructor(public dialog: MatDialog) { }

  ngOnInit() {
    this.currencyValue = 234500
    this.timeValue= new Date();
    this.timeValueYear= new Date(Date.UTC(2018, 11, 1, 0, 0, 0))
  }
  openDialog(): void {
    let dialogRef = this.dialog.open(SmapleDialogComponent,{
      width: '600px',
    })
    dialogRef.afterClosed().subscribe(result => {
     console.log(result)
    });
  }

}
