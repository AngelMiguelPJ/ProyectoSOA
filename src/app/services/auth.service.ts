import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { User } from '../model/user.class';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  public isLogged: any = false;

  constructor(public afAuth: AngularFireAuth) {
    afAuth.authState.subscribe(user => this.isLogged = user);
   }
   //Inicio Sesion
   async onLogin(user: User){
     try{
      return await 
      this.afAuth.auth.signInWithEmailAndPassword(user.email, user.password);
     }catch(error){
      console.log('Error login:', error);
     }
   }

   //Registro
   async onRegister(user: User){
    try{
      return await 
      this.afAuth.auth.createUserWithEmailAndPassword(user.email, user.password);
     }catch(error){
      console.log('Error registro:', error);
     }
   }

    //reset
    async onResetPassword (user:User){
      try{
        return await this.afAuth.auth.sendPasswordResetEmail(
          user.email);
      }catch(error){
        console.log('Error envio', error);
        }
      }

}
