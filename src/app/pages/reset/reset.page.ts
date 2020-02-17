import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';
import { User } from '../../model/user.class';

import { LoadingController } from '@ionic/angular';


@Component({
  selector: 'app-reset',
  templateUrl: './reset.page.html',
  styleUrls: ['./reset.page.scss'],
})
export class ResetPage implements OnInit {

  user: User = new User();
  constructor(private router: Router, private authSvc: AuthService) { }

  ngOnInit() {
  }

  async onResetPassword(){
    const user = await this.authSvc.onResetPassword(this.user).then(() => {
      this.router.navigateByUrl('/login');
    }).catch(function(error) {
      console.log('ocurrio un error', error);
    });
  }
}
