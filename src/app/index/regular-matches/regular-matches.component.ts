import { Component, EventEmitter, Input, OnInit } from '@angular/core';
import { LoadingController } from '@ionic/angular';
import { DataService } from 'src/app/shared/data.service';
// import SwiperCore, { Navigation, Pagination, Scrollbar, A11y, Virtual, Zoom,  Autoplay,  Thumbs,  Controller,} from 'swiper';
declare let $: any;
// SwiperCore.use([
//   Navigation,
//   Pagination,
//   Scrollbar,
//   A11y,
//   Virtual,
//   Zoom,
//   Autoplay,
//   Thumbs,
//   Controller
// ]);

@Component({
  selector: 'app-regular-matches',
  templateUrl: './regular-matches.component.html',
  styleUrls: ['./regular-matches.component.scss'],
})
export class RegularMatchesComponent implements OnInit {
  @Input() currentRout: any;
  justJoined: any;
  mathchedList: any;
  filterProfile: any;
  @Input() matchedValue: EventEmitter<string>
  imgCount = 50;
  allProfiles: any;
  name: any;

  constructor(
    private dataService: DataService, private isLoading : LoadingController
  ) {
  }

  ngOnInit():any {
    if (this.matchedValue){
      this.matchedValue.subscribe(async (res: any) => {
        this.filterProfile = this.allProfiles[res.id];
        await this.isLoading.create({
          message: 'Please wait...',
          spinner: 'crescent'
        }).then((loading) => {
          loading.present();
          setTimeout(() => {
            loading.dismiss();
          }, 500)
        });
      });
    }
    this.getProfileList();
  }

  getProfileList() {
    this.dataService.getProfileInfo().subscribe((result: any) => {
      this.justJoined = result.data.justJoined;
      this.filterProfile =  result.data?.matches;
      this.allProfiles = result.data;
      console.log('result', result.data)
    }, err => {
      console.log('getProfileInfo', err);
    });
  }

}
