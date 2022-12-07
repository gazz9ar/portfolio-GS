import { Injectable } from '@angular/core';
import { BehaviorSubject, delay, Observable, of } from 'rxjs';
import { Experience } from '../../models/Experience';
import { Skill } from '../../models/Skill';


@Injectable({
  providedIn: 'root'
})
export class BannerService {

  private skills:Skill[] = [
    {
      name:'Javascript',
      url:'assets/js.webp',
      left:'30%',
      bottom:'40%',
      backgroundColor:'#eed81c36'
    },
    {
      name:'Firebase',
      url:'assets/firebase.webp',
      left:'66%',
      bottom:'27%',
      backgroundColor:'#eed81c36',
      padding:true
    },
    {
      name:'GIT',
      url:'assets/git.webp',
      left:'23%',
      bottom:'48%',
      backgroundColor:'#EF652536'
    },
    {
      name:'HTML5',
      url:'assets/HTML.webp',
      left:'37%',
      bottom:'10%',
      backgroundColor:'#EF652536'
    },
    {
      name:'Angular',
      url:'assets/angular.webp',
      left:'61%',
      bottom:'30%',
      backgroundColor:'#C6052B36'
    },
    {
      name:'NestJS',
      url:'assets/nestjs.svg',
      left:'41%',
      bottom:'37%',
      backgroundColor:'#C6052B36'
    },
    {
      name:'Typescript',
      url:'assets/typescript.webp',
      left:'18%',
      bottom:'19%',   
      backgroundColor:'#2A69F036'
    },
    {
      name:'CSS',
      url:'assets/CSS.webp',
      left:'44%',
      bottom:'15%',
      backgroundColor:'#2A69F036'
    },  
    {
      name:'Material',
      url:'assets/material.webp',
      left:'51%',
      bottom:'15%',
      backgroundColor:'#75757559'
    }, 
    {
      name:'SQL',
      url:'assets/sql.png',
      left:'69%',
      bottom:'38%',   
      backgroundColor:'#75757559'
    },  
    {
      name:'RxJS',
      url:'assets/rxjs.webp',
      left:'78%',
      bottom:'14%',
      backgroundColor:'#8C0BFC36'
    },
    {
      name:'SCSS',
      url:'assets/scss.webp',
      left:'55%',
      bottom:'22%',
      backgroundColor:'#8C0BFC36'
    },
    {
      name:'Bootstrap',
      url:'assets/bootstrap.webp',
      left:'84%',
      bottom:'17%',
      backgroundColor:'#8C0BFC36'
    }
  ];

  public experiences$:Experience[] = [
    {
      year:'2021',
      company:'ROSS Outside the box',
      role:'Fullstack Developer'
    }, 
    {
      year:'2020',
      company:'XION',
      role:'Front-end JR'
    },
    {
      year:'2019',
      company:'BIT Solutions',
      role:'Business analyst'
    } 
  ];

  // will be set to true(scrolled) for X milliseconds
  private scrolledIntervalSubject:BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
  public scrolledIntervalOb$:Observable<boolean> = this.scrolledIntervalSubject.asObservable();

   // when user scrolled detect section
   private scrolledSectionSubject:BehaviorSubject<number> = new BehaviorSubject<number>(0);
   public scrolledSectionOb$:Observable<number> = this.scrolledSectionSubject.asObservable();

  public skillsIcons:Observable<Skill[]> = of(this.skills);
  
  constructor() { }

  changeSection(section:number): void {    
    console.log('section -->', section);    
    this.scrolledIntervalSubject.next(true);
    setTimeout(() => {
      this.scrolledSectionSubject.next(section);
    }, 1000);    
    setTimeout(() => {    
      this.scrolledIntervalSubject.next(false);
    }, 3000);
  }

}
