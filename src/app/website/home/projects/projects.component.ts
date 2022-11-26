import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { disableBodyScroll } from 'body-scroll-lock';
import { Observable, take, takeUntil } from 'rxjs';
import { Unsub } from 'src/app/core/utils/Unsubscription';
import { BannerService } from '../../shared/services/banner/banner.service';
import { DarkModeService } from '../../shared/services/dark-mode.service';
import { ProjectsService } from '../../shared/services/projects/projects.service';
import { Project } from '../../shared/models/Project'

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent extends Unsub implements OnInit, AfterViewInit {

  @ViewChild('projectsElement') projectsElement?:ElementRef;
  darkmode?:Observable<boolean>;
  projects$?:Observable<Project[]>;

  constructor(
    private bannerService:BannerService,
    private darkModeService:DarkModeService,
    private projectsService:ProjectsService,
    private router:Router
  ) {
    super();
    this.darkmode = darkModeService.darkModeOb;
  }
  
  ngOnInit(): void {
    this.projects$ = this.projectsService.projects;
  }
  
  ngAfterViewInit(): void {
 
  }

  navigateTo(website:string): void {   
  
    window.open(website);
  }

}
