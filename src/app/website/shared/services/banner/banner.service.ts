import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

interface Skill {
  name:string;
  url:string;
  left:string;
  bottom?:string;
}
@Injectable({
  providedIn: 'root'
})
export class BannerService {

  private skills:Skill[] = [
    {
      name:'javascript',
      url:'assets/js.webp',
      left:'30%'
    },
    {
      name:'angular',
      url:'assets/angular.webp',
      left:'61%'
    }
  ];

  public skillsIcons:Observable<Skill[]> = of(this.skills)
  
  constructor() { }
}
