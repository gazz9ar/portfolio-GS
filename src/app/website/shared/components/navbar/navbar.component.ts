import { Component, OnDestroy, OnInit } from '@angular/core';
import { AngularFireStorage } from '@angular/fire/compat/storage';
import { FormControl } from '@angular/forms';
import { Subscription, takeUntil, tap } from 'rxjs';
import { DarkModeService } from '../../services/dark-mode.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit, OnDestroy {

  toggleControl = new FormControl(false);
  darkModeActivated:boolean = false;
  CVSubscription?:Subscription;

  constructor(
    private darkModeService:DarkModeService,
    private storage: AngularFireStorage
  ) { 

  }

  ngOnInit(): void {
    this.checkForDarkModeChange();
  }

  ngOnDestroy(): void {
    this.CVSubscription?.unsubscribe();
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

  downloadCV(): void {    
    const ref = this.storage.ref('SANTILLAN-GASPAR-CV-ENG.pdf');
    this.CVSubscription = ref.getDownloadURL()
    .subscribe( url => {
      window.open(url);      
    });
    
  }

}
