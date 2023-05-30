import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { RouterModule, Routes } from '@angular/router';
import { BlockComponent } from './block/block.component';

const routes: Routes = [
  {
    path: '', component: HomeComponent
  }
];

@NgModule({
  declarations: [
    HomeComponent,
    BlockComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class HomeModule { }
