import { Component, OnInit } from '@angular/core';

import { Observable } from 'rxjs';
import { PeliService } from '../../services/peli.service';
import { iPelis } from '../../model/iPelis.interface';

import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';
import { AngularFireAuth } from '@angular/fire/auth';


@Component({
  selector: 'app-pelis',
  templateUrl: './pelis.page.html',
  styleUrls: ['./pelis.page.scss'],
})
export class PelisPage implements OnInit {

  results : Observable<iPelis>;
  term: string='';
  type: string='';

  constructor( private peliService: PeliService,  
    private authService: AuthService, private router: Router, private afAuth: AngularFireAuth) { }

  ngOnInit() {
  }


  searchChanged(): void{
    this.results = this.peliService.searchMovies(this.term, this.type);
  }

  onLogout(){
    console.log('Hasta la proxima!');
    this.afAuth.auth.signOut();
    this.router.navigateByUrl('/register');
  }

}
