import { animate, state, style, transition, trigger } from '@angular/animations';
import { Component, HostListener, OnInit } from '@angular/core';
import { faLinkedin, faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { Observable, takeUntil } from 'rxjs';
import { Unsub } from 'src/app/core/utils/Unsubscription';
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
  faEnvelope = faEnvelope;
  scrolled:boolean = false;
  darkmode?:Observable<boolean>;
  skills$?:Observable<Skill[]>;
  currentPagePosition:number = 0;
  userScrolledInterval:boolean = false;

  @HostListener('window:scroll', ['$event']) userScrolled(event:any){ 
    this.setScrolling(event);    
  }
 
  constructor(
    private darkmodeService:DarkModeService,
    private bannerService:BannerService
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
    this.checkForScroll();    
  }

  setScrolling(event:any):void {
    event.preventDefault();
    const currentPosition:number = event.target.children[0].scrollTop;    
    if (currentPosition > this.currentPagePosition && !this.userScrolledInterval) {      
      this.onBannerScroll();
    }   
    this.currentPagePosition = currentPosition;
    this.scrolled = true;    
    setTimeout(() => {
      this.scrolled = false;
    }, 500);
  }


  onBannerScroll(): void {
    this.bannerService.changeToScrolled();    
  }

  checkForScroll(): void {
    this.bannerService
    .scrolledOb$
    .pipe(
      takeUntil(this.unsubscribe$)
    )
    .subscribe(
      resp => {        
        resp ? this.userScrolledInterval = true : this.userScrolledInterval = false;      
      }
    )
  }

}
