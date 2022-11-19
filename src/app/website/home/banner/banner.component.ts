import { animate, state, style, transition, trigger } from '@angular/animations';
import { Component, HostListener, OnInit } from '@angular/core';
import { faLinkedin, faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { Observable } from 'rxjs';
import { BannerService } from '../../shared/services/banner/banner.service';
import { DarkModeService } from '../../shared/services/dark-mode.service';
interface Skill {
  name:string;
  url:string;
  left:string;
  bottom?:string;
}
@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.scss'],
  animations: [
    trigger('floatingIcon', [

      state('end', style({       
        left: '{{left}}',
        bottom: '25%',
      }),
      {params: {left: '30%'}}),

      state('start', style({
        left:'{{left}}',
        bottom:0
      }),
      {params: {left: '30%'}}),

      transition('end => start',[
        animate('2s')
      ]),
      transition('start => end',[
        animate('2s')
      ])
    ])
  ]
})

export class BannerComponent implements OnInit {

  faLinkedin = faLinkedin;
  faWhatsapp = faWhatsapp;
  faEnvelope = faEnvelope;
  scrolled:boolean = false;
  darkmode?:Observable<boolean>;
  skills$?:Observable<Skill[]>;

  @HostListener('window:scroll') userScrolled(){
    this.scrolled = true;  
    setTimeout(() => {
      this.scrolled = false;
    }, 500);
  }
 
  constructor(
    private darkmodeService:DarkModeService,
    private bannerService:BannerService
  ) {
    this.darkmode = darkmodeService.darkModeOb;
    this.skills$ = bannerService.skillsIcons;
   }

  ngOnInit(): void {
    this.scrolled = true; 
    setTimeout(() => {
      this.scrolled = false;
    }, 500);   
  }

}
