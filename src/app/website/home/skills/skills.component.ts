import { Component } from '@angular/core';
import { from, Observable, of } from 'rxjs';
import { Experience } from '../../shared/models/Experience';
import { Skill } from '../../shared/models/Skill';
import { BannerService } from '../../shared/services/banner/banner.service';
import { DarkModeService } from '../../shared/services/dark-mode.service';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.scss']
})
export class SkillsComponent {

 
  skills$?:Observable<Skill[]>;
  experiences$?:Observable<Experience[]>;
  darkMode$?:Observable<boolean>;

  constructor(
    private bannerService:BannerService,
    private darkModeService:DarkModeService
  ) {
    this.skills$ = from(this.bannerService.skillsIcons);
    this.experiences$ = of(this.bannerService.experiences$);
    this.darkMode$ = this.darkModeService.darkModeOb;
  }
}
