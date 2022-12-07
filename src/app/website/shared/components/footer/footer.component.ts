import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { DarkModeService } from '../../services/dark-mode.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent {

  public darkMode$?:Observable<boolean>;

  constructor(
    private darkModeService:DarkModeService
  ) {
    this.darkMode$ = this.darkModeService.darkModeOb;
  }
}
