import { Component, OnInit } from '@angular/core';
import { faLinkedin, faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.scss']
})
export class BannerComponent implements OnInit {

  faLinkedin = faLinkedin;
  faWhatsapp = faWhatsapp;
  faEnvelope = faEnvelope;
  constructor() { }

  ngOnInit(): void {
  }

}
