import { animate, state, style, transition, trigger } from '@angular/animations';
import { AfterViewInit, Component, ElementRef, HostListener, OnInit, ViewChild } from '@angular/core';
import { faGithub, faLinkedin, faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { Observable, takeUntil } from 'rxjs';
import { Unsub } from 'src/app/core/utils/Unsubscription';
import { BannerService } from '../../shared/services/banner/banner.service';
import { DarkModeService } from '../../shared/services/dark-mode.service';
import {
  disableBodyScroll,
  enableBodyScroll,
  clearAllBodyScrollLocks
} from "body-scroll-lock";
import { Router } from '@angular/router';

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
        bottom: '{{bottom}}',
      }),
      {params: 
        //default values
        {left: '30%',
        bottom: '25%'},       
      }),

      state('start', style({
        left:'{{left}}',
        bottom:0
      }),
      {params: {left: '30%'}}),

      transition('end => start',[
        animate('2s ease-in')
      ]),
      transition('start => end',[
        animate('2s ease-out')
      ])
    ])
  ]
})

export class BannerComponent extends Unsub implements OnInit {

  faLinkedin = faLinkedin;
  faWhatsapp = faWhatsapp;
  faGithub = faGithub;
  scrolled:boolean = false;
  darkmode?:Observable<boolean>;
  skills$?:Observable<Skill[]>; 

  @ViewChild("banner") banner?: ElementRef; 
 
  constructor(
    private darkmodeService:DarkModeService,
    private bannerService:BannerService,
    private router:Router
  ) {
    super();
    this.darkmode = darkmodeService.darkModeOb;
    this.skills$ = bannerService.skillsIcons;
   }

  ngOnInit(): void {     
    this.scrolled = true;    
    setTimeout(() => {
      this.scrolled = false;
    }, 500);             
  } 


  @HostListener('window:scroll') userScrolled() { 
    this.setScrollForIconAnimation();        
  }

  setScrollForIconAnimation(): void {
    this.scrolled = true;    
    setTimeout(() => {
      this.scrolled = false;
    }, 500);
  }

  navigateToLinkedIn() {    
    window.open('https://www.linkedin.com/in/gasparsantillan/', '_blank');
  }

  navigateToWhatsapp() {    
    window.open('https://www.linkedin.com/in/gasparsantillan/', '_blank');
  }

  navigateToGitHub() {    
    window.open('https://github.com/gazz9ar', '_blank');
  }

}
