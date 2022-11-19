import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { DarkModeService } from '../../services/dark-mode.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  toggleControl = new FormControl(false);
  darkModeActivated:boolean = false;

  constructor(
    private darkModeService:DarkModeService
  ) { 

  }

  ngOnInit(): void {
    this.checkForDarkModeChange();
  }

  checkForDarkModeChange(): void {
    this.toggleControl.valueChanges.subscribe((darkMode) => {
      if (darkMode) {
        this.darkModeActivated = true;
        this.darkModeService.changeToDarkMode()
      } else {
        this.darkModeActivated = false;
        this.darkModeService.changeToLightMode()
      }     
    })
  }

}
