import { Component,Inject } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Observable } from 'rxjs';
import { DarkModeService } from '../../services/dark-mode.service';
import { urlWhatsapp } from './whatsappToken/whatsappToken';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
  providers: [
		{ provide: urlWhatsapp, useValue: 'https://api.whatsapp.com/send' }
	]
})
export class FooterComponent {

  public darkMode$?:Observable<boolean>;
  footerForm = new FormGroup({
		name: new FormControl('', Validators.required),
		message: new FormControl('', Validators.required),
    email: new FormControl(''),
	});
  private messageToSend: string = '';

  constructor(
    private darkModeService:DarkModeService,
    @Inject(urlWhatsapp) public whatsapUrl: string
  ) {
    this.darkMode$ = this.darkModeService.darkModeOb;
  }


  onSubmit() {
		if (this.footerForm.invalid) {
			return;
		}
    this.messageToSend += "Hi, I'm contacting you from your website...%0a";
		this.messageToSend += 'Name:%20';
		this.messageToSend += (this.footerForm?.get('name')?.value as any).replace(/\s/g, '%20');
    if (this.footerForm?.get('email')?.value) {
      this.messageToSend += '%0aEmail:%20';
      this.messageToSend += (this.footerForm?.get('email')?.value as any).replace(/\s/g, '%20');
    }
		this.messageToSend += '%0aMessage:%0a';
		this.messageToSend += (this.footerForm?.get('message')?.value as any).replace(/\s/g, '%20');
		window.open(this.whatsapUrl + '?phone=543534258397&text=' + this.messageToSend, '_blank');	

    this.messageToSend = '';
    this.footerForm.reset();
	}
}
