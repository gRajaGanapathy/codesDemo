import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  currentRout = 'home'
  tabType: any = 'regular';
  list = [
    {image:'create-outline', title: 'Edit Profile'},
    {image:'person-outline', title: 'Edit Preferences'},
    {image:'checkmark-circle-outline', title: 'Verify Your Profile'},
    {image:'calendar-clear-outline', title: 'Daily Recommendations'},
    {image:'chatbubble-ellipses-outline', title: 'Your Chats'},
    {image:'call-outline', title: 'Your Calls'},
    {image:'settings-outline', title: 'Settings', icon: 'add-outline'},
    {image:'help-circle-outline', title: 'Help', icon: 'add-outline'},
    {image:'unlink-outline', title: 'Feedback', icon: 'add-outline'},
    {image:'unlink-outline', title: 'Wedding Services', icon: 'add-outline'},
    {image:'heart-outline', title: 'Success Stories', icon: 'add-outline'},
    {image:'unlink-outline', title: 'More', icon: 'add-outline'},
  ]

  constructor() { }

  ngOnInit() {}

  switchTab(type: string) {
    this.tabType = type;
  }

}
