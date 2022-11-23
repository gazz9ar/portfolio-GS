import { animate, state, style, transition, trigger } from '@angular/animations';
import { AfterViewInit, Component, ElementRef, HostListener, OnInit, ViewChild } from '@angular/core';
import { faLinkedin, faWhatsapp } from '@fortawesome/free-brands-svg-icons';
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
  lastPagePosition:number = 0;
  userScrolledInterval:boolean = false;
  currentSection:number = 0;
  autoScrolled:boolean = false;

  @ViewChild("banner") banner?: ElementRef; 
 
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


  @HostListener('window:scroll', ['$event']) userScrolled(event:any) {       
    console.log('DETECTED SCROLL'); 
    this.setScrolling(event);        
  }

  setScrolling(event:any):void {    
    disableBodyScroll(this.banner?.nativeElement);     
    this.detectScrollDownOrUp(event); 
    this.setScrollForIconAnimation();   
  }

  detectScrollDownOrUp(event:any): void {      
    const currentPosition:number = event.target.children[0].scrollTop;    
    if (currentPosition > this.lastPagePosition && !this.userScrolledInterval) {     
      this.onDownScroll();
    } else if(currentPosition < this.lastPagePosition && !this.userScrolledInterval) {
      this.onUpScroll();
    }
    this.lastPagePosition = currentPosition;
  }  

  setScrollForIconAnimation(): void {
    this.scrolled = true;    
    setTimeout(() => {
      this.scrolled = false;
    }, 500);
  }

  onDownScroll(): void { 
    this.currentSection++;
    this.bannerService.changeSection(this.currentSection);          
    setTimeout(() => {
      enableBodyScroll(this.banner?.nativeElement);
    }, 3500);
  }

  onUpScroll(): void {      
    if (this.currentSection > 0) {
      this.currentSection--; 
    }     
    this.bannerService.changeSection(this.currentSection);          
    setTimeout(() => {
      enableBodyScroll(this.banner?.nativeElement);
    }, 3500);
  }

  checkForScroll(): void {
    this.bannerService
    .scrolledIntervalOb$
    .pipe(
      takeUntil(this.unsubscribe$)
    )
    .subscribe(
      resp => {            
        resp ? this.userScrolledInterval = true : this.userScrolledInterval = false;         
      }
    );

    this.bannerService
    .scrolledSectionOb$
    .pipe(
      takeUntil(this.unsubscribe$)
    )
    .subscribe(
      (section:number) => {          
        this.currentSection = section;
        if(section === 0) {         
          this.banner?.nativeElement.scrollIntoView({behavior: "smooth", block: "start", inline: "nearest"});                      
        }
      }
    );  

   
  }

}
