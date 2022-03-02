import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  list = [
    // {br: true},
    {image: 'assets/images/edit-1.png', title: 'Edit Profile'},
    {image: 'assets/images/edit-2.png', title: 'Edit Preferences'},
    // {br: true},
    {image: 'assets/images/edit-3.png', title: 'Verify Your Profile'},
    {image: 'assets/images/edit-4.png', title: 'Daily Recommendations'},
    // {br: true},
    {image: 'assets/images/edit-5.png', title: 'Your Chats'},
    {image: 'assets/images/edit-6.png', title: 'Your Calls'},
    // {br: true},
    {image: 'assets/images/edit-7.png', title: 'Settings', icon: 'add-outline'},
    {image: 'assets/images/edit-8.png', title: 'Help', icon: 'add-outline'},
    {image: 'assets/images/edit-9.png', title: 'Feedback', icon: 'add-outline'},
    {image: 'assets/images/edit-10.png', title: 'Wedding Services', icon: 'add-outline'},
    {image: 'assets/images/edit-11.png', title: 'Success Stories', icon: 'add-outline'},
    {image: 'assets/images/edit-12.png', title: 'More', icon: 'add-outline'},


  ]

  constructor() { }

  ngOnInit() {}

  onClick(){
    
  }

}
