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
  constructor(
    private darkModeService:DarkModeService
  ) { }

  ngOnInit(): void {
    this.checkForDarkModeChange();
  }

  checkForDarkModeChange(): void {
    this.toggleControl.valueChanges.subscribe((darkMode) => (darkMode ? this.darkModeService.changeToDarkMode() : this.darkModeService.changeToLightMode()))
  }

}
