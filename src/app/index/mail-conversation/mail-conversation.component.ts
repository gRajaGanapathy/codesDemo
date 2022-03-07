import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from 'src/app/shared/data.service';

@Component({
  selector: 'app-mail-conversation',
  templateUrl: './mail-conversation.component.html',
  styleUrls: ['./mail-conversation.component.scss'],
})
export class MailConversationComponent implements OnInit {
  list: any;
  profile: any;

  constructor(
    private router: Router, private dataService: DataService
  ) {
    this.dataService.data.subscribe((res: any) => {
      console.log('res item', res);
      this.profile = res;
      this.list = res;
    })
  }

  ngOnInit() { }
  onClick() {
    this.router.navigate(['index/mail'])
  }

}
