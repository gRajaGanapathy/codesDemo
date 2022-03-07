import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from 'src/app/shared/data.service';

@Component({
  selector: 'app-mail-box',
  templateUrl: './mail-box.component.html',
  styleUrls: ['./mail-box.component.scss'],
})
export class MailBoxComponent implements OnInit {
  public segment: string = "pending";
  emailList: any;
  declined: any;
  pending: any;
  tabType: any = 'regular';


  constructor(
    private dataService: DataService, private router: Router
  ) {
    this.getProfileList();
  }

  ngOnInit() { }
  switchTab(type: string) {
    this.tabType = type;
  }

  segmentChanged(ev: any) {
    this.segment = ev.detail.value;
  }
  getProfileList() {
    this.dataService.getProfileInfo().subscribe((result: any) => {
      this.declined = result.data.declined;
      this.pending = result.data.pending;
      console.log('result in email', result.data)
    }, err => {
      console.log('getProfileInfo', err);
    });
  }
  onClick(type, item) {
    console.log(type, item)
    this.dataService.conversationData(item)
    this.router.navigate(['index/conversation'], {
      queryParams: {
        type: type,
      }
    });
  }

}
