import { Component, OnInit } from '@angular/core';
import { PeliService } from '../../services/peli.service';
import { ActivatedRoute } from '@angular/router';

import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';
import { AngularFireAuth } from '@angular/fire/auth';

@Component({
  selector: 'app-peli-details',
  templateUrl: './peli-details.page.html',
  styleUrls: ['./peli-details.page.scss'],
})
export class PeliDetailsPage implements OnInit {
  content: any = null;

  constructor(private peliService: PeliService, private activatedRoute: ActivatedRoute,
    private authService: AuthService, private router: Router, private afAuth: AngularFireAuth) { }

  ngOnInit() {
    let id = this.activatedRoute.snapshot.paramMap.get('id');
    this.peliService.getDetails(id).subscribe(result => this.content = result);
  }

  onLogout(){
    console.log('Hasta la proxima!');
    this.afAuth.auth.signOut();
    this.router.navigateByUrl('/register');
  }

}
