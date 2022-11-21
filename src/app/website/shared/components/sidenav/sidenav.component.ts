import { Component, OnInit, ViewChild } from '@angular/core';
import { Observable } from 'rxjs';
import { DarkModeService } from '../../services/dark-mode.service';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss']
})
export class SidenavComponent implements OnInit {

  showFiller = false;
  isExpanded = false;
  darkmode?:Observable<boolean>;
  @ViewChild('drawer') drawer:any;

  constructor(
    private darkmodeService:DarkModeService,
  ) { 
    this.darkmode = darkmodeService.darkModeOb;
  }

  ngOnInit(): void {
  }

  expand(): void {
    this.drawer.toggle()
    this.isExpanded = !this.isExpanded; 
  }

}
