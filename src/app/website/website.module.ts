import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { WebsiteRoutingModule } from './website-routing.module';
import { WebsiteComponent } from './website.component';
import { HomeComponent } from './home/home.component';
import { CoreModule } from '../core/core.module';
import { NavbarComponent } from './shared/components/navbar/navbar.component';
import { BannerComponent } from './home/banner/banner.component';


@NgModule({
  declarations: [
    WebsiteComponent,
    HomeComponent,
    NavbarComponent,
    BannerComponent
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
