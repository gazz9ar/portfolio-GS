import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DarkModeService {

  private darkModeSubject:BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
  public darkModeOb:Observable<boolean> = this.darkModeSubject.asObservable();

  constructor() { }

  changeToDarkMode(): void {
    this.darkModeSubject.next(true);
  }
  changeToLightMode(): void {
    this.darkModeSubject.next(false);
  }
}
