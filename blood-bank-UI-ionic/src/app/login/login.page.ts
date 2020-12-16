import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { AuthService } from '../services/auth/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  form: FormGroup;
  validation_messages = 'Field is required.';
  submitted: boolean;

  constructor(private formBuilder: FormBuilder,
    public alertController: AlertController,
    private route: Router,
    private auth: AuthService) { }

  ngOnInit() {
    localStorage.clear();
    this.form = this.formBuilder.group({
      username: [null, [Validators.required]],
      pwd: [null, [Validators.required]],
    });
  }

  onSubmit() {
    this.submitted = true;
    if (this.form.valid) {
      if (this.form.value.username.toLowerCase() === 'admin' && this.form.value.pwd === 'pwd') {
        this.auth.setUser(this.form.value.username.toUpperCase());
        this.route.navigateByUrl('');
      } else {
        this.invalidUserAlert('Invalid User');
      }
    }

  }

  async invalidUserAlert(msg: string) {
    const alert = await this.alertController.create({
      cssClass: 'my-custom-class',
      header: 'Error Alert',
      // subHeader: 'Subtitle',
      message: msg,
      buttons: [{
        text: 'Okay'
      }]
    });

    await alert.present();
  }

}
