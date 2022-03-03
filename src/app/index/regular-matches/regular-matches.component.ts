import { Component, Input, OnInit } from '@angular/core';
declare let $: any;

@Component({
  selector: 'app-regular-matches',
  templateUrl: './regular-matches.component.html',
  styleUrls: ['./regular-matches.component.scss'],
})
export class RegularMatchesComponent implements OnInit {
  @Input() profileList: any[] = [];  
  imgCount = 50;
  
  constructor() { }

  ngOnInit(): void {
    // $(window).scroll(() =>{
    //   if ($(this).scrollTop() > 300) {
    //       $('.header_bg').addClass('scroll_page');
    //   } else {
    //       $('.header_bg').removeClass('scroll_page');
    //   }
    // });
  }

}
