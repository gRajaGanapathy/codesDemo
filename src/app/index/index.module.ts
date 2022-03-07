import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { HomeComponent } from './home/home.component';
import { IndexPageRoutingModule } from './index-routing.module';
import { IndexPage } from './index.page';
import { PrimeMatchesComponent } from './prime-matches/prime-matches.component';
import { RegularMatchesComponent } from './regular-matches/regular-matches.component';
import { SwiperModule } from "swiper/angular";
import { MatchesComponent } from './matches/matches.component';
import { MailBoxComponent } from './mail-box/mail-box.component';
import { MailConversationComponent } from './mail-conversation/mail-conversation.component';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    IndexPageRoutingModule,
    SwiperModule
  ],
  declarations: [IndexPage, HomeComponent, PrimeMatchesComponent, RegularMatchesComponent, MatchesComponent, MailBoxComponent, MailConversationComponent],
  // exports: [HomeComponent]
})
export class IndexPageModule {}
