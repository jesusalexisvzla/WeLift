import { Injectable, inject } from '@angular/core';
import { Auth, user, signInWithPopup, GoogleAuthProvider, signOut, UserCredential } from '@angular/fire/auth'
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private auth = inject(Auth);
  public user$: Observable<any> = user(this.auth);;

  constructor() { }
  
  async signInWithGoogle() {
    try {
      const googleProvider = new GoogleAuthProvider();
      const userCredential = await signInWithPopup(this.auth, googleProvider);
      console.log('User signed in:', userCredential.user);
      return userCredential;
    } catch (error) {
      console.error('Google Sign-In error:', error);
      throw error;
    }
  }

  async signOutUser() {
    try {
      await signOut(this.auth);
      console.log('User signed out'); 
    } catch (error) {
      console.error('Sign out error:', error);
    }
  }
}