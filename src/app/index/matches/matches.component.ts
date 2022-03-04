import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { LoadingController } from '@ionic/angular';
import { DataService } from 'src/app/shared/data.service';

@Component({
  selector: 'app-matches',
  templateUrl: './matches.component.html',
  styleUrls: ['./matches.component.scss'],
})
export class MatchesComponent implements OnInit {
  currentRout = 'matches'
  tabType: any = 'regular';
  allProfiles: any;
  buttons: any[] = [
    { name: 'All Matches', id: 'matches', i: 0, TotalCount: '28' },
    { name: 'New Matches', id: 'justJoined', i: 1, TotalCount: '22' },
    { name: 'Premium Matches', id: 'premium', i: 2, TotalCount: '42' },
    { name: 'Mutual Matches', id: 'mutual', i: 3, TotalCount: '28' },
    { name: 'Viewed You', id: 'viewed', i: 4, TotalCount: '31' }
  ];


  slideOptions = {
    initialSlide: 1,
    slidesPerView: 0.5,
  };
  selected = 0;
  currentTabData: any = [];
  name: any;
  @Output() newData = new EventEmitter<any>();
  constructor(
    private service: DataService, private isLoading: LoadingController
  ) {
  }

  ngOnInit(): void {
    this.name = { name: 'All Matches', id: 'matches', i: 0, TotalCount: '28' };
    this.getProfileList();
  }
  switchTab(type: string) {
    this.tabType = type;
  }


  async getProfileList() {
    await this.isLoading.create({
      message: 'Loading data...',
      spinner: 'crescent'
    }).then((loading) => {
      loading.present();
      this.service.getProfileInfo().subscribe((result: any) => {
        this.allProfiles = result.data
        setTimeout(() => {
          loading.dismiss();
        }, 500);
      }, err => {
        setTimeout(() => {
          loading.dismiss();
        }, 500);
      });
    });
  }
  onClick(item) {
    this.name = item;
    this.newData.emit(item);
  }
}
