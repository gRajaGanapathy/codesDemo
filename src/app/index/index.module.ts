import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { HomeComponent } from './home/home.component';
import { IndexPageRoutingModule } from './index-routing.module';
import { IndexPage } from './index.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    IndexPageRoutingModule,
  ],
  declarations: [IndexPage, HomeComponent],
  // exports: [HomeComponent]
})
export class IndexPageModule {}
