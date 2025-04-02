import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { Auth, user } from '@angular/fire/auth';
import { map, Observable } from 'rxjs';

export const authGuard: CanActivateFn = (route, state) => {
  const auth = inject(Auth)
  const router = inject(Router);

  return user(auth).pipe(
    map((firebaseUser) => {
      if (firebaseUser) {
        return true; // Allow access if user is authenticated
      } else {
        router.navigate(['/login']); // Redirect to login if not authenticated
        return false;
      }
    })
  );
};
