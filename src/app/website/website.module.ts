import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { WebsiteRoutingModule } from './website-routing.module';
import { WebsiteComponent } from './website.component';
import { HomeComponent } from './home/home.component';
import { CoreModule } from '../core/core.module';
import { NavbarComponent } from './shared/components/navbar/navbar.component';
import { BannerComponent } from './home/banner/banner.component';
import { SidenavComponent } from './shared/components/sidenav/sidenav.component';
import { ProjectsComponent } from './home/projects/projects.component';
import { SkillsComponent } from './home/skills/skills.component';


@NgModule({
  declarations: [
    WebsiteComponent,
    HomeComponent,
    NavbarComponent,
    BannerComponent,
    SidenavComponent,
    ProjectsComponent,
    SkillsComponent
  ],
  imports: [
    CommonModule,
    WebsiteRoutingModule,  
    CoreModule
  ],
  exports: [
    NavbarComponent
  ]
})
export class WebsiteModule { }
