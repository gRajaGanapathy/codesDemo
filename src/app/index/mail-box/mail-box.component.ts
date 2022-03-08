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
  readStatus = [
    {name: "READ", checked: false, id: 1},
    {name: "UNREAD", checked: false, id: 2}
  ]
  conversationType = [
    {name: "ALL", checked: false, id: 1},
    {name: "INTERESTS", checked: false, id: 2},
    {name: "MESSAGES", checked: false, id: 3},
    {name: "PHOTO REQUESTS", checked: false, id: 4},
    {name: "HOROSCOPE REQUESTS", checked: false, id: 5},
    {name: "PHONE NUMBER VIEWED", checked: false, id: 6},
    {name: "OTHER REQUESTS", checked: false, id: 7},
  ]
  seletedValue = 'inbox';
  public sentValue: string = "all";
  dropdownlist: any;


  constructor(
    private dataService: DataService, private router: Router
  ) {
    this.getProfileList();
  }

  ngOnInit() { }
  switchTab(type: string) {
    this.tabType = type;
  }

  inboxChange(ev: any) {
    this.segment = ev.detail.value;
  }
  sentChange(e: any) {
    this.sentValue = e.detail.value
  }
  getProfileList() {
    this.dataService.getProfileInfo().subscribe((result: any) => {
      this.dropdownlist = result.data.dropdownlist;
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
  onSelect(e){
    console.log(e.detail.value);
    this.seletedValue = e.detail.value;
  }

}
