import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

@Component({
  selector: 'app-smaple-dialog',
  templateUrl: './smaple-dialog.component.html',
  styleUrls: ['./smaple-dialog.component.css']
})
export class SmapleDialogComponent implements OnInit {
  form: FormGroup;

  constructor(public dialogRef: MatDialogRef<SmapleDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,public formbuilder:FormBuilder) {
      this.form=this.formbuilder.group({
        text1:new FormControl('',Validators.required),
        text2:new FormControl('',Validators.required),
        text3:new FormControl('',Validators.required),
        text4:new FormControl('',Validators.required)
       
      })
     }

  ngOnInit() {
  }
  onCancel(): void {
    this.dialogRef.close();
  }

}
