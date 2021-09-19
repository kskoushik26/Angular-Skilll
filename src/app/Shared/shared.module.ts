import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material';
import { MatInputModule } from '@angular/material/input';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import {MatIconModule} from '@angular/material/icon';
import { SmapleDialogComponent } from './smaple-dialog/smaple-dialog.component';
import {
  MatButtonModule,
  MatCommonModule,
  MatDialogModule,
} from '@angular/material';


@NgModule({
  declarations: [
    HeaderComponent,
FooterComponent,
SmapleDialogComponent
],
    imports: [
        FormsModule,
        ReactiveFormsModule,
        MatFormFieldModule,
        MatInputModule,
        CommonModule,
        MatIconModule,
        MatButtonModule,
  MatCommonModule,
  MatDialogModule
      ],
      exports: [
        HeaderComponent,
        FooterComponent,
      ],
      entryComponents:[
             SmapleDialogComponent
      ],
      

      providers: [],
    })
    export class SharedModule { }

