import { Component, Input, OnInit } from '@angular/core';
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
  @Input() profileList: any[] = [];
  imgCount = 50;
  allProfiles: any;

  constructor(
    private dataService: DataService
  ) { }

  ngOnInit(): void {
    this.getProfileList();
  }
  getProfileList() {
    this.dataService.getProfileInfo().subscribe((result: any) => {
      this.allProfiles = result.data.justJoined
      console.log('result', result)
    }, err => {
      console.log('getProfileInfo', err);
    });
  }

}
