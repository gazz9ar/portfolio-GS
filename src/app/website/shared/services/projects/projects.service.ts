import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Project } from '../../models/Project';

@Injectable({
  providedIn: 'root'
})
export class ProjectsService {


  projects:Observable<Project[]> = of([
    {
      imgUrl:'assets/amela.webp',
      name: 'Amelia Reciclados',
      type: 'Fullstack',
      description: 'E-commerce website for a small company that sells furniture.',
      stack:'Angular, Firebase',
      websiteUrl:'https://master--amelia-reciclados.netlify.app/inicio'
    },
    {
      imgUrl:'assets/desvot.webp',
      name: 'Desvot',
      type: 'Fullstack',
      description: 'Voting system built on top of Blockchain.',
      stack:'Blockchain, Metamask, Truffle, Web3js, Angular, Firebase, Solidity',
      websiteUrl:'https://github.com/gazz9ar/Desvot-GS'
    }
  ]);
  constructor() { }
}
