import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
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
    this.bannerService.changeToNotScrolled();
  }
  
  ngAfterViewInit(): void {
    this.checkForScroll();
  }

  checkForScroll(): void {
    this.bannerService.scrolledOb$
    .pipe(
      takeUntil(this.unsubscribe$)
    )
    .subscribe(
      resp => {
        if (resp) {         
          console.log('should scroll');                 
          this.projectsElement?.nativeElement.scrollIntoView({behavior: "smooth", block: "start", inline: "nearest"});          
        }
      }
    )
  }
}
