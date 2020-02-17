import { Component, OnInit } from '@angular/core';

import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';
import { User } from '../../model/user.class';

import { NavController, LoadingController } from '@ionic/angular';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {

  user: User = new User();

  constructor(private authSvc: AuthService, private router: Router, private loadingController: LoadingController) { }

  ngOnInit() {
  }

  async onRegister() {
    const user = await this.authSvc.onRegister(this.user);

    if (user) {
      console.log('Registro exitoso');
      const loading = await this.loadingController.create({
        message: 'Contacto Guardado'
      });
      await loading.present();
      loading.dismiss();
      this.router.navigateByUrl('/login');
    } else {
      const loading = await this.loadingController.create({
        message: 'Fallo registro'
      });
      await loading.present();
      loading.dismiss();
    }
  }
}
