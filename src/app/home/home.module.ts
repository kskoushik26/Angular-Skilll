import { NgModule ,CUSTOM_ELEMENTS_SCHEMA  } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import { MatDialogModule, MatFormFieldModule,MatButtonModule,MatCommonModule } from '@angular/material';
import { MatInputModule } from '@angular/material/input';
import { SharedModule } from '../Shared/shared.module';
import { HomeComponent } from './home.component';


const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forChild(routes),
    MatFormFieldModule,
    MatInputModule ,
    ReactiveFormsModule,
    SharedModule,
    MatDialogModule,
    MatButtonModule,MatCommonModule
    

  ],
  declarations: [HomeComponent]
})
export class HomeModule {}