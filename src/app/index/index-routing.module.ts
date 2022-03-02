import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';

import { IndexPage } from './index.page';
import { MailBoxComponent } from './mail-box/mail-box.component';
import { MatchesComponent } from './matches/matches.component';
import { NotificationsComponent } from './notifications/notifications.component';
import { SearchComponent } from './search/search.component';

const routes: Routes = [
  {
    path: '',
    component: IndexPage,
    children: [
      { path: '', redirectTo: 'home', pathMatch: 'full' },
      {
        path: 'home',
        component: HomeComponent
      },
      {
        path: 'matches',
        component: MatchesComponent
      },
      {
        path: 'mail',
        component: MailBoxComponent
      },
      {
        path: 'notification',
        component: NotificationsComponent
      },
      {
        path: 'search',
        component: SearchComponent
      }
    ]
  },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class IndexPageRoutingModule { }
