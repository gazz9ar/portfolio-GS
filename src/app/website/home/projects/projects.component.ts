import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { disableBodyScroll } from 'body-scroll-lock';
import { take, takeUntil } from 'rxjs';
import { Unsub } from 'src/app/core/utils/Unsubscription';
import { BannerService } from '../../shared/services/banner/banner.service';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent extends Unsub implements OnInit, AfterViewInit {

  @ViewChild('projectsElement') projectsElement?:ElementRef;
  constructor(
    private bannerService:BannerService
  ) {
    super();
  }
  
  ngOnInit(): void {
    
  }
  
  ngAfterViewInit(): void {
    this.checkForScroll();
  }

  checkForScroll(): void {
    this.bannerService.scrolledSectionOb$
    .pipe(
      takeUntil(this.unsubscribe$)
    )
    .subscribe(
      (section:number) => {
        if (section === 1) {       
          disableBodyScroll(this.projectsElement?.nativeElement)                      
          this.projectsElement?.nativeElement.scrollIntoView({behavior: "smooth", block: "start", inline: "nearest"});          
        }
      }
    )
  }
}
