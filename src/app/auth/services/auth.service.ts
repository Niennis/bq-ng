import { Injectable } from '@angular/core';
import { auth } from 'firebase/app';
import { User } from 'firebase';
import { AngularFireAuth } from '@angular/fire/auth';
import { first } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  public user: User;
  // public username: string;
  
  constructor(public afAuth: AngularFireAuth) { }

  async login(email: string, password: string) {
    try {
      const result = await this.afAuth.signInWithEmailAndPassword(email, password)
      return result;
    }
    catch (err) {
      console.log(err)
    }
  }

  async register(email: string, password: string, username: string) {
    try {
      const result = await this.afAuth.createUserWithEmailAndPassword(email, password);
      console.log('result.user', result.user);
      console.log('result', result);
      
      result.user.updateProfile({
        displayName: username
      })
      return result
    }
    catch (err) {
      console.log('error', err);
    }
  }

  async logout() {
    try {
      await this.afAuth.signOut()
    }
    catch (err) {
      console.log(err);
    }
  }

  getCurrentUser() {
    return this.afAuth.authState.pipe(first()).toPromise()
  }
}
