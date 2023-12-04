import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
})
export class ProfilePage implements OnInit {
  public receiveUpdates = true;
  public activationLabel: string;
  public email = '';
  public emailSent = false;
  
  private activationLabelDefault = 'No activation email has been sent to your account yet.';

  constructor() { 
    this.activationLabel = this.activationLabelDefault;
  }

  ngOnInit() {
  }

  public sendActivationEmail() {
    console.log('email', this.email);
    console.log('receiveUpdates', this.receiveUpdates);
    this.emailSent = true;
    this.activationLabel = 'Activation email has been sent.';

    const intervalId = setInterval(() => {
      this.emailSent = false;
      this.activationLabel = this.activationLabelDefault;
      console.log('reset button');
      clearInterval(intervalId);
    }, 5000);
  }
}
