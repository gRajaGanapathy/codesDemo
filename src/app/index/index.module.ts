import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { HomeComponent } from './home/home.component';
import { IndexPageRoutingModule } from './index-routing.module';
import { IndexPage } from './index.page';
import { PrimeMatchesComponent } from './prime-matches/prime-matches.component';
import { RegularMatchesComponent } from './regular-matches/regular-matches.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    IndexPageRoutingModule,
  ],
  declarations: [IndexPage, HomeComponent, PrimeMatchesComponent, RegularMatchesComponent],
  // exports: [HomeComponent]
})
export class IndexPageModule {}
