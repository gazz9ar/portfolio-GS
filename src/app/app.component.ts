import { Component, HostBinding } from '@angular/core';
import { FormControl } from '@angular/forms';
import { DarkModeService } from './website/shared/services/dark-mode.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Gaspar Santillan | Web developer ';
  @HostBinding('class') className = '';
  // toggleControl = new FormControl(false);

  constructor(private darkModeService:DarkModeService) {

  }
  ngOnInit(): void {
    // this.toggleControl.valueChanges.subscribe((darkMode) => {
    //   const darkClassName = 'darkMode';
    //   this.className = darkMode ? darkClassName : '';
    // });

    this.darkModeService.darkModeOb.subscribe((darkMode) => (this.className = darkMode ? 'darkMode' : ''));
  } 
}
