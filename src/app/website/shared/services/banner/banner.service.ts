import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, of } from 'rxjs';

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
      left:'30%',
      bottom:'40%'
    },
    {
      name:'angular',
      url:'assets/angular.webp',
      left:'61%',
      bottom:'30%'
    },
    {
      name:'css',
      url:'assets/CSS.webp',
      left:'44%',
      bottom:'15%'
    },
    {
      name:'html5',
      url:'assets/HTML.webp',
      left:'37%',
      bottom:'10%'
    },
    {
      name:'rxjs',
      url:'assets/rxjs.webp',
      left:'78%',
      bottom:'14%'
    },
    {
      name:'typescript',
      url:'assets/typescript.webp',
      left:'18%',
      bottom:'19%'
    },
    {
      name:'material',
      url:'assets/material.webp',
      left:'51%',
      bottom:'15%'
    },
    {
      name:'firebase',
      url:'assets/firebase.webp',
      left:'66%',
      bottom:'27%'
    },
    {
      name:'sql',
      url:'assets/sql.webp',
      left:'69%',
      bottom:'38%'
    },
    {
      name:'git',
      url:'assets/git.webp',
      left:'23%',
      bottom:'48%'
    },
    {
      name:'scss',
      url:'assets/scss.webp',
      left:'55%',
      bottom:'22%'
    },
    {
      name:'bootstrap',
      url:'assets/bootstrap.webp',
      left:'84%',
      bottom:'17%'
    }
  ];

  private scrolledSubject:BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
  public scrolledOb$:Observable<boolean> = this.scrolledSubject.asObservable();

  public skillsIcons:Observable<Skill[]> = of(this.skills);
  
  constructor() { }


  changeToScrolled(): void {
    setTimeout(() => {
      this.scrolledSubject.next(true);
    }, 500);
    
    setTimeout(() => {
      this.scrolledSubject.next(false);
    }, 1500);
  }

  changeToNotScrolled(): void {
    this.scrolledSubject.next(false);
  }
}
